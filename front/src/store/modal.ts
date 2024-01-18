import {IPaint} from "../models/interfaces/IPaint";
import {makeAutoObservable} from "mobx";


class Modal {

	paintingViewOpen = false;
	paintingItem = null;
	editMode = false;

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

	openEditView() {

	}

	openPaintingView(item: IPaint, editMode: boolean = false) {

		this.paintingViewOpen = true;
		this.paintingItem = item;
		this.editMode = editMode;

	}

	setPaintingViewOpen(value: boolean) {
		this.paintingViewOpen = value;
	}

}

export default new Modal();