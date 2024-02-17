import $api from "../http";


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

	static async create(data) {

		for(let item of data) {
			console.log(item);
		}

		return $api.post('/project', data)

	}

	static async delete(id: number) {
		return $api.delete(`/project/${id}`)
	}

}