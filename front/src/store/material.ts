import {IMaterial} from "../models/interfaces/IMaterial";
import MaterialService from "../../api/services/MaterialService";


class Material {

	items: IMaterial[] = [];

	async getItems() {

		if (this.items.length === 0) {
			this.items = await MaterialService.fetchMaterials();
		}

		return this.items;
	}

	async addItem(value: string) {

		const response = await MaterialService.addMaterial(value)

		console.log(response.data)


	}
}

export default new Material();