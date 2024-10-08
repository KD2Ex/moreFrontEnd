import {makeAutoObservable, toJS} from "mobx";
import ProjectService from "../../api/services/ProjectService";
import {IProject} from "../models/interfaces/IProject";
import alert from "./alert";
import utils from "../utils";
import locale from "./locale";

class Project {

	constructor() {
		makeAutoObservable(this)
	}

	defaultItem: IProject = {
		area: 0,
		cost: {
			'ru': '',
			'en-US': ''
		},
		address: {
			'ru': '',
			'en-US': ''
		},
		images: [],
		levels: 0,
		timePeriod: {
			'ru': '',
			'en-US': ''
		},
		order: 0,
		files: [],
		desc: {
			'ru': '',
			'en-US': ''
		},
		height: 400,
		title: {
			'ru': '',
			'en-US': ''
		},
		id: 0
	}

	items: IProject[] = [];
	rowHeight: number = 400;
	loading: boolean = false;
	totalPages: number = 0;

	editItem: IProject | null = null;
	newItem: IProject = this.defaultItem;
	editModalOpen: boolean = false;

	resetEditItem(item: IProject) {
		item = this.defaultItem;
	}

	openEdit(item: IProject) {
		//this.setEditItem(item)
		this.editItem = item;
		this.setOpen(true)
	}

	setEditItem(item: IProject | null) {

		this.editItem = item;
	}

	setOpen(value: boolean) {
		this.editModalOpen = value;
		console.log(this.editModalOpen)
	}

	validate(item: IProject) {

		console.log(toJS(item))
		if (item.title['ru'] === '' || item.title['en-US'] === '') return false;
		if (item.desc['ru'] === '' || item.desc['en-US'] === '') return false;
		if (!item.images?.length && !item.files?.length) return false;

		return true;
	}

	isFull(item: IProject) {
		if (item.cost['ru'] === '' || item.cost['en-US'] === '') return false;
		if (item.timePeriod['ru'] === '' || item.timePeriod['en-US'] === '') return false;
		if (item.address['ru'] === '' || item.address['en-US'] === '') return false;
		if (item.levels === 0 || item.area === 0) return false;

		return true;
	}

	appendFile(item: IProject) {

		const formData = new FormData();

		formData.append("levels", `${item.levels}`)
		formData.append("area", `${item.area}`)

		if (item.files) {
			const fileImages = item.files.map(i => {
				return i.file;
			})

			for (let i = 0; i< fileImages.length; i++) {
				formData.append("images", fileImages[i])
			}
		}

		return formData;

	}

	swapItems(currentItem: IProject, targetItem: IProject) {

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

	async updateOrderFrom(items) {
		const response = await ProjectService.updateOrder(items);
	}

	async updateOrder() {

		const response = await ProjectService.updateOrder(this.items);
	}

	async update(newItem) {

		const formData = this.appendFile(newItem);
		formData.append("id", newItem.id)


		const title = this.formatLocaleData(newItem.title);
		const desc = this.formatLocaleData(newItem.desc);
		const cost = this.formatLocaleData(newItem.cost);
		const address = this.formatLocaleData(newItem.address);
		const timePeriod = this.formatLocaleData(newItem.timePeriod);

		const localeData = await ProjectService.updateLocaleData({
			projectId: newItem.id,
			title: title,
			desc: desc,
			cost: cost,
			address: address,
			timePeriod: timePeriod
		})
		
		const response = await ProjectService.update(formData);

		const index = this.items.findIndex(i => i.id === newItem.id);
		newItem.files = [];
		this.items[index] = newItem;

		for (const i of response.data) {
			this.items[index].images.push(i);
		}

		console.log(response.data)

		alert.openAlert("Проект успешно обновлен", "success");

		return response;
	}

	formatLocaleData(item) {

		const result = []

		for (let i = 0; i < locale.locales.length; i++) {
			const localeItem = locale.locales[i];

			const string = item[localeItem.name];

			result.push({name: string, localeId: localeItem.id})
		}

		return result;
	}

	async create(item: IProject) {

		const newItem = {...item}
		const formData = this.appendFile(newItem);

		const response = await ProjectService.create(formData);
		const data: IProject = {...response.data}

		const title = this.formatLocaleData(item.title);
		const desc = this.formatLocaleData(item.desc);
		const cost = this.formatLocaleData(item.cost);
		const address = this.formatLocaleData(item.address);
		const timePeriod = this.formatLocaleData(item.timePeriod);

		const localeData = await ProjectService.createLocaleData({
			projectId: data.id,
			title: title,
			desc: desc,
			cost: cost,
			address: address,
			timePeriod: timePeriod
		})

		data.title = item.title
		data.desc = item.desc
		data.cost = item.cost
		data.address = item.address
		data.timePeriod = item.timePeriod

		this.items.push(data)

		return response;
	}

	async getAllItems() {
		const response = await ProjectService.getProjects(1, 999);
		return response
	}

	async getItems(page, limit) {

		this.setLoading(true)
		const response = await ProjectService.getProjects(page, limit);
		this.totalPages = response.totalPages;

		response.items.forEach(i => {
			if (!i.height) {
				i.height = 400
			}
		})
		console.log(response)
		

		this.setItems([...this.items, ...response.items]);
		this.setLoading(false)
	}

	async delete(id: number) {

		const response = await ProjectService.delete(id)

		this.setItems([...this.items.filter(i => i.id !== id)]);

	}

	async deleteImage(name: string) {

		try {
			const response = await ProjectService.deleteImage(name);

			const proj = this.items.find((i) => {
				return i.images.find(j => j.name === name);
			})

			proj.images = proj.images.filter(i => i.name !== name);

			alert.openAlert("Изображение успешно удалено", "success")
		} catch (e) {
			alert.openAlert(e.message, "error")
		}


	}

	async saveHeight() {

		const response = await ProjectService.updateHeight(this.items);
		console.log(response)

	}

	setLoading(value: boolean) {
		this.loading = value;
	}

	setItems(value) {
		this.items = value;
	}

}

export default new Project();