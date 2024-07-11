import $api from "../../src/api/http";

export default class TechniqueService {

	static async fetchTechniques(id: number) {

		const response = await $api.get('/technique', {
			params: {
				localeId: id
			}
		});

		return response.data;

	}

	static async add(names: object[]) {

		return $api.post('/technique', {
			names
		});

	}

	static async removeTechnique(id) {

		return $api.delete(`/technique/${id}`);

	}

}