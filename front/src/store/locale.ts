import {makeAutoObservable} from "mobx";
import LocaleService from "../../api/services/LocaleService";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;

class Locale {

    constructor() {
        makeAutoObservable(this)
    }

    loading = false;
    locales = [];
    systemLocale = Intl.DateTimeFormat().resolvedOptions().locale;
    currentLocale = this.systemLocale;

    setLocale(locale: string) {
        this.currentLocale = locale;
    }

    getSystemLocale() {
        return this.systemLocale;
    }

    async getLocales() {

        if (this.locales.length > 0) return;

        this.loading = true;

        const res = await LocaleService.fetchLocales();

        this.locales = res.map(i => {
           return {id: i.id, name: i.name}
        })


        this.currentLocale = this.locales.find(i => i.name === this.systemLocale);
        this.loading = false;
    }

}

export default new Locale();