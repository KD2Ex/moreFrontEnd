import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import LocaleText from "../../../../../components/Locale/LocaleText/LocaleText";
import CardItem from "../../../CardItem/CardItem";
import appInfo from "../../../../../store/appInfo";
import locale from "../../../../../store/locale.ts";
import {observer} from "mobx-react-lite";
import LocaleComponent from "../../../../../newComponents/LocaleComponent/LocaleComponent.tsx";

const minimumItems = [
    '•\tСхема функционального зонирования участка\n',
    '•\tДендроплан\n',
    '•\tПлан размещения малых архитектурных форм на участке\n',
    '•\tСхема полива\n',
    '•\tСхема ландшафтного освещения\n',
    '•\tСхема мощения дорожек\n',
    '•\tЭкспликация растений\n',
    '•\t3D визуализация \n',
]

const minItems = {
    "ru": [
        '•\tСхема функционального зонирования участка\n',
        '•\tДендроплан\n',
        '•\tПлан размещения малых архитектурных форм на участке\n',
        '•\tСхема полива\n',
        '•\tСхема ландшафтного освещения\n',
        '•\tСхема мощения дорожек\n',
        '•\tЭкспликация растений\n',
        '•\t3D визуализация \n',
    ],
    "en-US": [
        '• Scheme of functional zoning of the site',
        '• Dendroplan',
        '• Layout of small architectural forms on the site',
        '• Irrigation scheme',
        '• Landscape lightning scheme',
        '• Scheme of paving of paths',
        '• Explication of plants',
        '• 3D visualization',
    ]
}

const LandscapeTab = observer(() => {

    return (
        <>
            <Box
            >
                <LocaleText
                    useDefault
                    variant={'h3'}
                    fontSize={'2.75rem'}
                    localeList={[
                        'Гармония природы и архитектуры.',
                        'The harmony of nature and architecture'
                    ]}
                />

                <LocaleText
                    useDefault
                    variant={'h5'}
                    localeList={[
                        'Создаем пространство с душой и стилем.',
                        'We create space with style and soul'
                    ]}
                    sx={{
                        my: 2
                    }}
                />

                <Grid
                    container
                    spacing={2}
                >

                    {!appInfo.isMobile && (
                        <Grid
                            item
                            md={3}
                        >

                        </Grid>
                    )}


                    <Grid
                        item
                        md={6}
                        xs={12}
                    >
                        <CardItem
                            height={{xs: 'auto', md: 'auto'}}
                            title={[
                                'Ландшафт',
                                'Landscape'
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
                                fontSize={'1rem'}
                            >
                                <LocaleComponent localeName={"ru"}>
                                    При выполнении проекта на базе архитектурно-строительного проекта скидка 20%
                                    Разработка малых архитектурных форм оплачивается отдельно, от 30000 ₽ за один объект
                                </LocaleComponent>
                                <LocaleComponent localeName={"en-US"}>
                                    If the project is based on the architectural and construction project you will have 20% discount
                                    Development of small architectural forms is paid separately, cost starts from 300 per object
                                </LocaleComponent>
                            </Typography>

                            <Typography
                                fontSize={'1rem'}
                            >
                                <LocaleComponent localeName={"ru"}>
                                    Цена зависит от площади участка:
                                </LocaleComponent>
                                <LocaleComponent localeName={"en-US"}>
                                    The price depends on the area of the plot:
                                </LocaleComponent>
                            </Typography>

                            <Typography
                                fontSize={'1rem'}
                            >
                                <LocaleComponent localeName={"ru"}>
                                    10 соток или менее - 8500₽/сотка<br/>
                                    более 10 соток - 8000₽/сотка<br/>
                                    более 20 соток - 7500₽/сотка<br/>
                                    более 50 соток - 7000₽/сотка<br/>
                                </LocaleComponent>
                                <LocaleComponent localeName={"en-US"}>
                                    0.1 of hectare or less - 85€ / 100 m<sup>2</sup><br/>
                                    more than 0.1 of hectare - 80€ / 100 m<sup>2</sup><br/>
                                    more than 0.2 of hectare - 75€ / 100 m<sup>2</sup><br/>
                                    more than 0.5 of hectare - 70€ / 100 m<sup>2</sup><br/>
                                </LocaleComponent>
                            </Typography>
                            <Typography
                                fontSize={'1.5rem'}
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
                </Grid>
            </Box>
        </>
    );
});

export default LandscapeTab;