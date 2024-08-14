import React, {useEffect, useState} from 'react';
import {Box, Button, useTheme} from "@mui/material";
import LocaleText from "../Locale/LocaleText/LocaleText";
import './styles.css'

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
            <Button
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                variant={'contained'}
                sx={{
                    bgcolor: 'black',
                    transition: theme.transitions.create(['opacity'], {
                        duration: 500
                    })
                }}
                className={'anim ' + style}
            >
                <LocaleText
                    localeList={[
                        'К началу',
                        'To the top'
                    ]}
                    useDefault
                />
            </Button>

        </Box>
    );
};

export default BackToTop;