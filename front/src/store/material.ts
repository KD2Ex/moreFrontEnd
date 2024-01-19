import {IMaterial} from "../models/interfaces/IMaterial";
import MaterialService from "../../api/services/MaterialService";
import {makeAutoObservable} from "mobx";


class Material {

	items: IMaterial[] = [];

	constructor() {
		makeAutoObservable(this)


	}

	async getItems() {

		if (this.items.length === 0) {
			this.items = await MaterialService.fetchMaterials();
		}

		return this.items;
	}

	async addItem(value: string) {

		const response = await MaterialService.addMaterial(value)

		console.log(response.data)
		this.items.push({id: response.data.id, name: response.data.name})

	}
}

export default new Material();