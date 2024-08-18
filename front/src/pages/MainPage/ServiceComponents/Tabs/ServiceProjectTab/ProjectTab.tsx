import React from 'react';
import LocaleText from "../../../../../components/Locale/LocaleText/LocaleText";
import ServiceCard from "../../ServiceCard/ServiceCard";
import {Box, Grid, Typography} from "@mui/material";
import appInfo from "../../../../../store/appInfo";
import test from '../../../../../assets/test.jpg'

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

const full = [

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


            <Box
                sx={{
                    '.MuiBox-root': {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                        mt: 2
                    }
                }}
            >
                <Grid
                    container
                    spacing={2}
                >

                    <ServiceCard
                        height={appInfo.isMobile ? 'auto' : 500}
                        title={[
                            'Минимум',
                            'Minimum'
                        ]}
                        listItems={minimumItems}
                    >
                        <Box
                            sx={{
                                textAlign: 'center'
                            }}
                        >
                            <Typography
                                variant={'h5'}
                            >
                                1500 руб./ кв.м. <br/>
                                <Typography
                                    fontSize={'1.2rem'}
                                >
                                    Срок выполнения от 10 рабочих дней
                                </Typography>
                            </Typography>

                        </Box>

                    </ServiceCard>

                    <ServiceCard
                        height={500}
                        title={[
                            'Стандарт',
                            'Standard'
                        ]}
                        listItems={minimumItems}
                        sx={{
                            bgcolor: 'red',
                            backgroundImage: `url(${test})`
                        }}
                    >
                        <Box
                            sx={{
                                textAlign: 'center',

                            }}
                        >
                            <Typography
                                variant={'h5'}
                            >
                                3000 руб./ кв.м. <br/>
                                <Typography
                                    fontSize={'1.2rem'}
                                >
                                    Срок выполнения от 10 рабочих дней
                                </Typography>
                            </Typography>

                        </Box>

                    </ServiceCard>


                    <ServiceCard
                        height={500}
                        title={[
                            'Полный',
                            'Full'
                        ]}
                        listItems={minimumItems}
                    >
                        <Box
                            sx={{
                                textAlign: 'center'
                            }}
                        >
                            <Typography
                                variant={'h5'}
                            >
                                4500 руб./кв.м.
                                <br/>
                                <Typography
                                    fontSize={'1.2rem'}
                                >
                                    Срок выполнения от 30 рабочих дней

                                </Typography>
                            </Typography>
                        </Box>

                    </ServiceCard>

                    <ServiceCard
                        title={[
                            'Авторское сопровождение дома/квартиры',
                            'Minimum'
                        ]}
                        listItems={[
                            'До 50 кв.м.:',
                            '•\t20000 руб./мес. в онлайн режиме\n',
                            '•\t35000 руб./мес. онлайн + 4 выезда на объект\n',
                            '50-100 кв.м.: \n',
                            '•\t25000 руб./мес. в онлайн режиме\n',
                            '•\t40000 руб./мес. онлайн + 4 выезда на объект\n',
                            '              \n',
                            '100-200 кв.м.: \n',
                            '•\t30000 руб./мес. в онлайн режиме\n',
                            '•\t50000 руб./мес. онлайн + 4 выезда на объект\n',
                            '\n',
                            'Свыше 200 кв.м. условия обговариваются индивидуально\n'
                        ]}
                    />
                    <ServiceCard
                        title={[
                            'Комплектация',
                            'Minimum'
                        ]}
                        listItems={[]}
                    >
                        <Typography
                            variant={'h6'}
                            fontSize={'1rem'}
                        >
                            Стоимость комплектации 10% от суммы закупки<br/>
                            Закупка производится у рекомендованных поставщиков на специальных условиях
                        </Typography>
                    </ServiceCard>
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