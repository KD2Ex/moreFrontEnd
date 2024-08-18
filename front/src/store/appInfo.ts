import {makeAutoObservable} from "mobx";


class AppStore {

    constructor() {
        makeAutoObservable(this)
    }

    isMobile = false;

}

export default new AppStore();