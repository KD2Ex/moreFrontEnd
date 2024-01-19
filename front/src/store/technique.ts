import {ITechnique} from "../models/interfaces/ITechnique";
import TechniqueService from "../../api/services/TechniqueService";
import MaterialService from "../../api/services/MaterialService";
import {makeAutoObservable} from "mobx";


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

}

export default new Technique()