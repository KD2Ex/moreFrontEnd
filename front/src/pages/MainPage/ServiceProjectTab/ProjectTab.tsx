import React from 'react';
import LocaleText from "../../../components/Locale/LocaleText/LocaleText";
import ServiceCard from "../ServiceCard/ServiceCard";
import {Box, Grid, Typography} from "@mui/material";

const minimumItems = [
    '•	Обмерочный план',
    '•	Планировочные решения',
    '•	План расстановки мебели и оборудования',
    '•	Схемы эргономики',
    '•	Стилевой коллаж мудборд',
    '•	План полов',
    '•	План потолков',
    '•	Схема освещения',
    '•	Схема электрики',
    /*'•	Схема расстановки инженерного оборудования',
    '•	Развертка стен',
    '•	Карты предчистовой и декоративной отделки',
    '•	Спецификация декоративных отделочных материалов',
    '•	Ведомость отделки помещений',
    '•	Концепция (Фотореалистичное изображение помещений 2 ракурса на помещение)',
    '•	Подбор отделочных материалов, мебели, оборудования.',
    '•	Ведомость комплектации декоративных отделочных материалов, мебели, оборудования и освещения (без декора)',
    '•	Ориентировочная смета на реализацию под ключ',*/
]
const ProjectTab = () => {
    return (
        <>
            <Box
            >
                <LocaleText
                    useDefault
                    variant={'h3'}
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
                >

                    <ServiceCard
                        flex={6}
                        height={500}
                        title={[
                            'Минимум',
                            'Minimum'
                        ]}
                        listItems={minimumItems}
                    >
                        <Typography
                            variant={'h5'}
                        >
                            3000 руб./кв.м.
                        </Typography>
                    </ServiceCard>

                    <ServiceCard
                        height={500}
                        flex={6}
                        title={[
                            'Полный',
                            'Full'
                        ]}
                        listItems={minimumItems}
                    >
                        <Typography
                            variant={'h6'}
                        >
                            4500 руб./кв.м.
                            Срок выполнения от 30 рабочих дней
                        </Typography>
                    </ServiceCard>

                    <ServiceCard
                        height={500}
                        flex={6}
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
                        height={500}
                        title={[
                            'Комплектация',
                            'Minimum'
                        ]}
                        listItems={[]}
                    >
                        <Typography
                            variant={'h6'}
                        >
                            Стоимость комплектации 10% от суммы закупки<br/>
                            Закупка производится у рекомендованных поставщиков на специальных условиях
                        </Typography>
                    </ServiceCard>
                </Grid>

                <Box
                    sx={{
                        maxWidth: '1000px',
                        margin: 'auto'
                    }}
                >


                </Box>
            </Box>
        </>
    );
};

export default ProjectTab;