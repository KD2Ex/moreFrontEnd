import $api from "../../src/api/http";


export default class ProjectService {

	static async getProjects(page, limit) {

		const response = await $api.get('/project', {
			params: {
				page,
				limit
			}
		})

		return response.data;

	}

	static async createLocaleData(data) {
		return $api.post('/project/localeData', data)
	}

	static async create(data) {

		for(let item of data) {
			console.log(item);
		}

		return $api.post('/project', data)

	}

	static async delete(id: number) {
		return $api.delete(`/project/${id}`)
	}

	static async updateLocaleData(data) {
		return $api.post('/project/update/localeData', data)
	}

	static async update(data) {

		for(let item of data) {
			console.log(item);
		}

		const id = data.get('id');

		return $api.post(`/project/update/${id}`, data)
	}

	static async updateOrder(items) {
		return $api.post(`/project/updateOrder`, items)
	}

	static async updateHeight(items) {
		return $api.post(`/project/updateHeight`, items)
	}

	static async deleteImage(name: string) {
		return $api.delete(`/projectImage`, {
			data: {
				name
			}
		})
	}

}