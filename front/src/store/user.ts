import {makeAutoObservable} from "mobx";


class User {

	constructor() {
		makeAutoObservable(this)
	}

	isAdmin = false;
	adminView = false;
	changeOrderMode = false;

	checkAuth() {

		this.isAdmin = localStorage.getItem("admin") == "1";

		// is user auth + admin
		//this.isAdmin = true;

	}

	setAdminView(value: boolean) {
		this.adminView = value;
	}


	async login(login: string, password: string) {

		if (login === 'login' && password === 'login') {
			this.isAdmin = true;

			localStorage.setItem("admin", '1')
			return true;
		}

		return false;
	}

	setChangeOrderMode(value: boolean) {
		this.changeOrderMode = value;
	}


}

export default new User();