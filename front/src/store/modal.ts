import {IPaint} from "../models/interfaces/IPaint";
import {makeAutoObservable} from "mobx";

class Modal {

	projectImage = [];
	projectImageOpen = false;

	paintingViewOpen = false;
	paintingItem = null;

	isOpen: boolean = false;
	displayItem: IPaint | null;

	isActionDialogVisible = true;

	actionDialogOpen = false;
	actionDialogFunc = (...args) => {};
	actionDialogArgs = [];

	constructor() {
		makeAutoObservable(this)
	}

	openProjectImage(value, src?) {
		this.projectImage = src
		this.projectImageOpen = value;
	}

	openFullscreenImage(list) {
		console.log(list)

		this.projectImageOpen = true;
		this.projectImage = list
	}

	setItemHeight(item, value) {
		item.height = value;
	}

	setWidth(item, value) {
		item.width = value;
	}

	setName(item: object, name: object, id: number) {
		item.name = name
		item.id = id
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

	openActionDialog(func, args: []) {
		this.actionDialogFunc = func;
		this.actionDialogArgs = args;

		this.setActionDialogOpen(true);
	}

	openEditView() {

	}

	openPaintingView(item: IPaint) {

		this.paintingViewOpen = true;
		this.paintingItem = item;

	}

	setPaintingViewOpen(value: boolean) {
		this.paintingViewOpen = value;
	}

}

export default new Modal();