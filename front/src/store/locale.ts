import {makeAutoObservable, toJS} from "mobx";
import LocaleService from "../../api/services/LocaleService";
import {Simulate} from "react-dom/test-utils";
import localeText from "../components/Locale/LocaleText/LocaleText";

class Locale {

    constructor() {
        makeAutoObservable(this)
    }

    defaultIds = {
        ru: 1,
        'en-US': 2
    }

    loading = false;
    isLocaleLoaded = false;
    locales = [];
    systemLocale = Intl.DateTimeFormat().resolvedOptions().locale;

    currentLocale = {
        id: this.defaultIds[this.systemLocale],
        name: this.systemLocale
    }

    setLocale(locale: string, withReload: boolean) {
        console.log(locale)
        console.log(this.locales)

        const id = this.locales.find(i => i.name === locale).id;

        this.currentLocale = {id: id, name: locale};

        localStorage.setItem("locale", this.currentLocale.name)
        localStorage.setItem("localeId", this.currentLocale.id.toString())

        if (!withReload) return;
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

        const locale = localStorage.getItem("locale")
        const id = localStorage.getItem("localeId")

        if (locale) {
            this.currentLocale = {id: +id, name: locale}
        } else {
            const systemLocale = this.locales.find(i => i.name === this.systemLocale);

            console.log(systemLocale)

            if (systemLocale) {
                this.setLocale(systemLocale.name, false)
            } else {
                this.setLocale("en-US", false)
            }

        }
        this.isLocaleLoaded = true;
        console.log(this.currentLocale.name)
    }

    async fetchLocaleList() {

        if (this.locales.length != 0) return;

        const res = await LocaleService.fetchLocales();

        this.locales = res.map(i => {
            return {id: i.id, name: i.name}
        })

        console.log(toJS(this.locales))

    }

}

export default new Locale();