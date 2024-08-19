import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import LocaleText from "../../../../../components/Locale/LocaleText/LocaleText";
import CardItem from "../../../CardItem/CardItem";

const flat = [
    '•\tАнализ вариантов недвижимости перед покупкой\n',
    '•\tМаксимальный пакет дизайн-проекта\n',
    '•\tКомплектация\n',
    '•\tАвторское сопровождение \n',
]

const house = [
    '•\tАнализ вариантов недвижимости (земельный участок/ готовый дом) перед покупкой\n',
    '•\tСхема планировки участка\n',
    '•\tАрхитектурное решение\n',
    '•\tАрхитектурно-строительный проект\n',
    '•\tМаксимальный пакет дизайн-проекта\n',
    '•\tЛандшафтный дизайн\n',
    '•\tКомплектация\n',
    '•\tАвторское сопровождение\n'
]

const business = [
    '•\tАнализ недвижимости перед арендой/приобретением в соответствии с задачами\n',
    '•\tМаксимальный пакет дизайн-проекта\n',
    '•\tРазработка фирменного стиля\n',
    '•\tРазработка рекламной продукции\n',
    '•\tКомплектация\n',
    '•\tАвторское сопровождение\n'
]

const ComplexDecisionTab = () => {


    return (
        <>

            <Box>
                <LocaleText
                    useDefault
                    variant={'h3'}
                    fontSize={'2.75rem'}
                    localeList={[
                        'Идеальное решение под ключ: доверьтесь опыту',
                        'Project'
                    ]}
                />

                <LocaleText
                    useDefault
                    variant={'h5'}
                    localeList={[
                        'От проектирования до последней детали — всё для вашего комфорта',
                        'Project'
                    ]}
                    sx={{
                        my: 2
                    }}
                />

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
                            height={{xs: 'auto', md: 500}}
                            title={[
                                'Для квартиры',
                                'Flat'
                            ]}
                        >
                            <Typography
                                fontSize={'1rem'}
                            >
                                {flat.map((i, index) => (
                                    <>{i}<br/></>
                                ))}
                            </Typography>

                            <Typography
                                variant={'h5'}
                                textAlign={'center'}
                            >
                                Стоимость 5000 руб./кв.м. выбранной жилплощади
                            </Typography>
                        </CardItem>
                    </Grid>

                    <Grid
                        item
                        md={4}
                        xs={12}
                    >
                        <CardItem
                            height={{xs: 'auto', md: '100%'}}
                            title={[
                                'Для дома',
                                'Flat'
                            ]}
                        >
                            <Typography
                                fontSize={'1rem'}
                            >
                                {house.map((i, index) => (
                                    <>{i}<br/></>
                                ))}
                            </Typography>

                            <Typography
                                variant={'h5'}
                                fontSize={'1.75rem'}
                                textAlign={'center'}
                            >
                                Стоимость:
                            </Typography>
                            <Typography
                                fontSize={'1rem'}
                                textAlign={'justify'}
                            >
                                До 6 соток – 1 000 000 руб <br/>
                                6-12 соток – 1 500 000 руб <br/>
                                12-20 соток – 2 000 000 руб <br/>
                                Сроки выполнения рассчитываются индивидуально, работа ведется поэтапно

                            </Typography>
                        </CardItem>
                    </Grid>

                    <Grid
                        item
                        md={4}
                        xs={12}
                    >
                        <CardItem
                            height={{xs: 'auto', md: '100%'}}
                            title={[
                                'Для бизнесса',
                                'Flat'
                            ]}
                        >
                            <Typography
                                fontSize={'1rem'}
                            >
                                {business.map((i, index) => (
                                    <>{i}<br/></>
                                ))}
                            </Typography>

                            <Box>
                                <Typography
                                    variant={'h5'}
                                    fontSize={'1.75rem'}
                                    textAlign={'center'}
                                    sx={{
                                        mb: 1
                                    }}
                                >
                                    Стоимость:
                                </Typography>
                                <Typography
                                    fontSize={'1rem'}
                                    textAlign={'justify'}
                                >
                                    До 50 кв.м. – 200 000 руб <br/>
                                    50-100 кв.м. – 350 000 руб <br/>
                                    100-200 кв.м. – 500 000 руб <br/>
                                    Сроки выполнения рассчитываются индивидуально, работа ведется поэтапно

                                </Typography>
                            </Box>

                        </CardItem>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default ComplexDecisionTab;