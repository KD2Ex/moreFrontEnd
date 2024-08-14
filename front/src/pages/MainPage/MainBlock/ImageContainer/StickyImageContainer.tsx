import React, {useEffect, useState} from 'react';
import main4 from "../../../../assets/main4.jpg";
import mainPC from "../../../../assets/mainPC.jpg";
import mainPC2 from "../../../../assets/mainPC2.jpg";
import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";

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
        sx={{
            width: {xs: '100%', md: '100%'},
            bgcolor: '#1b1e1f',
            objectFit: 'contain',
            opacity: .4,
            height: '100%',
        }}
        src={isMobile ? main4 : mainPC2}
    >
    </Box>

    );
};

export default StickyImageContainer;