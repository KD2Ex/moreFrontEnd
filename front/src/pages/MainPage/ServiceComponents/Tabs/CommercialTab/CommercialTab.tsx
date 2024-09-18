import React from 'react';
import LocaleText from "../../../../../components/Locale/LocaleText/LocaleText";
import {Box, Grid, Typography} from "@mui/material";
import CardItem from "../../../CardItem/CardItem";


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
    '•\tПодбор отделочных материалов, мебели, оборудования.\n',
    '•\tВедомость комплектации декоративных отделочных материалов, мебели, оборудования и освещения (без декора)\n',
    '•\tОриентировочная смета на реализацию под ключ\n'
]
const fullProjectItems = [
    '• Пакет "Стандарт"',
    '•\tСечения, детали\n',
    '•\tФотореалистичное изображение всех помещений с необходимых ракурсов. \n',
    '•\tВедомость комплектации декоративных отделочных материалов, мебели, оборудования, освещения и декора.',
    '•\tВидеообзор'
]


const centerStyle = {
    '*': {
        textAlign: 'center'
    }
}

const CommercialTab = () => {
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
                        'Project'
                    ]}
                />

                <LocaleText
                    useDefault
                    variant={'h5'}
                    localeList={[
                        'Оптимизация пространства и создание впечатляющей атмосферы для вашего коммерческого успеха.',
                        'Project'
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
                                {minimumItems.map((item, index) => (
                                    <React.Fragment key={index}>{item} <br/></React.Fragment>
                                ))}
                            </Typography>


                            <Box
                                sx={centerStyle}
                            >
                                <Typography
                                    fontSize={'1.5rem'}
                                    textAlign={'center'}
                                >
                                    2000 руб./час

                                </Typography>
                                <Typography
                                    fontSize={'1.2rem'}
                                >
                                    Срок выполнения от 7 рабочих дней
                                </Typography>
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
                                {fullProjectItems.map((item, index) => (
                                    <React.Fragment key={index}>{item} <br/></React.Fragment>
                                ))}
                            </Typography>

                            <Box sx={centerStyle}>
                                <Typography
                                    variant={'h5'}
                                    textAlign={'center'}
                                >
                                    5000 руб./ кв.м. <br/>

                                </Typography>
                                <Typography
                                    fontSize={'1.2rem'}
                                >
                                    Срок выполнения от 20 рабочих дней
                                </Typography>
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
                            {standardItems.map((item, index) => (
                                <React.Fragment key={index}>{item} <br/></React.Fragment>
                            ))}
                        </Typography>


                        <Box sx={centerStyle}>
                            <Typography
                                variant={'h5'}
                                textAlign={'center'}
                            >
                                3500 руб./ кв.м. <br/>

                            </Typography>
                            <Typography
                                fontSize={'1.2rem'}
                            >
                                Срок выполнения от 15 рабочих дней
                            </Typography>
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
                            <Typography
                                fontSize={'1rem'}
                            >
                                До 50 кв.м.: <br/>
                                •	50 000 руб./мес. в онлайн/телефонном режиме<br/>
                                •	70 000 руб./мес. онлайн + 4 выезда на объект

                            </Typography>
                            <Typography
                                fontSize={'1rem'}
                            >
                                До 50-100 кв.м.:<br/>
                                •	60 000 руб./мес. в онлайн/телефонном режиме<br/>
                                •	80 000 руб./мес. онлайн + 4 выезда на объект
                            </Typography>
                            <Typography
                                fontSize={'1rem'}
                            >
                                100-200 кв.м.:<br/>
                                •	70 000 руб./мес. в онлайн/телефонном режиме<br/>
                                •	90 000 руб./мес. онлайн + 4 выезда на объект
                            </Typography>
                        </Box>


                        <Typography
                            variant={'h5'}
                            fontSize={'1.2rem'}
                            textAlign={'center'}
                        >
                            Свыше 200 кв.м. условия обговариваются индивидуально <br/>
                            <Typography
                                fontSize={'1.2rem'}
                            >
                                Оплата производится поэтапно
                            </Typography>
                        </Typography>
                    </CardItem>
                </Grid>
            </Grid>
        </>
    );
};

export default CommercialTab;