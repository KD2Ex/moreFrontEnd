import React from 'react';
import PostParagraph from "../PostParagraph/PostParagraph";
import PostImage from "../PostImage/PostImage";
import PostNewImage from "../PostNewImage/PostNewImage";

const PostBlock = ({item}) => {


    const getElement = () => {

        console.log(item)

        switch (item.type) {
            case "text":
                return (<PostParagraph block={item}/>)
            case "img":
                return (<PostImage block={item}/>)
            case "newImage":
                return (<PostNewImage block={item}/>)
            default:
                console.log(item.type)
                return (<div></div>)
        }
    }

    return (
        <>
            {getElement()}
        </>
    );

};

export default PostBlock;