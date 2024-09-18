import {makeAutoObservable, toJS} from "mobx";
import BlogService from "../../api/services/BlogService";
import locale from "./locale";


class Post {

    constructor() {
        makeAutoObservable(this)
    }

    items = [
        {
            id: 1,
            title: "Пост 1",
            blocks: [
                {id: 1, order: 1, size: 12, value: 'fdas', type: 'text'},
                {id: 2, order: 0, size: 12, value: 'xzcvb', type: 'text'},
            ],
        },
        {
            id: 2,
            title: "Пост 2",
            blocks: [
                {id: 1, order: 0, size: 12, value: 'fdas', type: 'text'},
                {id: 2, order: 1, size: 12, value: 'xzcvb', type: 'text'},
            ],
        },
    ]

    newItem = this.defaultItem()


    defaultItem() {

        return {
            id: 0,
            title: {
                'ru': '',
                'en-US': ''
            },
            blocks: [],
            links: []
        }
    }

    getOrder(item) {
        return item.blocks.length;
    }

    addParagraph(value: string) {

        const order = this.getOrder(this.newItem);

        this.newItem.blocks.push({
            order: order,
            value: value,
            size: 12,
            type: 'text'
        })

        console.log(toJS(this.newItem.blocks))
    }

    addImages(images: File[]) {
        console.log(images)
        const order = this.getOrder(this.newItem);

        for (let i = 0; i < images.length; i++) {
            this.newItem.blocks.push({
                order: order + i,
                size: 12 / images.length,
                value: images[i],
                type: 'newImage'
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

    updateTitle(value) {
        this.newItem.title[locale.currentLocale.name] = value;
    }

    async getItem(id: number) {

        const response = await BlogService.getPost(id);

        const post = {
            id: id,
            blocks: response.blocks,
            title: response.title
        }

        for (const p of post.blocks) {

            if (p.type !== "text") continue;
            const res = {}

            for (const lP of p.value) {
                const l = locale.locales.find(i => i.id === lP.localeId)
                console.log(toJS(l))

                res[l.name] = lP.text;

                console.log(res)
            }

            p.value = {...res}
        }

        return post;
    }

    async getPostList() {
        const list = await BlogService.getPostList();
        this.items = list.posts
        return list.posts;
    }

    async createItem(item) {
        console.log(toJS(item))

        const texts = item.blocks.filter(i => i.type === "text");


        const itemWithTexts = { ...item, blocks: texts }

        console.log(toJS(texts))
        console.log(toJS(itemWithTexts))

        //const response = await BlogService.createTexts(itemWithTexts);

        //const postId = response.data.id;

        const formData = new FormData()
        const images = item.blocks.filter(i => i.type === "newImage")

        console.log(images)

        for (let i = 0; i < images.length; i++) {

            const img = images[i];

            const obj = {
                order: img.order,
                size: img.size,
            }
            formData.append("img" + i, JSON.stringify(obj))
            formData.append("img" + i, img.value.file)
        }

        for(let item of formData.entries()) {
            console.log(item)
        }

        await BlogService.create(formData, 16);
    }

    addItem(item) {

        this.items.push({...item});

    }
}

export default new Post();