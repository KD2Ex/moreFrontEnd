import {makeAutoObservable} from "mobx";
import ProjectService from "../../api/services/ProjectService";
import {IProject} from "../models/interfaces/IProject";
import paint from "./paint";
import {Form} from "react-router-dom";
import alert from "./alert";
import {IPaint} from "../models/interfaces/IPaint";


class Project {

	constructor() {
		makeAutoObservable(this)
	}

	items: IProject[];
	rowHeight: number = 400;
	loading: boolean = false;
	totalPages: number;

	editItem: IProject | null = null;
	editModalOpen: boolean = false;

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
		if (!value) {
			this.editItem = null
		}

	}

	validate(item: IProject) {

		const trueItem = Object.entries(item);



		/*for (let i = 0; i < trueItem.length; i++) {

			if (!trueItem[i][1]) return false;

		}*/
		return item.title && (item.images?.length || item.files?.length);

	}

	appendFile(item: IProject) {

		const formData = new FormData();

		formData.append("title", item.title)
		formData.append("desc", item.desc)
		formData.append("levels", `${item.levels}`)
		formData.append("area", `${item.area}`)
		formData.append("cost", `${item.cost}`)
		formData.append("timePeriod", item.timePeriod)
		formData.append("address", item.address)

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

	async updateOrder() {

		const response = await ProjectService.updateOrder(this.items);

	}

	async update(newItem) {

		const formData = this.appendFile(newItem);
		formData.append("id", newItem.id)

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

	async create(item: IProject) {

		const newItem = {...item}

		const formData = this.appendFile(newItem);

		const response = await ProjectService.create(formData);

		const data: IProject = {...response.data}
		this.items.push(data)

		return response;
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