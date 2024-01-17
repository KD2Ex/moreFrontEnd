import {IPaint} from "../models/interfaces/IPaint";
import {makeAutoObservable} from "mobx";


class Modal {

	isOpen: boolean = false;
	displayItem: IPaint | null;

	isActionDialogVisible = true;

	actionDialogOpen = false;

	constructor() {
		makeAutoObservable(this)
	}

	setIsOpen = (value: boolean, item?: IPaint) => {

		this.isOpen = value;

		this.displayItem = item ? item : null

		console.log(this.isOpen)

	}

	setActionDialogVisibility(value: boolean) {
		this.isActionDialogVisible = value;
	}

	setActionDialogOpen(value: boolean) {
		this.actionDialogOpen = value;


	}

}

export default new Modal();