import {IImage} from "./IImage";
import {ILocaleName} from "./ILocaleName";



export interface IProject {

	address: ILocaleName,
	area: number,
	cost: ILocaleName,
	desc: ILocaleName,
	id: number,
	images: IImage[],
	levels: number,
	order: number,
	timePeriod: ILocaleName,
	title: ILocaleName,
	files: File[],
	height: number

}