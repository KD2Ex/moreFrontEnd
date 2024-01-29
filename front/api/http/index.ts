import axios, {AxiosResponse} from "axios";
import alert from "../../src/store/alert";


const $api = axios.create({
	withCredentials: true,
	baseURL: import.meta.env.VITE_API_URL
})


$api.interceptors.response.use((response: AxiosResponse) => {


	console.log(response)

	return response;

}, (err) => {

	console.log(err.response)
	alert.openAlert(err.response.data.message, "error")
	return Promise.reject(err.message)
})

export default $api

