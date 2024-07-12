import {IMaterial} from "../models/interfaces/IMaterial";
import MaterialService from "../../api/services/MaterialService";
import {makeAutoObservable} from "mobx";
import alert from "./alert";
import locale from "./locale";

class Material {

	items: IMaterial[] = [];

	loading = false;

	constructor() {
		makeAutoObservable(this)
	}



	async getItems() {

		if (this.items.length === 0) {

			this.loading = true;
			this.items = await MaterialService.fetchMaterials(locale.currentLocale.id);
		}

		this.loading = false;
		return this.items;
	}

	async addItem(value: object[]) {

		let existing = false;

		value.forEach(name => {
				const res = this.items.find(i =>
						i.name.toLowerCase() === name.text.toLowerCase())
				existing = !!res;
			});

		/*const req = value.map((i, index) => {
			return {text: i, localeId: index + 1}
		})*/

		if (existing) {
			alert.openAlert("Имя существует", "error");
			return false;
		}

		const response = await MaterialService.add(value)
		console.log(response.data)
		//const localeItem = response.data.find(i => i.localeId === locale.currentLocale.id)
		this.items.push({id: localeItem.materialId, name: localeItem.text})

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