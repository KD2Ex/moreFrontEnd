import React from 'react';
import {Box, Button, IconButton, Typography} from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import appInfo from "../../../../store/appInfo";
import {getTgLink, getWappLink} from "../../../../consts";

const DesktopFooter = () => {
    const tgLink = getTgLink()
    const wAppLink = getWappLink(`Здравствуйте!`)

    return (
        <>
            <Box
                sx={{
                    mt: 4,
                    py: 2,
                    bgcolor: '#171717',
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
                        {/* <Typography
                            fontSize={'1.25rem'}
                        >
                            Контакты:
                        </Typography>*/}
                        <Box>
                            <IconButton
                                component={'a'}
                                href={wAppLink}
                                target={"_blank"}
                                sx={{
                                    color: (theme) => theme.palette.text.secondary,
                                }}
                            >
                                <WhatsAppIcon/>
                            </IconButton>
                            <IconButton
                                component={'a'}
                                href={tgLink}
                                target={"_blank"}
                                sx={{
                                    color: (theme) => theme.palette.text.secondary,
                                }}
                            >
                                <TelegramIcon/>
                            </IconButton>
                        </Box>

                    </Box>
                    <Box>
                        <Typography
                            fontSize={12}
                            sx={{
                                color: "#444343"
                            }}
                        >
                            ОГРН 314236808600077 <br/>
                            ИНН 232509395078<br/>
                            ИП Колесникова Анастасия Евгеньевна <br/>
                            +79953189227<br/>
                            ana-sta-siya@list.ru
                        </Typography>

                    </Box>
                    <Box
                        sx={{
                        }}
                    >
                        <Typography
                            fontSize={12}
                            sx={{
                                color: "#444343"
                            }}
                        >
                            Constructed by Daniil Serebrianskii<br/>

                            <a href={"/policy"} target={"_blank"}>Privacy policy</a>
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