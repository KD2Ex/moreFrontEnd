import {makeAutoObservable} from "mobx";


class EditPaint {

    constructor() {
        makeAutoObservable(this)
    }

    item = null;
}

export default new EditPaint()