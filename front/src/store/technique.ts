import {ITechnique} from "../models/interfaces/ITechnique";
import TechniqueService from "../../api/services/TechniqueService";


class Technique {

	items: ITechnique[] = []

	async getItems() {

		if (this.items.length === 0) {
			this.items = await TechniqueService.fetchTechniques();
		}

		return this.items;

	}

}

export default new Technique()