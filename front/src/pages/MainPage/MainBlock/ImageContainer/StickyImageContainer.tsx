import React, {useEffect, useState} from 'react';
import main4 from "../../../../assets/main4.jpg";
import {Box, Typography} from "@mui/material";

const ImageContainer = () => {

    const [lastScroll, setLastScroll] = useState(0)

    useEffect(() => {

    }, [])

    const handleScroll = (e) => {
        const {scrollTop, scrollHeight, clientHeight} = e.target;

        const pos = scrollTop / (scrollHeight - clientHeight)
        e.target.scrollIntoView({behavior: "smooth"})


        console.log(pos)
    }

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
            height: '100vh',
            bgcolor: '#1b1e1f',
            objectFit: 'cover',
            opacity: .4,
            position: 'sticky',
            top: 0,
        }}
        src={main4}
    >
    </Box>

    );
};

export default ImageContainer;