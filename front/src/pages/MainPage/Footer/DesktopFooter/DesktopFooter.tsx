import React from 'react';
import {Box, Button, IconButton, Typography} from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import appInfo from "../../../../store/appInfo";

const DesktopFooter = () => {


    return (
        <>
            <Box
                sx={{
                    mt: 4,
                    py: 2,
                    boxShadow: '#0b0b0b inset 0px 9px 30px -6px ',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: 2,
                        maxWidth: 1200,
                        margin: 'auto'
                    }}
                >
                    <Box
                        sx={{
                        }}
                    >
{/*                        <Typography
                            fontSize={'1.25rem'}
                        >
                            Контакты:
                        </Typography>*/}
                        <Box>
                            <IconButton
                                sx={{
                                    color: (theme) => theme.palette.text.secondary,
                                }}
                            >
                                <WhatsAppIcon/>
                            </IconButton>
                            <IconButton
                                sx={{
                                    color: (theme) => theme.palette.text.secondary,
                                }}
                            >
                                <TelegramIcon/>
                            </IconButton>
                        </Box>

                    </Box>

                    <Box
                        sx={{
                        }}
                    >
                        <Typography
                            sx={{

                            }}
                        >
                            Constructed by Daniil Serebrianskii
                        </Typography>
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

export default DesktopFooter;