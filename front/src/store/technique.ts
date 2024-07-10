import {ITechnique} from "../models/interfaces/ITechnique";
import TechniqueService from "../../api/services/TechniqueService";
import MaterialService from "../../api/services/MaterialService";
import {makeAutoObservable} from "mobx";
import alert from "./alert";
import loginPage from "../pages/LoginPage/LoginPage";


class Technique {

	items: ITechnique[] = []

	loading  = false;

	constructor() {
		makeAutoObservable(this)
	}

	async getItems() {
		if (this.loading) return;
		try {
			if (this.items.length === 0) {
				this.loading = true;
				this.items = await TechniqueService.fetchTechniques();
			}

			this.loading = false;
			return this.items;

		} catch (e) {
			console.log(e.message)
		}

	}

	async addItem(value) {

		const existing = this.items.find(i =>
			i.name.toLowerCase() === value.toLowerCase());

		if (existing) {
			alert.openAlert("Имя существует", "error");
			return false;
		}

		const response = await TechniqueService.addTechnique(value)

		console.log(response.data)
		this.items.push({id: response.data.id, name: response.data.name})

		return true;
	}

	async deleteItem(id) {

		try {
			const response = await TechniqueService.removeTechnique(id);

			const index = this.items.findIndex(i => i.id === id);


			this.items.splice(index, 1);

			alert.openAlert('Материал успешно удален', "success")
		} catch (e) {
		}


	}

}

export default new Technique()