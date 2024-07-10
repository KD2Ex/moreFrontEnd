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

	static async addMaterial(name: string) {

		console.log(name)

		return $api.post('/material', {
			name
		})

	}

	static async removeMaterial(id) {

		return $api.delete(`/material/${id}`)

	}

}

