import {IPaint} from "../models/interfaces/IPaint";
import art1 from "../assets/art1.jpg";
import {sizes} from "../consts";
import {makeAutoObservable, toJS} from "mobx";
import {ISizeEdit} from "../models/interfaces/ISizeEdit";
import PaintingService from "../../api/services/PaintingService";
import alert from "./alert";
import material from "./material";
import technique from "./technique";
import locale from "./locale";
import utils from "../utils";

class Paint {

	defaultPaint = {
		id: 0,
		title: {
			'ru': '',
			'en-US': '',
		},
		order: 0,
		technique: {
			id: 0,
			name: ''
		},
		material: {
			id: 0,
			name: '',
		},
		price: {
			'ru': '',
			'en-US': '',
		},
		files: [],
		desc: {
			'ru': '',
			'en-US': '',
		},
		images: [],
		height: 0,
		isFiltered: true,
		relativeSize: 4,
		width: 0,
	}

	constructor() {
		makeAutoObservable(this)
	}

	items: IPaint[] = [];
	viewItems: IPaint[] = [];
	rowHeight: number = 500;
	//filling: boolean = true;
	totalPages: number;
	newItem: IPaint | { } = this.defaultPaint;
	currentPage: number = 1;

	filters = {
		materialId: 0,
		techniqueId: 0
	}

	loading: boolean;

	sort: (a, b) => number;
	sortId: number = 1

	editedPaintingsSizes: ISizeEdit[] = [];

	resetNewItem() {
		this.newItem = this.defaultPaint;
	}

	setCurrentPage(value: number) {

		this.currentPage = value;
	}

	setFilters(value: {materialId: number, techniqueId: number}) {
		this.filters = {...value};
	}

	setRowHeight(value: number) {
		this.rowHeight = value;
	}

	setSort(func: (a, b) => number, id) {
		this.sort = func;

		this.sortId = id;
	}

	swapItems(currentItem: IPaint, targetItem: IPaint) {

		this.items = this.items.map(item => {

			if (item.id === targetItem.id) {
				return {...item, order: currentItem.order}
			}
			if (item.id === currentItem.id) {
				return {...item, order: targetItem.order}
			}

			return item;
		})

		console.log(this.items)

	}

	sortPaints(a, b) {

		if (a.order > b.order) {
			return 1
		}
		return -1;
	}

	async getFilteredCount() {

		return PaintingService.getFilteredCount(this.filters.materialId, this.filters.techniqueId);

	}

	async getItems(page: number, limit: number) {

		this.setLoading(true);

		const response = await PaintingService
			.fetchPaintings(
				page,
				limit,
				this.filters.materialId,
				this.filters.techniqueId,
				this.sortId,
				locale.currentLocale.id);

		console.log(response.paintings)

		const newItems = response.paintings.slice()


		this.setItems([...this.items, ...newItems])

		this.totalPages = response.totalPages
		this.setLoading(false);
		console.log(toJS(this.items))
	}

	setItems(value: IPaint[]) {
		this.items = value;
	}

	setViewItems(value: IPaint[]) {
		this.viewItems = value;
	}

	appendFile(item: IPaint) {

		const formData = new FormData();

		formData.append("title", `${utils.getAppendStringFromLocale(item.title)}`);
		formData.append("desc", `${utils.getAppendStringFromLocale(item.desc)}`);
		formData.append("height", `${item.height}`);
		formData.append("width", `${item.width}`);
		formData.append("price", `${utils.getAppendStringFromLocale(item.price)}`);
		formData.append("materialId", `${item.material.id}`)
		formData.append("techniqueId", `${item.technique.id}`)

		if (item.files) {
			const images = item.files.map(i => {
				return i.file
			})
			for (let i = 0; i < images.length; i++) {
				formData.append('images', images[i]);
			}
		}


		return formData;
	}

	async addPainting(item: IPaint) {

		console.log(item)

		const formData = this.appendFile(item)

		formData.append("relativeSize", `4`);
		formData.append("objectFit", "cover");
		//formData.append("order", this.items.find(i => ));


		const response = await PaintingService.addPainting(formData);

		const data: IPaint = {...response.data};

		// При добавлении картин будет показываться наименование материалов на русском языке
		// При обновлении страницы название замениться в соответствии с локализацией

		data.material = {
			id: +response.data.materialId,
			name: material.items.find(item => item.id === response.data.materialId).name
		}

		data.technique = {
			id: +response.data.techniqueId,
			name: technique.items.find(item => item.id === response.data.techniqueId).name
		}

		data.isFiltered = true;

		delete data.materialId;
		delete data.techniqueId;

		/* Новая картина добавляется в конце существующего массива картин
		* Поэтому если добавить новую картину, не прогрузив остальные, она будет
		* постоянно показываться внизу страницы, пока не займет положенный order
		* Поэтому менять порядок картин нужно строго после F5, либо форсить
		* обновление страницы, если картины не была добавлена внизу страницы
		* Либо добавлять картину по order'у последней картины на странице
		* Тогда придется инкрементировать order у всех картин впереди (хуйня)
		*  */
		this.items.push(data)

		console.log(data)

		this.newItem = null;
		return response;
	}

	async updatePainting(item) {

		try {
			const formData = this.appendFile(item);
			formData.append("id", item.id)

			const response = await PaintingService.updatePainting(formData)

			const index = this.items.findIndex(i => i.id == item.id);
			item.files = []
			this.items[index] = item;

			for (const i of response.data) {
				this.items[index].images.push(i);
			}

			console.log(response.data)

			alert.openAlert("Картина успешно обновлена", "success");

			//
			return response;
		} catch (e) {
			return e.message
		}

	}

	setNewItem(value: IPaint) {

		this.newItem = value;
	}

	addEdited(paint: IPaint) {

		const item: ISizeEdit = {
			id: paint.id,
			objectFit: paint.objectFit,
			relativeSize: paint.relativeSize
		};

		const editedPainting = this.editedPaintingsSizes.find(i => i.id === item.id)

		if (editedPainting) {
			editedPainting.objectFit = item.objectFit;
			editedPainting.relativeSize = item.relativeSize;
			console.log('arrEdited:')
			console.log(this.editedPaintingsSizes)
			return;
		}

		this.editedPaintingsSizes.push(item)
		console.log('arr:')
		console.log(this.editedPaintingsSizes)

	}

	async saveSizes() {

		const response = await PaintingService.editSizes(this.editedPaintingsSizes);
		this.editedPaintingsSizes = [];

		alert.openAlert("Размеры успешно обновлены", "success");

	}

	isValidPaintData(item: IPaint) {

		let index = 0;
		const trueItem = Object.entries(item);

		console.log(trueItem);

		for (let i of trueItem) {
			console.log(index++)

			if (i[0] === 'files'
				|| i[0] === 'relativeSize'
				|| i[0] === 'objectFit'
				|| i[0] === 'id'
				|| i[0] === 'order'
			) continue;

			if (!i[1]) return false;
		}

		if (!item.material.name || !item.technique.name) return false;

		return true;
	}

	isValidPaintImages(item: IPaint) {
		const trueItem = Object.entries(item);

		const files = trueItem.find(i => i[0] == 'files');
		//const images = trueItem.find(i => i[0] == 'images')


		console.log(files)

		if (files[1].length <= 0) return false;

		return true;
	}



	async delete(id: number) {

		try {
			const response = await PaintingService.deletePainting(id);
			console.log(response.data)

			this.items.splice(this.items.findIndex(value => id === value.id), 1)


			alert.openAlert("Картина успешно удалена", "success")
		} catch (e) {
			console.log(e.message)
		}

	}

	async deleteImage(name: string) {


		try {
			const response = await PaintingService.deleteImage(name);

			const paint = this.items.find((item) => {
				return item.images.find(i => i.name === name)
			})
			console.log(paint)
			paint.images = paint.images.filter((item) => item.name != name);

			return response;
		} catch (e) {
			return e.message;
		}
	}

	async updateOrder() {

		try {
			console.log(this.items)

			const response = await PaintingService.updateOrder(this.items);

		} catch (e) {
			alert.openAlert(e.message, "error")
			console.log(e.message)
		}

	}

	setLoading(value: boolean) {

		this.loading = value;

	}
}

export default new Paint();