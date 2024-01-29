import $api from "../http";


export default class TechniqueService {

	static async fetchTechniques() {

		const response = await $api.get('/technique');

		return response.data;

	}

	static async addTechnique(name) {

		return $api.post('/technique', {
			name
		});

	}

	static async removeTechnique(id) {

		return $api.delete(`/technique/${id}`);

	}

}