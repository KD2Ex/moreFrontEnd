import React from 'react';
import LocaleText from "../../../../../components/Locale/LocaleText/LocaleText";
import ServiceCard from "../../ServiceCard/ServiceCard";
import {Box, Grid, Typography} from "@mui/material";
import appInfo from "../../../../../store/appInfo";
import test from '../../../../../assets/test.jpg'
import CardItem from "../../../CardItem/CardItem";

const minimumItems = [
    '•	Обмерочный план',
    '•	Планировочные решения',
    '•\tКонцепция (Фотореалистичное изображение помещений 1 ракурс на помещение)',
    '•	Схема освещения',
    '•	Схема электрики',
/*    '•	Схема расстановки инженерного оборудования',
    '•	Развертка стен',
        '•	Схемы эргономики',
    '•	Стилевой коллаж мудборд',
    '•	План полов',
    '•	План потолков',
    '•	Карты предчистовой и декоративной отделки',
    '•	Спецификация декоративных отделочных материалов',
    '•	Ведомость отделки помещений',
    '•	Концепция (Фотореалистичное изображение помещений 2 ракурса на помещение)',
    '•	Подбор отделочных материалов, мебели, оборудования.',
    '•	Ведомость комплектации декоративных отделочных материалов, мебели, оборудования и освещения (без декора)',
    '•	Ориентировочная смета на реализацию под ключ',*/
]

const standardItems = [
    '•	Пакет "Минимум"',
    '•\tПлан расстановки мебели и оборудования',
    '•\tСхемы эргономики',
    '•\tПлан полов\n',
    '•\tПлан потолков\n',
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

const supportItems = [
    'До 50 кв.м.:',
    '•\t20000 руб./мес. в онлайн режиме\n',
    '•\t35000 руб./мес. онлайн + 4 выезда на объект\n',
    '',
    '50-100 кв.м.: \n',
    '•\t25000 руб./мес. в онлайн режиме\n',
    '•\t40000 руб./мес. онлайн + 4 выезда на объект\n',
    '',
    '100-200 кв.м.: \n',
    '•\t30000 руб./мес. в онлайн режиме\n',
    '•\t50000 руб./мес. онлайн + 4 выезда на объект\n',
]


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


            <Box>
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
                                        <>{item} <br/></>
                                    ))}
                                </Typography>


                                <Typography
                                    fontSize={'1.5rem'}
                                    textAlign={'center'}
                                >
                                    1500 руб./час
                                    <Typography
                                        fontSize={'1.2rem'}
                                    >
                                        Срок выполнения от 10 рабочих дней
                                    </Typography>
                                </Typography>
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
                                        <>{item} <br/></>
                                    ))}
                                </Typography>


                                <Typography
                                    variant={'h5'}
                                    textAlign={'center'}
                                >
                                    4500 руб./ кв.м. <br/>
                                    <Typography
                                        fontSize={'1.2rem'}
                                    >
                                        Срок выполнения от 30 рабочих дней
                                    </Typography>
                                </Typography>
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
                                    <>{item} <br/></>
                                ))}
                            </Typography>


                            <Typography
                                variant={'h5'}
                                textAlign={'center'}
                            >
                                3000 руб./ кв.м. <br/>
                                <Typography
                                    fontSize={'1.2rem'}
                                >
                                    Срок выполнения от 20 рабочих дней
                                </Typography>
                            </Typography>
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
                                    •	20000 руб./мес. в онлайн/телефонном режиме<br/>
                                    •	35000 руб./мес. онлайн + 4 выезда на объект

                                </Typography>
                                <Typography
                                    fontSize={'1rem'}
                                >
                                    До 50-100 кв.м.:<br/>
                                    •	25000 руб./мес. в онлайн/телефонном режиме<br/>
                                    •	40000 руб./мес. онлайн + 4 выезда на объект
                                </Typography>
                                <Typography
                                    fontSize={'1rem'}
                                >
                                    100-200 кв.м.:<br/>
                                    •	30000 руб./мес. в онлайн/телефонном режиме<br/>
                                    •	50000 руб./мес. онлайн + 4 выезда на объект
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

export default ProjectTab;