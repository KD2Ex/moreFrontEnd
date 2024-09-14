import React from 'react';
import {Box, IconButton, Typography} from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {getWappLink} from "../../../../consts";



const MobileFooter = () => {
    const tgLink = `https://t.me/Katerina_Serebryanskaya`
    const wAppLink = getWappLink(`Здравствуйте!`)
    return (
        <Box
            sx={{
                py: 2,
                mt: 4,
                bgcolor: '#171717',
                boxShadow: '#0b0b0b inset 0px 9px 30px -6px ',
                height: '100vh',
                position: 'relative'
            }}
        >

            <Box
                sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <IconButton
                        component={'a'}
                        href={wAppLink}
                        target={"_blank"}
                        size={'large'}
                        sx={{
                            color: (theme) => theme.palette.text.secondary,
                        }}
                    >
                        <WhatsAppIcon fontSize="large"/>
                    </IconButton>
                    <IconButton
                        component={'a'}
                        href={tgLink}
                        target={"_blank"}
                        size={'large'}
                        sx={{
                            color: (theme) => theme.palette.text.secondary,
                        }}
                    >
                        <TelegramIcon fontSize="large"/>
                    </IconButton>
                </Box>

            </Box>

            <Box
                sx={{
                    display: 'flex',
                    margin: 'auto',
                    height: '20px',
                    position: 'relative',
                    justifyContent: 'center'
                }}
            >
                <Typography
                    sx={{
                        position: 'absolute',
                        bottom: 64,
                        alignSelf: 'center'
                    }}
                >
                    Constructed by Daniil Serebrianskii
                </Typography>
            </Box>

        </Box>
    );
};

export default MobileFooter;