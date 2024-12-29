import React from 'react';
import LocaleText from "../../../../../components/Locale/LocaleText/LocaleText";
import {Box, Grid, Typography} from "@mui/material";
import CardItem from "../../../CardItem/CardItem";
import locale from "../../../../../store/locale.ts";
import {observer} from "mobx-react-lite";
import LocaleComponent from "../../../../../newComponents/LocaleComponent/LocaleComponent.tsx";


const minimumItems = [
    '•	Обмерочный план',
    '•	Планировочные решения',
    '•\tКонцепция (Фотореалистичное изображение помещений 1 ракурс на помещение)',
    '•	Схема освещения',
    '•	Схема электрики',
]

const __standardItems = [
    '•	Пакет "Минимум"',
    '•\tПлан расстановки мебели и оборудования',
    '•\tСхемы эргономики',
    '•\tПлан полов\n',
    '•\tПлан потолков\n',
    '•\tСтилевой коллаж / мудборд',
    '•\tСхема расстановки инженерного оборудования\n',
    '•\tРазвертка стен\n',
    '•\tКарты предчистовой и декоративной отделки\n',
    '•\tСпецификация декоративных отделочных материалов\n',
    '•\tВедомость отделки помещений\n',
    '•\tКонцепция (Фотореалистичное изображение помещений 2 ракурса на помещение)\n',
    '•\tПодбор отделочных материалов, мебели, оборудования.\n',
    '•\tВедомость комплектации декоративных отделочных материалов, мебели, оборудования и освещения (без декора)\n',
    '•\tОриентировочная смета на реализацию под ключ\n'
]

const fullItems = {
    "ru": [
        '• Пакет "Стандарт"',
        '•\tСечения, детали\n',
        '•\tФотореалистичное изображение всех помещений с необходимых ракурсов. \n',
        '•\tВедомость комплектации декоративных отделочных материалов, мебели, оборудования, освещения и декора.',
        '•\tВидеообзор'
    ],
    "en-US": [
        '• "Standard" package',
        '• Sections, details',
        '• Photorealistic image of all rooms from the necessary angles',
        '• List of decorative finishing materials, furniture, equipment, lightning and decor',
        '• Video review',
    ]
}

const minItems = {
    "ru": [
        '•	Обмерочный план',
        '•	Планировочные решения',
        '•\tКонцепция (Фотореалистичное изображение помещений 1 ракурс на помещение)',
        '•	Схема освещения',
        '•	Схема электрики',
    ],
    "en-US": [
        '• Dimensioning plan',
        '• Planning solutions',
        '• Concept (Photorealistic image of the rooms, 1 view per room)',
        '• Lightning scheme',
        '• Electrical scheme',
    ]
}

const standardItems = {
    "ru": [
        '•	Пакет "Минимум"',
        '•\tПлан расстановки мебели и оборудования',
        '•\tСхемы эргономики',
        '•\tПлан полов\n',
        '•\tПлан потолков\n',
        '•\tСтилевой коллаж / мудборд',
        '•\tСхема расстановки инженерного оборудования\n',
        '•\tРазвертка стен\n',
        '•\tКарты предчистовой и декоративной отделки\n',
        '•\tСпецификация декоративных отделочных материалов\n',
        '•\tВедомость отделки помещений\n',
        '•\tКонцепция (Фотореалистичное изображение помещений 2 ракурса на помещение)\n',
        '•\tПодбор отделочных материалов, мебели, оборудования.\n',
        '•\tВедомость комплектации декоративных отделочных материалов, мебели, оборудования и освещения (без декора)\n',
        '•\tОриентировочная смета на реализацию под ключ\n'
    ],
    "en-US": [
        '• "Minimum" package',
        '• Furniture and equipment layout plan',
        '• Ergonomics diagrams',
        '• Floor plan',
        '• Ceiling plan',
        '• Style collage / moodboard',
        '• Layout of engineering equipment',
        '• Wall layout',
        '• Maps of pre-finishing and decorative finishes',
        '• Specification of decorative finishing materials',
        '• List of room finishes',
        '• Concept (Photorealistic image of premises, 2 angles per room)',
        '• Selection of finishing materials, furniture, equipment',
        '• List of decorative finishing materials, furniture, equipment and lightning (without decor)',
        '• Approximate estimate for turnkey implementation',
    ]
}

const centerStyle = {
    '*': {
        textAlign: 'center'
    }
}

const CommercialTab = observer(() => {
    return (
        <>
            <Box
            >
                <LocaleText
                    useDefault
                    variant={'h3'}
                    fontSize={'2.75rem'}
                    localeList={[
                        'Эффективный дизайн-проект для вашего бизнеса.',
                        'Effective design-project for your buisness'
                    ]}
                />

                <LocaleText
                    useDefault
                    variant={'h5'}
                    localeList={[
                        'Оптимизация пространства и создание впечатляющей атмосферы для вашего коммерческого успеха.',
                        'We can optimize your space and create an impressive atmosphere for you commercial success'
                    ]}
                    sx={{
                        my: 2
                    }}
                />
            </Box>

            <Grid
                container
                spacing={2}
            >

                <Grid
                    item
                    md={6}
                    xs={12}
                >
                    <Box
                        sx={{
                            gap: 2,
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <CardItem
                            height={{xs: 'auto', md: 314}}
                            title={[
                                'Минимум',
                                'Minimum'
                            ]}
                        >
                            <Typography
                                fontSize={'1rem'}
                            >
                                {minItems[locale.currentLocale.name].map((item, index) => (
                                    <React.Fragment key={index}>{item} <br/></React.Fragment>
                                ))}
                            </Typography>


                            <Box
                                sx={centerStyle}
                            >
                                <LocaleComponent localeName={"ru"}>

                                    <Typography
                                        fontSize={'1.5rem'}
                                        textAlign={'center'}
                                        fontWeight={"bold"}
                                    >
                                        2000₽ / м<sup>2</sup>
                                    </Typography>
                                    <Typography
                                        fontSize={'1.2rem'}
                                    >
                                        Срок выполнения от 7 рабочих дней
                                    </Typography>
                                </LocaleComponent>
                                <LocaleComponent localeName={"en-US"}>

                                    <Typography
                                        fontSize={'1.5rem'}
                                        textAlign={'center'}
                                        fontWeight={"bold"}
                                    >
                                        20€ / m<sup>2</sup>

                                    </Typography>
                                    <Typography
                                        fontSize={'1.2rem'}
                                    >
                                        Lead time from 7 working days
                                    </Typography>
                                </LocaleComponent>
                            </Box>

                        </CardItem>

                        <CardItem
                            height={{xs: 'auto', md: 320}}
                            title={[
                                'Полный',
                                'Full'
                            ]}
                        >
                            <Typography
                                fontSize={'1rem'}
                            >
                                {fullItems[locale.currentLocale.name].map((item, index) => (
                                    <React.Fragment key={index}>{item} <br/></React.Fragment>
                                ))}
                            </Typography>

                            <Box sx={centerStyle}>
                                <LocaleComponent localeName={"ru"}>
                                    <Typography
                                        variant={'h5'}
                                        textAlign={'center'}
                                        fontWeight={'bold'}
                                    >
                                        5000₽ / м<sup>2</sup> <br/>

                                    </Typography>
                                    <Typography
                                        fontSize={'1.2rem'}
                                    >
                                        Срок выполнения от 20 рабочих дней
                                    </Typography>
                                </LocaleComponent>
                                <LocaleComponent localeName={"en-US"}>
                                    <Typography
                                        variant={'h5'}
                                        textAlign={'center'}
                                        fontWeight={'bold'}
                                    >
                                        50€ / m<sup>2</sup> <br/>

                                    </Typography>
                                    <Typography
                                        fontSize={'1.2rem'}
                                    >
                                        Lead time from 20 working days
                                    </Typography>
                                </LocaleComponent>
                            </Box>

                        </CardItem>
                    </Box>


                </Grid>

                <Grid
                    item
                    md={6}
                    xs={12}
                >
                    <CardItem
                        height={{xs: 'auto', md: 650}}
                        title={[
                            'Стандарт',
                            'Standard'
                        ]}
                    >
                        <Typography
                            fontSize={'1rem'}
                        >
                            {standardItems[locale.currentLocale.name].map((item, index) => (
                                <React.Fragment key={index}>{item} <br/></React.Fragment>
                            ))}
                        </Typography>


                        <Box sx={centerStyle}>
                            <LocaleComponent localeName={"ru"}>

                                <Typography
                                    variant={'h5'}
                                    textAlign={'center'}
                                    fontWeight={'bold'}
                                >
                                    3500₽ / м<sup>2</sup> <br/>

                                </Typography>
                                <Typography
                                    fontSize={'1.2rem'}
                                >
                                    Срок выполнения от 15 рабочих дней
                                </Typography>
                            </LocaleComponent>
                            <LocaleComponent localeName={"en-US"}>
                                <Typography
                                    variant={'h5'}
                                    textAlign={'center'}
                                    fontWeight={'bold'}
                                >
                                    35€ / m<sup>2</sup> <br/>

                                </Typography>
                                <Typography
                                    fontSize={'1.2rem'}
                                >
                                    Lead time from 15 working days
                                </Typography>

                            </LocaleComponent>
                        </Box>

                    </CardItem>
                </Grid>


                <Grid
                    item
                    md={12}
                    xs={12}
                >
                    <CardItem
                        height={{xs: 'auto', md: 'auto'}}
                        title={[
                            'Авторское сопровождение дома/квартиры',
                            `Author\'s support`
                        ]}
                    >

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: {xs: 'column', md: 'row'},
                                gap: {xs: 1, md: 4},
                                my: 1
                            }}
                        >
                            <LocaleComponent localeName={"ru"}>
                                <Typography
                                    fontSize={'1rem'}
                                >
                                    До 50 м<sup>2</sup> <br/>
                                    •	50 000 руб./мес. в онлайн/телефонном режиме<br/>
                                    •	70 000 руб./мес. онлайн + 4 выезда на объект

                                </Typography>
                                <Typography
                                    fontSize={'1rem'}
                                >
                                    До 51-100 м<sup>2</sup><br/>
                                    •	60 000 руб./мес. в онлайн/телефонном режиме<br/>
                                    •	80 000 руб./мес. онлайн + 4 выезда на объект
                                </Typography>
                                <Typography
                                    fontSize={'1rem'}
                                >
                                    101-200 м<sup>2</sup><br/>
                                    •	70 000 руб./мес. в онлайн/телефонном режиме<br/>
                                    •	90 000 руб./мес. онлайн + 4 выезда на объект
                                </Typography>

                            </LocaleComponent>
                            <LocaleComponent localeName={"en-US"}>
                                <Typography
                                    fontSize={'1rem'}
                                >
                                    Up to 50 m<sup>2</sup> <br/>
                                    •	500€ per month in online format<br/>
                                    •	700€ per month in online format + 4 site visits

                                </Typography>
                                <Typography
                                    fontSize={'1rem'}
                                >
                                    Up to 51-100 m<sup>2</sup> <br/>
                                    •	600€ per month in online format<br/>
                                    •	800€ per month in online format + 4 site visits
                                </Typography>
                                <Typography
                                    fontSize={'1rem'}
                                >
                                    101-200 m<sup>2</sup> <br/>
                                    •	700€ per month in online format<br/>
                                    •	900€ per month in online format + 4 site visits
                                </Typography>
                            </LocaleComponent>
                        </Box>


                        <LocaleComponent localeName={"ru"}>

                            <Typography
                                variant={'h5'}
                                fontSize={'1.2rem'}
                                textAlign={'center'}
                            >
                                Свыше 200 кв.м. условия обговариваются индивидуально <br/>

                            </Typography>
                            <Typography
                                fontSize={'1.2rem'}
                                textAlign={'center'}
                            >
                                Оплата производится поэтапно
                            </Typography>
                        </LocaleComponent>
                        <LocaleComponent localeName={"en-US"}>
                            <Typography
                                variant={'h5'}
                                fontSize={'1.2rem'}
                                textAlign={'center'}
                            >
                                Over 200 m<sup>2</sup> conditions are negotiated individually<br/>

                            </Typography>
                            <Typography
                                fontSize={'1.2rem'}
                                textAlign={'center'}
                            >
                                Payment is made in stages
                            </Typography>

                        </LocaleComponent>
                    </CardItem>
                </Grid>
            </Grid>
        </>
    );
});

export default CommercialTab;