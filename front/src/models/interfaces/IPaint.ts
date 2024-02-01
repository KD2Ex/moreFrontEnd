import {Fit} from "../types/Fit";
import {IMaterial} from "./IMaterial";
import {ITechnique} from "./ITechnique";


export interface IPaint {
	id: number,
	title: string,
	desc: string,
	images: string[],
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
}