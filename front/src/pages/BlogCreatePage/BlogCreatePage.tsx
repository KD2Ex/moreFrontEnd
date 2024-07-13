import React from 'react';
import {Grid, TextField} from "@mui/material";

const BlogCreatePage = () => {



    return (
        <>
            <Grid
                container
            >
                <Grid item xs={2}/>
                <Grid item xs={8}>

                    <TextField
                        sx={{
                            'input': {
                                textAlign: 'center'

                            }
                        }}
                    />

                </Grid>
                <Grid item xs={2}/>
            </Grid>
        </>
    );
};

export default BlogCreatePage;