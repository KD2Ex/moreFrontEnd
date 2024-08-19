import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import LocaleText from "../../../../../components/Locale/LocaleText/LocaleText";
import ServiceCard from "../../ServiceCard/ServiceCard";
import CardItem from "../../../CardItem/CardItem";


const minimumItems = [
    '•\tВыявление потребностей\n',
    '•\tРасположение дома на участке\n',
    '• Функциональное зонирование участка. Без детальной проработки.\n',
    '•\tПоиск планировочного решения. Не более 3-х вариантов!',
    '(Каждый последующий +15% от общей стоимости проекта)\n',
    '•\tПоэтажные планы с выделенными функциональными зонами.\n',
    '• Определение площади застройки\n',
    '•\tСхема планировочной организации земельного участка\n',
    '•\tПоэтажные планы с расстановкой мебели и оборудования\n',
    '•\tСхема эргономики пространства\n',
    '•\tЦветовое решение фасадов\n',
    '•\tАрхитектурная визуализация фасадов. Фотографическое изображение или графика не более 3-х вариантов!\n',
    '(Каждый последующий +15% от общей стоимости проекта)\n',
    '\n',
    'В зависимости от площади предполагаемой застройки, градация цен следующая:',
    '\n',
    '•\tдо 100 м² — 50 000 ₽\n',
    '•\tдо 200 м² — 70 000 ₽\t\t\n',
    '•\tдо 300 м² — 90 000 ₽\n',
    '•\tдо 400 м² — 120 000 ₽\n',
    '•\tдо 500 м² — 150 000 ₽\n',
    '\n',
    'Если предполагаемая площадь застройки превышает 500 м2 \t \t250 ₽/м2\n',
]

const standardItems = [
    '•\tОбщие данные\n',
    '•\tГенеральный план\n',
    '•\tПоэтажные планы\n',
    '•\tФасады. Спецификация отделочных материалов фасадов.\n',
    '•\tРазрезы\n',
    '•\tПлан кровли\n',
    '•\tСпецификация окон и дверей\n',
    '•\t3D визуализация, дизайн фасадов\n',
    '•\tПлан фундаментов, сечения, спецификация элементов фундамента.\n',
    '•\tКонструкции перекрытий, схема расположения, схема армирования, спецификация элементов\n',
    '•\tЛестница\n',
    '•\tДетали, узлы, спецификация\n',
]
const fullProjectItems = [
    '• Пакет "Стандарт"',
    '•\tСечения, детали\n',
    '•\tФотореалистичное изображение всех помещений с необходимых ракурсов. \n',
    '•\tВедомость комплектации декоративных отделочных материалов, мебели, оборудования, освещения и декора.',
    '•\tВидеообзор'
]

const ArchTab = () => {


    return (
        <>
            <Box>
                <LocaleText
                    useDefault
                    variant={'h3'}
                    fontSize={'2.75rem'}
                    localeList={[
                        'Архитектура - искусство жить',
                        'En Архитектура - искусство жить',
                    ]}
                />
                <LocaleText
                    useDefault
                    variant={'h5'}
                    localeList={[
                        'Игра с пространством по вашим правилам.',
                        'EN Игра с пространством по вашим правилам.',
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
                    <CardItem
                        height={{xs: 'auto', md: 'auto'}}
                        title={[
                            'Эскизный проект архитектурного решения',
                            'Draft design of the architectural solution'
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
                            variant={'h5'}
                            textAlign={'center'}
                        >
                            Срок выполнения от 10 рабочих дней
                        </Typography>
                    </CardItem>

                </Grid>

                <Grid
                    item
                    md={6}
                    xs={12}
                >
                    <CardItem
                        height={{xs: 'auto', md: '100%'}}
                        title={[
                            'Архитектурно-строительный проект',
                            'Architectural and construction project'
                        ]}
                    >
                        <Typography
                            fontSize={'1rem'}
                        >
                            {standardItems.map((item, index) => (
                                <>{item} <br/></>
                            ))}
                        </Typography>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1
                            }}
                        >
                            <Typography
                                variant={'h5'}
                                fontSize={'1.5rem'}
                                textAlign={'center'}
                            >
                                Стоимость проекта 1800 руб/кв.м.<br/>
                            </Typography>

                            <Typography
                                fontSize={'1.2rem'}
                            >
                                При выполнении проекта на базе эскизного поиска архитектурного решения 1000 ₽/м2<br/>

                            </Typography>

                            <Typography
                                fontSize={'1.2rem'}
                            >
                                При выполнении данного проекта предоставляется скидка 30% на полный дизайн-проект интерьера и ландшафтный дизайн (вместе)

                            </Typography>


                            <Typography
                                variant={'h5'}
                                fontSize={'1.5rem'}
                                textAlign={'center'}
                            >
                                Срок выполнения от 30 рабочих дней<br/>
                            </Typography>

                        </Box>

                    </CardItem>
                </Grid>



            </Grid>

        </>
    );
};

export default ArchTab;