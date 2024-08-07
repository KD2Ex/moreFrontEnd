import React, {useEffect, useState} from 'react';
import {Box, Grid} from "@mui/material";
import {toJS} from "mobx";

const PostNewImage = ({block}) => {

    const [newImage, setNewImage] = useState({})

    useEffect(() => {

        console.log(toJS(block.value))

        const img = new Image();
        const src = URL.createObjectURL(block.value.file);

        img.src = src;

        setNewImage(img)
        console.log(src)

    }, [])

    return (
        <Grid
            item
            md={block.size}
            sx={{
                //maxHeight: 500
            }}
        >
            <Box
                component={'img'}
                src={newImage.src}
                sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}
            >

            </Box>
        </Grid>
    );
};

export default PostNewImage;