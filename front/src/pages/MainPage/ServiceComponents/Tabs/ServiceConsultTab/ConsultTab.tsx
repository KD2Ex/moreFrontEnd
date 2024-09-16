import React, {useEffect} from 'react';
import LocaleText from "../../../../../components/Locale/LocaleText/LocaleText";
import {Box, Grid, Typography} from "@mui/material";
import appInfo from "../../../../../store/appInfo";
import ServiceCard from "../../ServiceCard/ServiceCard";
import CardItem from "../../../CardItem/CardItem";
import RawLocale from "../../../MainBlock/StickyText/RawLocale/RawLocale";

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
                        'Консультация дизайнера: помощь в критических моментах',
                        'Designer Consultation: Assistance in Critical Moments'
                    ]}
                />

                <LocaleText
                    fontSize={'1.1rem'}
                    useDefault
                    sx={{
                    }}
                    localeList={[
                        'Онлайн или на месте — мы помогаем вам в любой ситуации, от выбора материалов до оптимизации пространства.\n' +
                        'Консультация дизайнера — это своего рода "скорая помощь". В разных ситуациях.\n',
                        'Online or on-site — we help you in any situation, from material selection to space optimization. A designer consultation is like an "emergency service" for various situations.'
                    ]}
                >

                </LocaleText>


                <LocaleText
                    fontSize={'2rem'}
                    fontWeight={'bold'}
                    useDefault
                    localeList={[
                    'Выделим основные:',
                    'Here are the key ones:'
                ]}/>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        mt: 1,
                        mb: 2
                    }}
                >
                    <Typography>
                        <RawLocale
                            list={[
                                '1. При выборе недвижимости',
                                '1. When Choosing Real Estate'
                            ]}
                        />
                        <br/>
                    </Typography>
                    <Typography>

                        <RawLocale
                            list={[
                                '2. Перед началом ремонта, вместо дизайн-проекта, при не сложных решениях',
                                '2. Before starting renovations, instead of a full design project, for simpler solutions'
                            ]}
                        />
                        <br/>
                    </Typography>
                    <Typography>
                        <RawLocale
                            list={[
                                '3. Во время ремонта. При возникновении спорных ситуации, при замене отделочных материалов и еще 1001 вопрос можно решить с помощью дизайнера',
                                '3. During renovations. When disputes arise, when replacing finishing materials, and in handling a multitude of other issues, a designer can solve 1001 questions'
                            ]}
                        />
                        <br/>
                    </Typography>
                    <Typography>
                        <RawLocale
                            list={[
                                '4. Очень выручает при ремонте в коммерческих, общественных пространствах, кафе, корнеры и даже небольшие рестораны. Время м бюджет как правило ограничены, а мы умеем быстро, по существу, но при этом в соответствии с бизнес-задачей. Будь то к-рор кафе или офис юридической компании.',
                                '4. Very helpful in the repair of commercial, public spaces, cafes, corners and even small restaurants. Time and budget are usually limited, and we are able to quickly, essentially, but in accordance with the business task. Whether it\'s a k-pop cafe or a law firm office.'
                            ]}
                        />
                        <br/>
                        <RawLocale
                            list={[
                                'С выездом на объект, онлайн по видео связи, а иногда даже в мессенджере',
                                'With on-site visits, online via video link, and sometimes even in messenger'
                            ]}
                        />

                    </Typography>
                </Box>


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

                            >
                                <RawLocale
                                    list={[
                                        'Консультация в мессенджере или по видеосвязи',
                                        'Consultation via messaging or video call'
                                    ]}
                                />

                            </Typography>
                            <Typography
                                fontSize={'1.5rem'}
                                textAlign={'center'}
                                fontWeight={'bold'}
                            >
                                <RawLocale
                                    list={[
                                        '5000₽ / час',
                                        '€50 / hour'
                                    ]}
                                />
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
                                <RawLocale
                                    list={[
                                        'Консультация с выездом на объект / личная встреча на нейтральной территории / встреча в интерьерных салонах и магазинах',
                                        'Consultation with on-site visits / personal meetings in neutral locations / meetings in interior showrooms and stores.'
                                    ]}
                                />
                            </Typography>
                            <Typography
                                fontSize={'1.5rem'}
                                textAlign={'center'}
                                fontWeight={'bold'}
                            >
                                <RawLocale
                                    list={[
                                        '7500₽ (до 2 часов)',
                                        '€75 (up to 2 hours)'
                                    ]}
                                />
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
                                'Single question'
                            ]}
                        >
                            <Typography
                                fontSize={'1.2rem'}
                                textAlign={'center'}
                                sx={{
                                    my: 1
                                }}
                            >

                                <RawLocale
                                    list={[
                                        'В мессенджере: развернутый ответ/решение одной проблемы/задачи/ситуации',
                                        'In a messenger: a detailed response/solution to one problem/task/situation'
                                    ]}
                                />

                            </Typography>
                            <Typography
                                fontSize={'1.5rem'}
                                textAlign={'center'}
                                fontWeight={'bold'}
                            >
                                <RawLocale
                                    list={[
                                        '990₽',
                                        '€9.99'
                                    ]}
                                />

                            </Typography>

                        </CardItem>
                    </Grid>


                    {!appInfo.isMobile && (
                        <Grid
                            item
                            md={4}
                        />
                    )}

                    <Grid
                        item
                        md={4}
                        xs={12}
                    >
                        <CardItem
                            title={[
                                'Бесплатная',
                                'Free of charge'
                            ]}
                        >
                            <Typography
                                fontSize={'1.2rem'}
                                textAlign={'center'}
                                sx={{
                                    my: 1
                                }}
                            >
                                <RawLocale
                                    list={[
                                        'По телефону: выявление потребностей перед началом сотрудничества, подбор необходимого пакета услуг',
                                        'By phone: identification of needs before starting cooperation, selection of the necessary package of services'
                                    ]}
                                />

                            </Typography>
                        </CardItem>
                    </Grid>

                </Grid>

            </Box>
        </>
    );
};

export default ConsultTab;