import React, {useEffect, useState} from 'react';
import {Box, Button, Fade, IconButton, useTheme} from "@mui/material";
import LocaleText from "../Locale/LocaleText/LocaleText";
import './styles.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const BackToTop = () => {

    const [style, setStyle] = useState('hidden')
    const [visible, setVisible] = useState(false)

    const theme = useTheme();


    const onScroll = () => {
        setVisible(window.scrollY >= 400);
    }

    useEffect(() => {

        console.log(window.scrollY)
        window.addEventListener("scroll", onScroll)

    }, [])


    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 16,
                right: 16,
                zIndex: 1000,
            }}
        >
            <Fade
                in={visible}
            >
                <IconButton
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                    size={'large'}
                    variant={'contained'}
                    sx={{
                    }}
                >
                    <KeyboardArrowUpIcon fontSize={'large'}/>
                </IconButton>
            </Fade>


        </Box>
    );
};

export default BackToTop;