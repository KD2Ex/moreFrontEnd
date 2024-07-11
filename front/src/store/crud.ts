import alert from "./alert";
import locale from "./locale";

interface LocaleName {
    localeId: number,
    text: string,
}

class Crud {

    async addItem(names: LocaleName[], asyncFunc: any, items: any[]) {

        let existing = false;

        names.forEach(name => {
            const res = items.find((i) => {
                const localeName = locale.locales.find(i => i.id === name.localeId).name
                return i.name[localeName].toLowerCase() === name.text.toLowerCase()
            })
            existing = !!res;
        });

        if (existing) {
            alert.openAlert("Имя существует", "error");
            return false;
        }

        const response = await asyncFunc(names)
        console.log(response.data)

        const itemName = {}



        response.data.forEach(i => {
            const localeName = locale.locales.find(l => l.id === i.localeId).name
            itemName[localeName] = i.text
        })
        items.push({id: response.data[0].materialId, name: itemName})

        return true;

    }

}

export default new Crud();