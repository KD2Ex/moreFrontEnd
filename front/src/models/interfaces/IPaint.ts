import {Fit} from "../types/Fit";
import {IMaterial} from "./IMaterial";
import {ITechnique} from "./ITechnique";
import {IImage} from "./IImage";


export interface IPaint {
	id: number,
	title: object,
	desc: object,
	images: IImage[],
	files: File[],
	price: object,
	relativeSize: number,
	objectFit: Fit,
	previewIndex: number,
	width: number,
	height: number,
	material: IMaterial,
	technique: ITechnique,
	isFiltered: boolean,
	order: number
}