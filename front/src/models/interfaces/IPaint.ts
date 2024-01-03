import {Fit} from "../types/Fit";
import {IImage} from "./IImage";


export interface IPaint {
	id: number,
	title: string,
	desc: string,
	images: string[],
	price: number,
	relativeSize: number,
	objectFit: Fit,
	previewIndex: number,
	width: number,
	height: number
}