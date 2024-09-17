import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import LocaleText from "../../../../../components/Locale/LocaleText/LocaleText";
import CardItem from "../../../CardItem/CardItem";
import appInfo from "../../../../../store/appInfo";

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


const LandscapeTab = () => {

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
                        'Project'
                    ]}
                />

                <LocaleText
                    useDefault
                    variant={'h5'}
                    localeList={[
                        'Создаем пространство с душой и стилем.',
                        'Project'
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
                                {minimumItems.map((item, index) => (
                                    <React.Fragment key={index}>{item} <br/></React.Fragment>
                                ))}
                            </Typography>


                            <Typography
                                fontSize={'1rem'}
                            >
                                При выполнении проекта на базе архитектурно-строительного проекта скидка 20%
                                Разработка малых архитектурных форм оплачивается отдельно, от 30000 ₽ за один объект
                            </Typography>



                            <Typography
                                fontSize={'1rem'}
                            >
                                Цена зависит от площади участка:
                            </Typography>

                            <Typography
                                fontSize={'1rem'}
                            >
                                10 соток или менее - 8500₽/сотка<br/>
                                более 10 соток - 8000₽/сотка<br/>
                                более 20 соток - 7500₽/сотка<br/>
                                более 50 соток - 7000₽/сотка<br/>
                            </Typography>
                            <Typography
                                fontSize={'1.5rem'}
                                textAlign={'center'}
                            >
                                Срок выполнения от 10 рабочих дней
                            </Typography>

                        </CardItem>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default LandscapeTab;