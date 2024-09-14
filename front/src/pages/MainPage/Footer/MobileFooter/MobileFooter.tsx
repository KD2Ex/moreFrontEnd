import React from 'react';
import {Box, IconButton, Typography} from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const MobileFooter = () => {
    return (
        <Box
            sx={{
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
                        size={'large'}
                        sx={{
                            color: (theme) => theme.palette.text.secondary,
                        }}
                    >
                        <WhatsAppIcon fontSize="large"/>
                    </IconButton>
                    <IconButton
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