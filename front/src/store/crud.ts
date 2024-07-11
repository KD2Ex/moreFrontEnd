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
            const res = items.find(i =>
                i.name.toLowerCase() === name.text.toLowerCase())
            existing = !!res;
        });

        if (existing) {
            alert.openAlert("Имя существует", "error");
            return false;
        }

        const response = await asyncFunc(names)
        console.log(response.data)
        const localeItem = response.data.find(i => i.localeId === locale.currentLocale.id)
        items.push({id: localeItem.materialId, name: localeItem.text})

        return true;

    }

}

export default new Crud();