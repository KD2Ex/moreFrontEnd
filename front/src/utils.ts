

export default class Utils {

    static getLocaleText(localeList, currentLocale) {

        const res = localeList.find(i => i.locale === currentLocale).value
        console.log(res)
        return res;

    }

}

