import {makeAutoObservable} from "mobx";
import LocaleService from "../../api/services/LocaleService";
import {Simulate} from "react-dom/test-utils";
import localeText from "../components/Locale/LocaleText/LocaleText";

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
        const id = +this.locales.find(i => i.name === locale).id;

        this.currentLocale = {id: id, name: locale};

        localStorage.setItem("locale", this.currentLocale.name)
        localStorage.setItem("localeId", this.currentLocale.id.toString())

        window.location.reload();
    }

    getSystemLocale() {
        return this.systemLocale;
    }

    async getLocales() {
        if (this.locales.length > 0) return;
        if (this.loading) return;

        this.loading = true;

        this.currentLocale = this.locales.find(i => i.name === this.systemLocale);
        this.loading = false;

        localStorage.setItem("locale", this.currentLocale.name)
        localStorage.setItem("localeId", this.currentLocale.id.toString())

        return true;
    }

    async checkLocale() {
        const res = await LocaleService.fetchLocales();

        this.locales = res.map(i => {
            return {id: i.id, name: i.name}
        })

        const locale = localStorage.getItem("locale")
        const id = localStorage.getItem("localeId")

        if (locale) {
            this.currentLocale = {id: +id, name: locale}
        } else {
            await this.getLocales()
        }

        console.log(this.currentLocale.name)
    }

}

export default new Locale();