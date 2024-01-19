import $api from "../http";


export default class TechniqueService {

	static async fetchTechniques() {

		const response = await $api.get('/technique');

		return response.data;

	}

	static async addTechnique(data) {

	}

	static async removeTechnique(id) {

	}

}