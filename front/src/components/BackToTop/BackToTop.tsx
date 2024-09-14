import React, {useEffect, useState} from 'react';
import {Box, Button, IconButton, useTheme} from "@mui/material";
import LocaleText from "../Locale/LocaleText/LocaleText";
import './styles.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const BackToTop = () => {

    const [style, setStyle] = useState('hidden')
    const theme = useTheme();


    const onScroll = () => {
        setStyle(window.scrollY < 400 ? 'hidden' : 'visible');
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
                zIndex: 3000,
            }}
        >
            <IconButton
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                size={'large'}
                variant={'contained'}
                sx={{
                    transition: theme.transitions.create(['opacity'], {
                        duration: 500
                    })
                }}
                className={'anim ' + style}
            >
                <KeyboardArrowUpIcon fontSize={'large'}/>
            </IconButton>

        </Box>
    );
};

export default BackToTop;