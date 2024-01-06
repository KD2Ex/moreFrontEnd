import {IPaint} from "../models/interfaces/IPaint";
import art1 from "../assets/art1.jpg";
import {sizes} from "../consts";
import {makeAutoObservable} from "mobx";
import {ISizeEdit} from "../models/interfaces/ISizeEdit";
import PaintingService from "../../api/services/PaintingService";


class Paint {

	constructor() {
		makeAutoObservable(this)
	}

	items: IPaint[] = [];
	newItem: IPaint = {};

	editedPaintingsSizes: ISizeEdit[] = [];

	async addPainting() {


		const newItem = this.newItem;

		const images = newItem.images.map(i => {
			return i.file
		})
		const formData = new FormData();
		formData.append("title", newItem.title);
		formData.append("desc", newItem.desc);
		formData.append("objectFit", "cover");
		formData.append("height", `${newItem.height}`);
		formData.append("width", `${newItem.width}`);
		formData.append("price", `${newItem.price}`);
		formData.append("relativeSize", `4`);

		for (let i = 0; i < images.length; i++) {
			formData.append('images', images[i]);
		}
		const response = await PaintingService.addPainting(formData)

		this.items.push(response.data)
		console.log(response.data)
		this.newItem = {};
		return response;
	}

	setNewItem(value: IPaint) {

		this.newItem = value;
	}

	addEdited(paint: IPaint) {

		const item: ISizeEdit = {
			id: paint.id,
			objectFit: paint.objectFit,
			relativeSize: paint.relativeSize
		};

		const editedPainting = this.editedPaintingsSizes.find(i => i.id === item.id)

		if (editedPainting) {
			editedPainting.objectFit = item.objectFit;
			editedPainting.relativeSize = item.relativeSize;
			console.log('arrEdited:')
			console.log(this.editedPaintingsSizes)
			return;
		}

		this.editedPaintingsSizes.push(item)
		console.log('arr:')
		console.log(this.editedPaintingsSizes)

	}

	async saveSizes() {

		const response = await PaintingService.editSizes(this.editedPaintingsSizes);
		console.log(response)
		//this.editedPaintingsSizes = [];

	}

	isValidPaint(item: IPaint) {

		console.log(Object.entries(item));

		let isValid = false;

		Object.entries(item).forEach(i => {

			if (i[0] == 'images') {
				isValid = i[1].length !== 0;
				return;
			}

			isValid = !!i[1];

		})

		console.log(isValid)

		return isValid;

	}


	async deletePainting(id: number) {

		try {
			const response = await PaintingService.deletePainting(id);

			console.log(response.data)
			this.items.splice(this.items.findIndex(value => id === value.id), 1)

		} catch (e) {

		}

	}

	async deleteImage(name: string) {


		try {
			const response = await PaintingService.deleteImage(name);

			const paint = this.items.find((item) => {
				return item.images.includes(name);
			})
			console.log(paint)
			paint.images = paint.images.filter((item) => item != name);

			return response;
		} catch (e) {
			return e.message;
		}
	}
}

export default new Paint();