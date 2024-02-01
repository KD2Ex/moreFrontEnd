import {IMaterial} from "../models/interfaces/IMaterial";
import MaterialService from "../../api/services/MaterialService";
import {makeAutoObservable} from "mobx";
import alert from "./alert";

class Material {

	items: IMaterial[] = [];

	loading = false;

	constructor() {
		makeAutoObservable(this)
	}

	async getItems() {


		if (this.items.length === 0) {

			this.loading = true;
			const response = await MaterialService.fetchMaterials();

			this.setItems(response)
		}

		this.loading = false;
		return this.items;
	}

	async addItem(value: string) {

		const existing = this.items.find(i =>
			i.name.toLowerCase() === value.toLowerCase());

		if (existing) {
			alert.openAlert("Имя существует", "error");
			return false;
		}

		const response = await MaterialService.addMaterial(value)

		console.log(response.data)
		this.items.push({id: response.data.id, name: response.data.name})

		return true;
	}

	async deleteItem(id) {

		if (this.items.length <= 1) return;

		try {
			const response = await MaterialService.removeMaterial(id);
			const index = this.items.findIndex(i => i.id === id);

			this.items.splice(index, 1);

			alert.openAlert('Материал успешно удален', "success")

		} catch (e) {
			//alert.openAlert(e.message, "error")
		}


	}

	setItems(value: IMaterial[]) {
		this.items = value;
	}
}

export default new Material();