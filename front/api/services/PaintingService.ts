import $api from "../http";


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

	static async deletePainting(id) {
		console.log(id)

		return $api.delete(`/paint/${id}`)
	}
}

