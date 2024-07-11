import $api from "../../src/api/http";

export default class MaterialService {

	static async fetchMaterials(id: number) {

		const response = await $api.get('/material', {
			params: {
				localeId: id
			}
		});

		return response.data;

	}

	static async addMaterial(names: object[]) {

		console.log(names)

		return $api.post('/material', {
			names
		})

	}

	static async removeMaterial(id) {

		return $api.delete(`/material/${id}`)

	}

}

