import React, {useEffect} from 'react';
import LocaleText from "../../../../../components/Locale/LocaleText/LocaleText";
import {Box, Grid, Typography} from "@mui/material";
import appInfo from "../../../../../store/appInfo";
import ServiceCard from "../../ServiceCard/ServiceCard";
import CardItem from "../../../CardItem/CardItem";

const ConsultTab = () => {



    return (
        <>
            <Box
            >
                <LocaleText
                    useDefault
                    variant={appInfo.isMobile ? 'h3' : 'h3'}
                    fontSize={'2.5rem'}
                    sx={{
                        wordBreak: 'break-word',
                        mb: 2
                    }}
                    localeList={[
                        'Консультация дизайнера: помощь в критических моментах.',
                        'Project'
                    ]}
                />

                <LocaleText
                    fontSize={'1.1rem'}
                    useDefault
                    sx={{
                        textAlign: 'justify',
                        mb: 2
                    }}
                    localeList={[
                        'Онлайн или на месте — мы помогаем вам в любой ситуации, от выбора материалов до оптимизации пространства.\n' +
                        'Консультация дизайнера — это своего рода "скорая помощь". В разных ситуациях.\n',
                        'Project'
                    ]}
                >
                    Выделим основные:<br/>
                    1. При выборе недвижимости.<br/>
                    2. Перед началом ремонта, вместо дизайн-проекта, при не сложных решениях<br/>
                    3. Во время ремонта. При возникновении спорных ситуации, при замене отделочных материалов и еще 1001 вопрос можно решить с помощью дизайнера.<br/>
                    4. Очень выручает при ремонте в коммерческих, общественных пространствах, кафе, корнеры и даже небольшие рестораны. Время м бюджет как правило ограничены, а мы умеем быстро, по существу, но при этом в соответствии с бизнес-задачей. Будь то к-рор кафе или офис юридической компании.<br/>
                    С выездом на объект, онлайн по видео связи, а иногда даже в мессенджере.

                </LocaleText>


                <Grid
                    container
                    spacing={2}
                >
                    <Grid
                        item
                        md={4}
                        xs={12}
                    >
                        <CardItem
                            height={{xs: 'auto', md: 300}}
                            title={[
                                'Онлайн',
                                'Online'
                            ]}
                        >
                            <Typography
                                fontSize={'1.2rem'}
                                textAlign={'center'}
                                sx={{
                                    my: 1
                                }}
                            >
                                Консультация в мессенджере или по видеосвязи
                            </Typography>
                            <Typography
                                fontSize={'1.5rem'}
                                textAlign={'center'}
                            >
                                5000 руб./час

                            </Typography>
                        </CardItem>
                    </Grid>


                    <Grid
                        item
                        md={4}
                        xs={12}
                    >
                        <CardItem
                            height={{xs: 'auto', md: 300}}
                            title={[
                                'Оффлайн',
                                'Offline'
                            ]}
                        >
                            <Typography
                                    fontSize={'1.2rem'}
                                    textAlign={'center'}
                                    sx={{
                                        my: 1
                                    }}
                                >
                                    Консультация с выездом на объект/ личная встреча на нейтральной территории/ встреча в интерьерных салонах и магазинах

                                </Typography>
                                <Typography
                                    fontSize={'1.5rem'}
                                    textAlign={'center'}
                                >
                                    7500 руб. (до 2 часов)

                                </Typography>

                        </CardItem>
                    </Grid>


                    <Grid
                        item
                        md={4}
                        xs={12}
                    >
                        <CardItem
                            height={{xs: 'auto', md: 300}}
                            title={[
                                'Один вопрос',
                                'One quesiton'
                            ]}
                        >
                            <Typography
                                fontSize={'1.2rem'}
                                textAlign={'center'}
                                sx={{
                                    my: 1
                                }}
                            >
                                В мессенджере: развернутый ответ/решение одной проблемы/задачи/ситуации
                            </Typography>
                            <Typography
                                fontSize={'1.5rem'}
                                textAlign={'center'}
                            >
                                990 руб.

                            </Typography>

                        </CardItem>
                    </Grid>

                    <Grid
                        item
                        md={4}
                        xs={12}
                    >
                        <CardItem
                            height={{xs: 'auto', md: 300}}
                            title={[
                                'Бесплатная',
                                'Free'
                            ]}
                        >
                            <Typography
                                fontSize={'1.2rem'}
                                textAlign={'center'}
                                sx={{
                                    my: 1
                                }}
                            >
                                По телефону: выявление потребностей перед началом сотрудничества, подбор необходимого пакета услуг
                            </Typography>
                            <Typography
                                fontSize={'1.5rem'}
                                textAlign={'center'}
                            >
                                990 руб.

                            </Typography>

                        </CardItem>
                    </Grid>

                </Grid>

                <Box
                    sx={{
                        height: '70px'
                    }}
                >

                </Box>
            </Box>
        </>
    );
};

export default ConsultTab;