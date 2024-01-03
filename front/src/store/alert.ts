import {IPaint} from "../models/interfaces/IPaint";
import {makeAutoObservable} from "mobx";


class Alert {

	constructor() {
		makeAutoObservable(this)
	}

	isOpen = false;
	severity = 'success';
	message = '';

	openAlert(message: string, severity: string) {

		this.message = message;
		this.severity = severity;
		this.isOpen = true;

	}

	onClose() {
		this.isOpen = false;
	}

}

export default new Alert();