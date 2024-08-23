import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import appInfo from "../../../store/appInfo";

const Footer = () => {


    return (
        <>
            <Box
                sx={{
                    bgcolor: 'black',
                    mt: 4,
                    py: 2
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyItems: 'flex-start',
                        px: 2
                    }}
                >
                    <Typography
                        variant={'h5'}
                    >
                        Контакты:
                    </Typography>
                    <Box>
                        <Button
                            sx={{
                                color: '#26c21f',
                            }}
                            startIcon={<WhatsAppIcon/>}
                        >
                            Whats app
                        </Button>
                        <Button
                            sx={{
                                color: '#109dff'
                            }}
                            startIcon={<TelegramIcon/>}
                        >
                            Telegram
                        </Button>
                    </Box>

                </Box>

            </Box>
            {appInfo.isMobile && (
                <Box
                    sx={{
                        height: '60px'
                    }}
                >

                </Box>
            )}

        </>

    );
};

export default Footer;