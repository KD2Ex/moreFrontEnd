import {makeAutoObservable} from "mobx";


class User {

	constructor() {
		makeAutoObservable(this)
	}

	isAdmin = false;

	checkAuth() {

		// is user auth + admin

		this.isAdmin = true;

	}



}

export default new User();