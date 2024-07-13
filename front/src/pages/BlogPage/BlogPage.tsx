import React from 'react';
import {Box, Button, Grid} from "@mui/material";
import LocaleText from "../../components/Locale/LocaleText/LocaleText";
import {Link, useNavigate} from "react-router-dom";
import AdminComponent from "../../components/AdminComponent/AdminComponent";



const BlogPage = () => {

    const navigate = useNavigate();

    return (
        <Grid
            container
            sx={{
                display: 'flex',
                margin: 'auto'
            }}
        >
            {/*sx={{display: {xs: 'none', sm: 'block'}}}*/}
            <Grid item sm={2.5} >
                <AdminComponent>
                    <Button
                        variant={'outlined'}
                        onClick={(e) => {
                            navigate('./create')
                        }}
                        sx={{
                            ml: 4
                        }}
                    >
                        Создать пост
                    </Button>
                </AdminComponent>
            </Grid>
            <Grid
                item
                xs={7}
                container
                spacing={2}
            >
                {[1, 1, 1, 1, 1].map((i, index) => (
                    <Grid
                        item
                        key={index}
                        xs={12}
                        md={6}
                        lg={4}
                        onClick={(e) => {
                            navigate(`./${i}`)
                        }}
                        sx={{
                            cursor: 'pointer'
                        }}
                    >

                        <Box
                        >
                            <Box
                                sx={{
                                    height: '300px',
                                }}
                            >
                                <Box
                                    component={'img'}
                                    src="https://images.squarespace-cdn.com/content/v1/52efdac1e4b07964224912f6/1700515056360-D5Z53CVB4WRJ3EUOE04M/4P2A3157.jpg?format=500w"
                                    alt=""
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </Box>


                            <LocaleText
                                useDefault
                                localeList={[
                                    'Заголовок',
                                    'Title'
                                ]}
                                sx={{
                                    textAlign: 'center'
                                }}
                            />

                        </Box>
                    </Grid>
                ))}


            </Grid>
            <Grid item sm={2.5} />


        </Grid>
    );
};

export default BlogPage;