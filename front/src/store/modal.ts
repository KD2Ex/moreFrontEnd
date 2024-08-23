import {IPaint} from "../models/interfaces/IPaint";
import {makeAutoObservable} from "mobx";

class Modal {

	projectImage = [];
	projectImageOpen = false;
	projectImageOrder = 0;

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

	setOrder(value: number) {
		console.log(value)

		if (value < 0) return;
		if (value >= this.projectImage.length) return;

		this.projectImageOrder = value;
	}

	openProjectImage(value, src?) {
		this.projectImage = src
		this.projectImageOpen = value;
	}

	openFullscreenImage(list, image) {
		console.log(list)

		this.projectImageOrder = image.order;
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