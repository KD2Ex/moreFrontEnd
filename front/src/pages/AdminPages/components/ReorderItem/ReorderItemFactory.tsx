import React from 'react';
import ReorderItem from "./PaintingReorderItem/ReorderItem";

const ReorderItemFactory = ({item, ...props}) => {

    return <ReorderItem
        item={item}
        {...props}
    />
};

export default ReorderItemFactory;