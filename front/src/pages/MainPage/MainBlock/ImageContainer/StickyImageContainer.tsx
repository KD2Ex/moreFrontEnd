import React from 'react';
import main4 from "../../../../assets/main.jpg";
import mainPC2 from "../../../../assets/mainPC2.jpg";
import {Box, useMediaQuery, useTheme} from "@mui/material";
import './styles.css'

const StickyImageContainer = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    return (
    /*    <Box
            sx={{
                height: '800px',
                backgroundImage: `url(${main3})`,
                backgroundRepeat: 'no-repeat',
                position: 'sticky',
                top: 32,
                zIndex: -1
            }}
        >


        </Box>*/

    <Box
        component={'img'}
        className={'image'}
        sx={{
            width: {xs: '100%', md: '100%'},
            bgcolor: '#1b1e1f',
            objectFit: {xs: 'cover', md: 'contain'},
            height: '100%',
        }}
        src={isMobile ? main4 : mainPC2}
    >
    </Box>

    );
};

export default StickyImageContainer;