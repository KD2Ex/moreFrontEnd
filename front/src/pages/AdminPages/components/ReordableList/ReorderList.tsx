import React, {useRef, useState} from 'react';
import {Box} from "@mui/material";
import ReorderItem from "../ReorderItem/ReorderItem";


const ReorderList = ({items, setItems}) => {
    const draggingPos = useRef(null);
    const dragOverPos = useRef(null);

    const handleDragStart = (e, position) => {
        draggingPos.current = position;
    };

    const handleDragEnter = (position) => {
        dragOverPos.current = position;
        const newItems = [...items];
        const draggingItem = newItems[draggingPos.current];
        if (!draggingItem) return;

        newItems.splice(draggingPos.current, 1);
        newItems.splice(dragOverPos.current, 0, draggingItem);

        const reorderedItems = newItems.map((item, index) => ({
            ...item,
            order: item.order
        }));

        draggingPos.current = position;
        dragOverPos.current = null;

        setItems(reorderedItems);
    };



    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                mx: 4
            }}
        >
            {items.map((i, index) => (
                <ReorderItem
                    draggable
                    onDragStart={(e) => handleDragStart(e,index)}
                    onDragEnter={() => handleDragEnter(index)}
                    onDragOver={(e) => e.preventDefault()}
                    //onDrop={() => handleDragEnter(index)}
                    key={index}
                    item={i}
                />
            ))}
        </Box>
    );
};

export default ReorderList;