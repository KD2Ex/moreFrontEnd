import React from 'react';
import {Grid, Typography} from "@mui/material";

const PostParagraph = ({text}) => {

    return (
        <Grid
            item
            xs={12}
        >
            <Typography
                sx={{
                    textAlign: 'justify'
                }}
            >
                {text}
            </Typography>
        </Grid>
    );
};

export default PostParagraph;