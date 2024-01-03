import {IPaint} from "../models/interfaces/IPaint";
import {makeAutoObservable} from "mobx";


class Modal {

	isOpen: boolean = false;
	displayItem: IPaint | null;

	constructor() {
		makeAutoObservable(this)
	}

	setIsOpen = (value: boolean, item?: IPaint) => {

		this.isOpen = value;

		this.displayItem = item ? item : null

		console.log(this.isOpen)


	}



}

export default new Modal();