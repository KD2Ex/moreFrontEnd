import $api from "../../src/api/http";


export default class BlogService {

    static async create(data, id) {

        return $api.post(`/post/addImage/${id}`, data)

    }

    static async createTexts(data) {
        return $api.post('/post', data)
    }

    static async getPostList() {
        const response = await $api.get('/post')

        return response.data;
    }

    static async getPost(id: number) {
        const response = await $api.get(`/post/${id}`)

        return response.data
    }

}