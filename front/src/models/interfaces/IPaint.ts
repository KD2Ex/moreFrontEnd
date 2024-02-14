import {Fit} from "../types/Fit";
import {IMaterial} from "./IMaterial";
import {ITechnique} from "./ITechnique";
import {IImage} from "./IImage";


export interface IPaint {
	id: number,
	title: string,
	desc: string,
	images: IImage[],
	files: File[],
	price: number,
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