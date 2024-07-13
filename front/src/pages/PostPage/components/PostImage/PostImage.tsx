import React from 'react';
import {Box, Grid} from "@mui/material";

const PostImage = ({gridSize, src}) => {
    return (
        <Grid
            item
            xs={12}
            md={gridSize}
        >
            <Box
                component={'img'}
                src={src}
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