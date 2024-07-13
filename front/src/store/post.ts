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

    async getItem(id: number) {
        return this.items.find(i => i.id === +id);
    }
}

export default new Post();