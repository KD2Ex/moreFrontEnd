import {makeAutoObservable} from "mobx";

class AppStore {

    constructor() {
        makeAutoObservable(this)
    }

    isMobile = false;
    productionURL = 'https://art-space-mo.com:8443/';
    testURL = 'https://art-space-mo.com:7443/';
    localURL = 'http://localhost:7000/';
    //testURL = 'http://localhost:7000/';
    url = this.productionURL; //localStorage.getItem("testMode") ? this.testURL : this.productionURL;

    activateTestMode() {
        this.url = this.testURL;
        localStorage.setItem("testMode", '1')
    }

    activateProduction() {
        this.url = this.productionURL;
        localStorage.removeItem("testMode");
    }

}

export default new AppStore();