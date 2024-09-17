import axios, {AxiosResponse} from "axios";
import alert from "../../store/alert.ts";
import appInfo from "../../store/appInfo";

const db =  localStorage.getItem("db")

const $api = axios.create({
	withCredentials: true,
	baseURL: appInfo.url + 'api'
})


$api.interceptors.response.use((response: AxiosResponse) => {


	console.log(response)


	return response;

}, (err) => {

	console.log(err)

	let message = '';

	if (err.code === "ERR_NETWORK") message = "Ошибка сети, попробуйте перезагрузить страницу или зайти позже"
	else message = err.response.data.message;


	alert.openAlert(message, "error")
	return Promise.reject(err.message)
})

export default $api

