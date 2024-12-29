import React from 'react';
import LocaleText from "../../../../../components/Locale/LocaleText/LocaleText";
import {Box, Grid, Typography} from "@mui/material";
import CardItem from "../../../CardItem/CardItem";
import RawLocale from "../../../MainBlock/StickyText/RawLocale/RawLocale.tsx";
import locale from "../../../../../store/locale.ts";
import EnComponent from "../../../../../newComponents/LocaleComponent/EnComponent/EnComponent.tsx";
import LocaleComponent from "../../../../../newComponents/LocaleComponent/LocaleComponent.tsx";

const minimumItems = [
    '•	Обмерочный план',
    '•	Планировочные решения',
    '•\tКонцепция (Фотореалистичное изображение помещений 1 ракурс на помещение)',
    '•	Схема освещения',
    '•	Схема электрики',
]

const standardItems = [
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
    '•\tПодбор отделочных материалов, мебели, оборудования\n',
    '•\tВедомость комплектации декоративных отделочных материалов, мебели, оборудования и освещения (без декора)\n',
    '•\tОриентировочная смета на реализацию под ключ\n'
]
const fullProjectItems = [
    '• Пакет "Стандарт"',
    '•\tСечения, детали\n',
    '•\tФотореалистичное изображение всех помещений с необходимых ракурсов \n',
    '•\tВедомость комплектации декоративных отделочных материалов, мебели, оборудования, освещения и декора',
    '•\tВидеообзор'
]

const enMinimumItems = [
    "• Dimensioning plan",
    "• Planning solutions",
    "• Concept (Photorealistic image of the rooms, 1 view per room)",
    "• Lightning scheme",
    "• Electrical scheme",
]

const enFullItems = [
    "• \"Standard\" package",
    "• Sections, details",
    "• Photorealistic image of all rooms from the necessary angles",
    "• List of decorative finishing materials, furniture, equipment, lightning and decor",
    "• Video review",
]

const enStandardItems = [
    "• Minimum package",
    "• Furniture and equipment layout plan",
    "• Ergonomics diagrams",
    "• Floor plan",
    "• Ceiling plan",
    "• Style collage / moodboard",
    "• Layout of engineering equipment",
    "• Wall layout",
    "• Maps of pre-finishing and decorative finishes",
    "• Specification of decorative finishing materials",
    "• List of room finishes",
    "• Concept (photorealistic image of premises 2 angles per room)",
    "• Selection of finishing materials, furniture, equipment",
    "• List of decorative finishing materials, furniture, equipment and lightning (without decor)",
    "• Approximate estimate for turnkey immplementation",
]

const centerStyle = {
    '*': {
        textAlign: 'center'
    }
}

const ProjectTab = () => {



    return (
        <>
            <Box
            >
                <LocaleText
                    useDefault
                    variant={'h3'}
                    fontSize={'2.75rem'}
                    localeList={[
                        'Ваше пространство - ваш стиль.',
                        'Your space - your style'
                    ]}
                />

                <LocaleText
                    useDefault
                    variant={'h5'}
                    localeList={[
                        'Персонализированные решения для дома и бизнеса, созданные с любовью к деталям.',
                        'Personalized solutions for home and business, created with love for detail.'
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

                            <Box
                            >
                                <LocaleComponent localeName={"ru"}>
                                    {minimumItems.map((item, index) => (
                                        <Typography fontSize={'1rem'} key={index}>{item} <br/></Typography>
                                    ))}
                                </LocaleComponent>
                                <LocaleComponent localeName={"en-US"}>
                                    {enMinimumItems.map((item, index) => (
                                        <Typography fontSize={'1rem'} key={index}>{item} <br/></Typography>
                                    ))}
                                </LocaleComponent>
                            </Box>

                            <Box
                                sx={centerStyle}
                            >
                                <LocaleComponent localeName={"en-US"}>

                                    <Typography
                                        fontSize={'1.5rem'}
                                        fontWeight={'bold'}
                                    >
                                        15€ / m<sup>2</sup>
                                    </Typography>
                                    <Typography
                                        fontSize={'1.2rem'}
                                    >
                                        Lead time from 10 working days
                                    </Typography>
                                </LocaleComponent>
                                <LocaleComponent localeName={"ru"}>

                                    <Typography
                                        fontSize={'1.5rem'}
                                        fontWeight={'bold'}
                                    >
                                        1500₽ / м<sup>2</sup>
                                    </Typography>
                                    <Typography
                                        fontSize={'1.2rem'}
                                    >
                                        Срок выполнения от 10 рабочих дней
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
                            <Box
                            >
                                <LocaleComponent localeName={"ru"}>
                                    {fullProjectItems.map((item, index) => (
                                        <Typography fontSize={'1rem'} key={index}>{item} <br/></Typography>
                                    ))}
                                </LocaleComponent>
                                <LocaleComponent localeName={"en-US"}>
                                    {enFullItems.map((item, index) => (
                                        <Typography fontSize={'1rem'} key={index}>{item} <br/></Typography>
                                    ))}
                                </LocaleComponent>
                            </Box>


                            <Box
                                sx={centerStyle}
                            >
                                <LocaleComponent localeName={"ru"}>

                                    <Typography
                                        variant={'h5'}
                                        fontWeight={"bold"}
                                    >
                                        4500₽ / м<sup>2</sup>

                                    </Typography>
                                    <Typography
                                        fontSize={'1.2rem'}
                                    >
                                        Срок выполнения от 30 рабочих дней
                                    </Typography>
                                </LocaleComponent>
                                <LocaleComponent localeName={"en-US"}>

                                    <Typography
                                        variant={'h5'}
                                        fontWeight={"bold"}
                                    >
                                        45€ / m<sup>2</sup>
                                    </Typography>
                                    <Typography
                                        fontSize={'1.2rem'}
                                    >
                                        Lead time from 30 working days
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
                        <Box
                        >
                            <LocaleComponent localeName={"ru"}>
                                {standardItems.map((item, index) => (
                                    <Typography fontSize={'1rem'} key={index}>{item} <br/></Typography>
                                ))}
                            </LocaleComponent>
                            <LocaleComponent localeName={"en-US"}>
                                {enStandardItems.map((item, index) => (
                                    <Typography fontSize={'1rem'} key={index}>{item} <br/></Typography>
                                ))}
                            </LocaleComponent>
                        </Box>

                        <Box sx={centerStyle}>
                            <LocaleComponent localeName={"ru"}>
                                <Typography
                                    variant={'h5'}
                                    textAlign={'center'}
                                    fontWeight={"bold"}
                                >
                                    3000₽ / м<sup>2</sup> <br/>

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
                                    fontWeight={"bold"}
                                    textAlign={'center'}
                                >
                                    30€ / m<sup>2</sup> <br/>

                                </Typography>
                                <Typography
                                    fontSize={'1.2rem'}
                                >
                                    Lead time from 20 working days
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
                                    •	20 000 руб./мес. в онлайн/телефонном режиме<br/>
                                    •	35 000 руб./мес. онлайн + 4 выезда на объект

                                </Typography>
                                <Typography
                                    fontSize={'1rem'}
                                >
                                    До 51-100 м<sup>2</sup><br/>
                                    •	25 000 руб./мес. в онлайн/телефонном режиме<br/>
                                    •	40 000 руб./мес. онлайн + 4 выезда на объект
                                </Typography>
                                <Typography
                                    fontSize={'1rem'}
                                >
                                    101-200 м<sup>2</sup><br/>
                                    •	30 000 руб./мес. в онлайн/телефонном режиме<br/>
                                    •	50 000 руб./мес. онлайн + 4 выезда на объект
                                </Typography>

                            </LocaleComponent>
                            <LocaleComponent localeName={"en-US"}>
                                <Typography
                                    fontSize={'1rem'}
                                >
                                    Up to 50 m<sup>2</sup> <br/>
                                    •	200€ per month in online format<br/>
                                    •	350€ per month in online format + 4 site visits

                                </Typography>
                                <Typography
                                    fontSize={'1rem'}
                                >
                                    Up to 51-100 m<sup>2</sup> <br/>
                                    •	200€ per month in online format<br/>
                                    •	400€ per month in online format + 4 site visits
                                </Typography>
                                <Typography
                                    fontSize={'1rem'}
                                >
                                    101-200 m<sup>2</sup> <br/>
                                    •	300€ per month in online format<br/>
                                    •	500€ per month in online format + 4 site visits
                                </Typography>

                            </LocaleComponent>
                        </Box>


                        <Box
                            sx={centerStyle}
                        >
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
                                >
                                    Payment is made in stages
                                </Typography>

                            </LocaleComponent>
                        </Box>

                    </CardItem>
                </Grid>
            </Grid>

        </>
    );
};

export default ProjectTab;