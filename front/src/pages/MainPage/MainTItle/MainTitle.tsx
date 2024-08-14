import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import main1 from '../../../assets/main1.jpg'
import main2 from '../../../assets/main2.jpg'
import main3 from '../../../assets/main3.png'
import TitleText from "../TitleText/TitleText";


const MainTitle = () => {
    return (
        <Box
            sx={{
                position: 'sticky',
                top: 32
            }}
        >
            <Box
                component={'img'}
                sx={{
                    width: {xs: '100%', md: '100%'},
                    height: 'auto',
                    bgcolor: '#1b1e1f',
                    objectFit: 'contain',
                    opacity: .2
                }}
                src={main3}
            >
            </Box>

            <Box
                sx={{
                    position:  'absolute',
                    top: {xs: 0, md: 0},
                    left: 0,
                    p: {xs: 2, md: 8},
                    height: '100%',
                    width: '100%'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        width: '100%'
                    }}
                >
                    <TitleText/>

                </Box>

            </Box>
        </Box>

    );
};

export default MainTitle;