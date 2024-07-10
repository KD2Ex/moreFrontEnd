import $api from "../../src/api/http";


export default class LocaleService {
    static async fetchLocales() {

        const response = await $api.get('/locale');

        return response.data;
    }
}