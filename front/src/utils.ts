

export default class Utils {

    static getLocaleText(localeList, currentLocale) {

        const res = localeList.find(i => i.locale === currentLocale).value
        console.log(res)
        return res;

    }

    static getAppendStringFromLocale(locale: object) {
        let result = '';
        Object.keys(locale).forEach(i => result += `${i}:${locale[i]}:`)
        return result.slice(0, result.length - 1)
    }

}

