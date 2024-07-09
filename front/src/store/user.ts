import {makeAutoObservable} from "mobx";


class User {

	constructor() {
		makeAutoObservable(this)
	}

	isAdmin = true;
	adminView = false;
	changeOrderMode = false;

	checkAuth() {

		// is user auth + admin
		//this.isAdmin = true;

	}

	setAdminView(value: boolean) {
		this.adminView = value;
	}


	async login(login: string, password: string) {

		if (login === 'login' && password === 'login') {
			this.isAdmin = true;
			return true;
		}

		return false;
	}

	setChangeOrderMode(value: boolean) {
		this.changeOrderMode = value;
	}


}

export default new User();