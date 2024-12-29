import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import LocaleText from "../../../../../components/Locale/LocaleText/LocaleText";
import ServiceCard from "../../ServiceCard/ServiceCard";
import CardItem from "../../../CardItem/CardItem";
import locale from "../../../../../store/locale.ts";
import LocaleComponent from "../../../../../newComponents/LocaleComponent/LocaleComponent.tsx";
import {observer} from "mobx-react-lite";


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



const fullItems = {
    "ru": [
        '• Пакет "Стандарт"',
        '•\tСечения, детали\n',
        '•\tФотореалистичное изображение всех помещений с необходимых ракурсов. \n',
        '•\tВедомость комплектации декоративных отделочных материалов, мебели, оборудования, освещения и декора.',
        '•\tВидеообзор'
    ],
    "en-US": [
        '• ',
        '• ',
        '• ',
        '• ',
        '• ',
    ]
}

const standardItems = {
    "ru": [
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
    ],
    "en-US": [
        '• General data',
        '• Master Plan',
        '• Floor plans',
        '• Facades. Specification of facades finishing materials',
        '• Sections',
        '• Roof plan',
        '• Specification of windows and doors',
        '• 3D visualization, facade design',
        '• Foundation plan, secions, specificastion of foundation elements',
        '• Floor structures, layout, reinforcement diagram, specification of elements',
        '• Staircase',
        '• Details, assemblies, specification',
    ]
}

const minItems = {
    "ru": [
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
    ],
    "en-US": [
        '• Identification of needs',
        '• Location of the house on the plot',
        '• Functional zoning of the plot. No detailed design',
        '• Search for a planning solution. 3 options at most',
        '(Each subsequent option costs +15% of the total cost of the project)',
        '• Floor plans with allocated functional areas',
        '• Determination of the building area',
        '• Scheme of planning organization of the land plot',
        '• Floor plans with furniture and equipment and arrangement',
        '• Scheme of space ergonomics',
        '• Color scheme of facades',
        '• Acrhitectural visualization of facades. Photographic image or graphics. 3 options at most',
        '(Each susequent option costs +15% of the total cost of the project)',
        '\n',
        'Depending on the area of the proposed construction, the gradation of the prices is the following:',
        '\n',
        '• up to 100 m² — 500€',
        '• up to 200 m² — 700€',
        '• up to 300 m² — 900€',
        '• up to 400 m² — 1200€',
        '• up to 500 m² — 1500€',
        '\n',
        'If the proposed building are exceeds 500m² - 25€ / m²',
    ]
}


const ArchTab = observer(() => {


    return (
        <>
            <Box>
                <LocaleText
                    useDefault
                    variant={'h3'}
                    fontSize={'2.75rem'}
                    localeList={[
                        'Архитектура - искусство жить',
                        'Architecture - an art of living',
                    ]}
                />
                <LocaleText
                    useDefault
                    variant={'h5'}
                    localeList={[
                        'Игра с пространством по вашим правилам.',
                        'Playing with space by your rules',
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
                            {minItems[locale.currentLocale.name].map((item, index) => (
                                <React.Fragment key={index}>{item} <br/></React.Fragment>
                            ))}
                        </Typography>

                        <Typography
                            variant={'h5'}
                            textAlign={'center'}
                        >
                            <LocaleComponent localeName={"ru"}>
                                Срок выполнения от 10 рабочих дней
                            </LocaleComponent>
                            <LocaleComponent localeName={"en-US"}>
                                Lead time from 10 working days
                            </LocaleComponent>

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
                            {standardItems[locale.currentLocale.name].map((item, index) => (
                                <React.Fragment key={index}>{item} <br/></React.Fragment>
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
                                <LocaleComponent localeName={"ru"}>
                                    Стоимость проекта 1800₽ / м<sup>2</sup><br/>
                                </LocaleComponent>
                                <LocaleComponent localeName={"en-US"}>
                                    The cost of the project is 18€ / m<sup>2</sup><br/>
                                </LocaleComponent>
                            </Typography>

                            <Typography
                                fontSize={'1.2rem'}
                            >
                                <LocaleComponent localeName={"ru"}>

                                    При выполнении проекта на базе эскизного архитектурного решения 1000₽ / м2<br/>
                                </LocaleComponent>
                                <LocaleComponent localeName={"en-US"}>
                                    If the project have a basis as a sketch for architectural solutions - 10€ / m<sup>2</sup>
                                </LocaleComponent>

                            </Typography>

                            <Typography
                                fontSize={'1.2rem'}
                            >
                                <LocaleComponent localeName={"ru"}>
                                    При выполнении данного проекта предоставляется скидка 30% на полный дизайн-проект интерьера и ландшафтный дизайн (вместе)
                                </LocaleComponent>
                                <LocaleComponent localeName={"en-US"}>
                                    While executing this project you have 30% discount on a full interior design project and landscape design
                                </LocaleComponent>

                            </Typography>


                            <Typography
                                variant={'h5'}
                                fontSize={'1.5rem'}
                                textAlign={'center'}
                            >
                                <LocaleComponent localeName={"ru"}>
                                    Срок выполнения от 30 рабочих дней<br/>
                                </LocaleComponent>
                                <LocaleComponent localeName={"en-US"}>
                                    Lead time from 30 working days
                                </LocaleComponent>

                            </Typography>

                        </Box>

                    </CardItem>
                </Grid>



            </Grid>

        </>
    );
});

export default ArchTab;