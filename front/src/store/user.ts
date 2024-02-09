import {makeAutoObservable} from "mobx";


class User {

	constructor() {
		makeAutoObservable(this)
	}

	isAdmin = false;
	adminView = false;
	changeOrderMode = false;

	checkAuth() {

		// is user auth + admin
		this.isAdmin = true;

	}

	setAdminView(value: boolean) {
		this.adminView = value;
	}


	async login(login: string, password: string) {

	}

	setChangeOrderMode(value: boolean) {
		this.changeOrderMode = value;
	}


}

export default new User();