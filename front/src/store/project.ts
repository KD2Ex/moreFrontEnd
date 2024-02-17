import {makeAutoObservable} from "mobx";
import ProjectService from "../../api/services/ProjectService";
import {IProject} from "../models/interfaces/IProject";
import paint from "./paint";
import {Form} from "react-router-dom";


class Project {

	constructor() {
		makeAutoObservable(this)
	}

	items: IProject[];
	rowHeight: number = 400;
	loading: boolean = false;
	totalPages: number;

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

		console.log(response)
		this.totalPages = response.totalPages;
		this.setItems([...this.items, ...response.items]);


		this.setLoading(false)
	}

	async delete(id: number) {

		const response = await ProjectService.delete(id)

		this.setItems([...this.items.filter(i => i.id !== id)]);

	}

	setLoading(value: boolean) {
		this.loading = value;
	}

	setItems(value) {
		this.items = value;
	}

}

export default new Project();