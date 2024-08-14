import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import main1 from '../../../assets/main1.jpg'
import main2 from '../../../assets/main2.jpg'
import TitleText from "../TitleText/TitleText";


const MainTitle = () => {
    return (
        <>
            <Grid
                item
                md={12}
                xs={12}
                sx={{
                }}
            >
                {/*<Box
                    component={'img'}
                    sx={{
                        width: {xs: '100%', md: '100%'},
                        height: 'auto',
                        bgcolor: '#1b1e1f',
                        objectFit: 'contain',
                        opacity: .5
                    }}
                    src={main2}
                >
                </Box>*/}
                <Box
                    sx={{
                        position: 'relative',
                    }}
                >
                    <Box
                        component={'img'}
                        sx={{
                            width: {xs: '100%', md: '100%'},
                            height: 'auto',
                            bgcolor: '#1b1e1f',
                            objectFit: 'contain',
                            opacity: .5
                        }}
                        src={main2}
                    >
                    </Box>

                    <Box
                        sx={{
                            position:  'absolute',
                            top: {xs: 0, md: 0},
                            left: 0,
                            p: {xs: 2, md: 8}
                        }}
                    >

                        <TitleText/>

                    </Box>
                </Box>

            </Grid>


           {/* <Grid
                item
                lg={4}
                xs={12}
            >

                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1
                    }}
                >

                    <TitleText/>
                </Box>

                <Box
                    sx={{
                        height: '40px',
                        my: 2,
                        bgcolor: '#e76565'
                    }}
                >

                </Box>
            </Grid>*/}

        </>
    );
};

export default MainTitle;