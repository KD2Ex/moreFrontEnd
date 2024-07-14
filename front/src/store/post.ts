import {makeAutoObservable} from "mobx";


class Post {

    constructor() {
        makeAutoObservable(this)
    }

    items = [
        {
            id: 1,
            name: "Пост 1",
            images: [
                {id: 1, src: 'https://images.squarespace-cdn.com/content/v1/52efdac1e4b07964224912f6/1195b9e2-1e5f-4e7b-8ef4-d7aa35299445/4P2A3157.jpg?format=1000w'}
            ]
        },
    ]

    newItem = {
        id: 0,
        title: '',
        paragraphs: [
            {order: 0, value: 'asdf'}
        ],
        images: [
            {order: 1, size: 12, file: {}}
        ],
        links: []
    }

    getOrder(item) {
        return item.paragraphs.length + item.images.length;
    }

    addParagraph(value: string) {

        const order = this.getOrder(this.newItem);

        this.newItem.paragraphs.push({
            order: order,
            value: value
        })
    }

    addImages(images: File[]) {
        const order = this.getOrder(this.newItem);

        for (let i = 0; i < images.length; i++) {
            this.newItem.images.push({
                order: order + i,
                size: 12 / images.length,
                file: images[i]
            })
        }

    }

    resetItem(item) {
        item = {
            title: '',
        }
        return item
    }

    updateItem(item, property, value) {
        item[property] = value;
    }

    async getItem(id: number) {
        return this.items.find(i => i.id === +id);
    }
}

export default new Post();