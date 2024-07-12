import {IPaint} from "../models/interfaces/IPaint";
import {makeAutoObservable} from "mobx";

class Modal {

	projectImage = '';
	projectImageOpen = false;

	paintingViewOpen = false;
	paintingItem = null;
	editMode = false;

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