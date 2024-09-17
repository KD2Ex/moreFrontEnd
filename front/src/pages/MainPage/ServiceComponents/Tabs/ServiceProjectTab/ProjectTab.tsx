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
                        'Project'
                    ]}
                />

                <LocaleText
                    useDefault
                    variant={'h5'}
                    localeList={[
                        'Персонализированные решения для дома и бизнеса, созданные с любовью к деталям.',
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
                            <Box
                            >
                                {minimumItems.map((item, index) => (
                                    <Typography fontSize={'1rem'} key={index}>{item} <br/></Typography>
                                ))}
                            </Box>

                            <Box
                                sx={...centerStyle}
                            >
                                <Typography
                                    fontSize={'1.5rem'}
                                >
                                    1500 руб./час

                                </Typography>
                                <Typography
                                    fontSize={'1.2rem'}
                                >
                                    Срок выполнения от 10 рабочих дней
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
                            <Box
                            >
                                {fullProjectItems.map((item, index) => (
                                    <Typography fontSize={'1rem'} key={index}>{item} <br/></Typography>
                                ))}
                            </Box>


                            <Box
                                sx={...centerStyle}
                            >
                                <Typography
                                    variant={'h5'}
                                >
                                    4500 руб./ кв.м.

                                </Typography>
                                <Typography
                                    fontSize={'1.2rem'}
                                >
                                    Срок выполнения от 30 рабочих дней
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
                        <Box
                        >
                            {standardItems.map((item, index) => (
                                <Typography fontSize={'1rem'} key={index}>{item} <br/></Typography>
                            ))}
                        </Box>

                        <Box sx={...centerStyle}>
                            <Typography
                                variant={'h5'}
                                textAlign={'center'}
                            >
                                3000 руб./ кв.м. <br/>

                            </Typography>
                            <Typography
                                fontSize={'1.2rem'}
                            >
                                Срок выполнения от 20 рабочих дней
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
                                •	20 000 руб./мес. в онлайн/телефонном режиме<br/>
                                •	35 000 руб./мес. онлайн + 4 выезда на объект

                            </Typography>
                            <Typography
                                fontSize={'1rem'}
                            >
                                До 50-100 кв.м.:<br/>
                                •	25 000 руб./мес. в онлайн/телефонном режиме<br/>
                                •	40 000 руб./мес. онлайн + 4 выезда на объект
                            </Typography>
                            <Typography
                                fontSize={'1rem'}
                            >
                                100-200 кв.м.:<br/>
                                •	30 000 руб./мес. в онлайн/телефонном режиме<br/>
                                •	50 000 руб./мес. онлайн + 4 выезда на объект
                            </Typography>
                        </Box>


                        <Box
                            sx={...centerStyle}
                        >
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
                        </Box>

                    </CardItem>
                </Grid>
            </Grid>

        </>
    );
};

export default ProjectTab;