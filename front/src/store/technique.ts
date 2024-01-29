import {ITechnique} from "../models/interfaces/ITechnique";
import TechniqueService from "../../api/services/TechniqueService";
import MaterialService from "../../api/services/MaterialService";
import {makeAutoObservable} from "mobx";
import alert from "./alert";
import loginPage from "../pages/LoginPage/LoginPage";


class Technique {

	items: ITechnique[] = []

	constructor() {
		makeAutoObservable(this)
	}

	async getItems() {

		if (this.items.length === 0) {
			this.items = await TechniqueService.fetchTechniques();
		}

		return this.items;

	}

	async addItem(value) {
		const response = await TechniqueService.addTechnique(value)

		console.log(response.data)
		this.items.push({id: response.data.id, name: response.data.name})
	}

	async deleteItem(id) {

		try {
			const response = await TechniqueService.removeTechnique(id);

			const index = this.items.findIndex(i => i.id === id);


			this.items.splice(index, 1);

			alert.openAlert('Материал успешно удален', "success")
		} catch (e) {
			alert.openAlert(e.message, "error")
		}


	}

}

export default new Technique()