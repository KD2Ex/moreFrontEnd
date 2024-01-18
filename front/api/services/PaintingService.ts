import $api from "../http";
import loginPage from "../../src/pages/LoginPage/LoginPage";


export default class PaintingService {

	static async fetchPaintings() {

		try {
			const response = await $api.get('/paint');
			return response.data;

		} catch (e) {

		}
/*
		if (response.data) {
			response.data.forEach(i => {
				i.image.forEach(j => {
					j.name = 'http://localhost:7000/' + j.name
				})
			})
		}*/

	}

	static async addPainting(data) {

		return $api.post('/paint', data, {
			/*headers: {
				'Content-Type': 'multipart/form-data'
			},*/
		})

	}

	static async editSizes(data) {

		console.log(data)

		return $api.post('/paint/update', data)

	}

	static async deletePainting(id: number) {
		console.log(id)

		return $api.delete(`/paint/${id}`)
	}

	static async deleteImage(name: string) {

		return $api.delete(`/image`, {
			data: {
				name: name
			}
		})

	}

	static async updatePainting(data) {

		for (const pair of data.entries()) {
			console.log(pair[0], pair[1])
		}

		const id = data.get('id');

		return $api.post(`/paint/update/${id}`, data)

	}

}

