import React from 'react';
import {Box, Grid} from "@mui/material";

const PostImage = ({block}) => {
    return (
        <Grid
            item
            xs={12}
            md={block.size}
        >
            <Box
                component={'img'}
                src={block.value}
                sx={{
                    width: '100%',
                    height: '100%',
                }}
            >

            </Box>
        </Grid>
    );
};

export default PostImage;