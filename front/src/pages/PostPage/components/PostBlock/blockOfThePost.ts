import PostParagraph from "../PostParagraph/PostParagraph";


export const getBlock = (type: string) => {

    switch (type) {
        case "text":
            return PostParagraph;
        default:
            return 123;
    }

}