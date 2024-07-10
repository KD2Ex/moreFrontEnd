import {makeAutoObservable} from "mobx";
import LocaleService from "../../api/services/LocaleService";
import {Simulate} from "react-dom/test-utils";

class Locale {

    constructor() {
        makeAutoObservable(this)
    }

    loading = false;
    locales = [];
    systemLocale = Intl.DateTimeFormat().resolvedOptions().locale;

    currentLocale = {
        id: 0,
        name: this.systemLocale
    }

    setLocale(locale: string) {
        this.currentLocale = {id: 0, name: locale};
    }

    getSystemLocale() {
        return this.systemLocale;
    }

    async getLocales() {
        if (this.locales.length > 0) return;
        if (this.loading) return;

        this.loading = true;

        const res = await LocaleService.fetchLocales();

        this.locales = res.map(i => {
           return {id: i.id, name: i.name}
        })

        this.currentLocale = this.locales.find(i => i.name === this.systemLocale);
        this.loading = false;

        return true;
    }

}

export default new Locale();