import {IImage} from "./IImage";


export interface IProject {

	address: string,
	area: number,
	cost: number,
	desc: string,
	id: number,
	images: IImage[],
	levels: number,
	order: number,
	timePeriod: string,
	title: string,
	files: File[],
	height: number

}