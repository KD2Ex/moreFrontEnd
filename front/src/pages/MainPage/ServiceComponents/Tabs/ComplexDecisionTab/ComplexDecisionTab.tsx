import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import LocaleText from "../../../../../components/Locale/LocaleText/LocaleText";
import CardItem from "../../../CardItem/CardItem";
import locale from "../../../../../store/locale.ts";
import LocaleComponent from "../../../../../newComponents/LocaleComponent/LocaleComponent.tsx";
import {observer} from "mobx-react-lite";

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

const flatItems = {
    "ru": [
        '•\tАнализ вариантов недвижимости перед покупкой\n',
        '•\tМаксимальный пакет дизайн-проекта\n',
        '•\tКомплектация\n',
        '•\tАвторское сопровождение \n',
    ],
    "en-US": [
        '• Pre-purchase analysis of real estate options',
        '• Maximum package of design project',
        '• Completion',
        '• Author\'s supports',
    ]
}

const houseItems = {
    "ru": [
        '•\tАнализ вариантов недвижимости (земельный участок/ готовый дом) перед покупкой\n',
        '•\tСхема планировки участка\n',
        '•\tАрхитектурное решение\n',
        '•\tАрхитектурно-строительный проект\n',
        '•\tМаксимальный пакет дизайн-проекта\n',
        '•\tЛандшафтный дизайн\n',
        '•\tКомплектация\n',
        '•\tАвторское сопровождение\n'
    ],
    "en-US": [
        '• Analysis of real estate options (land plot/completed house) before purchase',
        '• Plot layout diatgram',
        '• Architecural solution',
        '• Architectural and construction project',
        '• Maximum package of design project',
        '• Landscape design',
        '• Completion',
        '• Author\'s support',
    ]
}


const buisnessItems = {
    "ru": [
        '•\tАнализ недвижимости перед арендой/приобретением в соответствии с задачами\n',
        '•\tМаксимальный пакет дизайн-проекта\n',
        '•\tРазработка фирменного стиля\n',
        '•\tРазработка рекламной продукции\n',
        '•\tКомплектация\n',
        '•\tАвторское сопровождение\n'
    ],
    "en-US": [
        '• Pre-lease/acquisition analysis of the property as per the objectives',
        '• Maximum design package',
        '• Corporate identity development',
        '• Development of promotional products',
        '• Completion',
        '• Author\'s support'
    ]
}

const ComplexDecisionTab = observer(() => {


    return (
        <>

            <Box>
                <LocaleText
                    useDefault
                    variant={'h3'}
                    fontSize={'2.75rem'}
                    localeList={[
                        'Идеальное решение под ключ: доверьтесь опыту',
                        'Perfect turnkey solutions: trust the experience'
                    ]}
                />

                <LocaleText
                    useDefault
                    variant={'h5'}
                    localeList={[
                        'От проектирования до последней детали — всё для вашего комфорта',
                        'From design to the last detail — everything for your comfort'
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
                                {flatItems[locale.currentLocale.name].map((i, index) => (
                                    <React.Fragment key={index}>{i} <br/></React.Fragment>
                                ))}
                            </Typography>

                            <Typography
                                variant={'h5'}
                                textAlign={'center'}
                            >
                                <LocaleComponent localeName={"ru"}>
                                    5000 руб./ м<sup>2</sup> выбранной жилплощади
                                </LocaleComponent>
                                <LocaleComponent localeName={"en-US"}>
                                    50€ / m<sup>2</sup> of selected living space
                                </LocaleComponent>
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
                                'House'
                            ]}
                        >
                            <Typography
                                fontSize={'1rem'}
                            >
                                {houseItems[locale.currentLocale.name].map((i, index) => (
                                    <React.Fragment key={index}>{i} <br/></React.Fragment>
                                ))}
                            </Typography>

                            <Typography
                                variant={'h5'}
                                fontSize={'1.75rem'}
                                textAlign={'center'}
                            >
                                <LocaleComponent localeName={"ru"}>
                                    Стоимость:
                                </LocaleComponent>
                                <LocaleComponent localeName={"en-US"}>
                                    Costs:
                                </LocaleComponent>
                            </Typography>
                            <Typography
                                fontSize={'1rem'}
                                textAlign={'justify'}
                            >
                                <LocaleComponent localeName={"ru"}>
                                    До 6 соток – 1 000 000₽ <br/>
                                    6-12 соток – 1 500 000₽ <br/>
                                    12-20 соток – 2 000 000₽ <br/>
                                    Сроки выполнения рассчитываются индивидуально, работа ведется поэтапно
                                </LocaleComponent>
                                <LocaleComponent localeName={"en-US"}>
                                    Up to 0.6 hectares – 10 000€  <br/>
                                    0.6-1.2 hectares – 15 000€<br/>
                                    1.2-2 hectares – 20 000€ <br/>
                                    The terms of fulfillment are calculated individually, the work is carried out in stages
                                </LocaleComponent>

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
                                'Buisness'
                            ]}
                        >
                            <Typography
                                fontSize={'1rem'}
                            >
                                {buisnessItems[locale.currentLocale.name].map((i, index) => (
                                    <React.Fragment key={index}>{i} <br/></React.Fragment>
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
                                    <LocaleComponent localeName={"ru"}>
                                        Стоимость:
                                    </LocaleComponent>
                                    <LocaleComponent localeName={"en-US"}>
                                        Costs:
                                    </LocaleComponent>
                                </Typography>
                                <Typography
                                    fontSize={'1rem'}
                                    textAlign={'justify'}
                                >
                                    <LocaleComponent localeName={"ru"}>
                                        До 50   м<sup>2</sup> – 200 000₽ <br/>
                                        50-100  м<sup>2</sup> – 350 000₽ <br/>
                                        100-200 м<sup>2</sup> – 500 000₽ <br/>
                                        Сроки выполнения рассчитываются индивидуально, работа ведется поэтапно
                                    </LocaleComponent>
                                    <LocaleComponent localeName={"en-US"}>
                                        Up to 50 m<sup>2</sup> – 2000€ <br/>
                                        50-100 m<sup>2</sup>– 3500€ <br/>
                                        100-200 m<sup>2</sup> – 5000€ <br/>
                                        The terms of fulfillment are calculated individually, the work is carried out in stages
                                    </LocaleComponent>
                                </Typography>
                            </Box>

                        </CardItem>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
});

export default ComplexDecisionTab;