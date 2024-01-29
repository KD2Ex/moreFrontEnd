import {IPaint} from "../models/interfaces/IPaint";
import art1 from "../assets/art1.jpg";
import {sizes} from "../consts";
import {makeAutoObservable} from "mobx";
import {ISizeEdit} from "../models/interfaces/ISizeEdit";
import PaintingService from "../../api/services/PaintingService";
import alert from "./alert";
import material from "./material";


class Paint {

	constructor() {
		makeAutoObservable(this)
	}

	items: IPaint[] = [];
	viewItems: IPaint[] = [];

	newItem: IPaint = {};

	loading = false;

	editedPaintingsSizes: ISizeEdit[] = [];

	async getItems() {

		this.loading = true;

		const response = await PaintingService.fetchPaintings();

		this.setItems(response)

		this.loading = false;
	}

	setItems(value: IPaint[]) {
		this.items = value;
	}

	setViewItems(value: IPaint[]) {
		this.viewItems = value;
	}

	appendFile(item: IPaint) {

		const formData = new FormData();

		formData.append("title", item.title);
		formData.append("desc", item.desc);
		formData.append("height", `${item.height}`);
		formData.append("width", `${item.width}`);
		formData.append("price", `${item.price}`);
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

	async addPainting() {


		const newItem = this.newItem;
		console.log(newItem)
		const images = newItem.files.map(i => {
			return i.file
		})
		const formData = this.appendFile(newItem)

		formData.append("relativeSize", `4`);
		formData.append("objectFit", "cover");

		for (let i = 0; i < images.length; i++) {
			formData.append('images', images[i]);
		}
		const response = await PaintingService.addPainting(formData)

		this.items.push(response.data)
		console.log(response.data)
		this.newItem = {};
		return response;
	}

	async updatePainting(item) {

		try {
			const formData = this.appendFile(item);
			formData.append("id", item.id)

			const response = await PaintingService.updatePainting(formData)

			const index = this.items.findIndex(i => i.id == item.id);
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
		console.log(response)
		//this.editedPaintingsSizes = [];

	}

	isValidPaint(item: IPaint) {

		const trueItem = Object.entries(item);

		console.log(trueItem);

		for (let i of trueItem) {

			if (!i[1]) return false;
		}

		const files = trueItem.find(i => i[0] == 'files');

		if (files[1].length <= 0) return false;

		if (!item.material.name || !item.technique.name) return false;

		return true;
	}


	async deletePainting(id: number) {

		try {
			const response = await PaintingService.deletePainting(id);

			console.log(response.data)
			this.items.splice(this.items.findIndex(value => id === value.id), 1)
			console.log(this.items)
		} catch (e) {

		}

	}

	async deleteImage(name: string) {


		try {
			const response = await PaintingService.deleteImage(name);

			const paint = this.items.find((item) => {
				return item.images.includes(name);
			})
			console.log(paint)
			paint.images = paint.images.filter((item) => item != name);

			return response;
		} catch (e) {
			return e.message;
		}
	}
}

export default new Paint();