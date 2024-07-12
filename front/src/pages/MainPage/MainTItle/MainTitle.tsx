import React from 'react';
import {Box, Grid, Typography} from "@mui/material";

const MainTitle = () => {
    return (
        <>
            <Grid
                item
                lg={4}
                xs={12}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '600px',
                        bgcolor: '#1b1e1f'
                    }}
                >
                </Box>

            </Grid>

            <Grid
                item
                lg={4}
                xs={12}
            >

                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1
                    }}
                >

                    <Typography
                        fontSize={16}
                    >
                        •  Создаем пространства для жизни и бизнеса.<br/>
                    </Typography>

                    <Typography
                        fontSize={16}
                    >
                        •  Комплексно решаем вопрос планировки пространства от фундамента до картины в готовом интерьере, учитываем технические аспекты связанные с назначением помещения и спецификой бытовых и бизнес-процессов.
                    </Typography>

                    <Typography
                        fontSize={16}
                    >
                        •  Ведем авторский надзор и сопровождение проектов, что является залогом не только качественного проекта, но и его успешной реализации.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        height: '40px',
                        my: 2,
                        bgcolor: '#e76565'
                    }}
                >

                </Box>

                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1
                    }}
                >

                    <Typography
                        fontSize={16}
                    >
                        •  Создаем пространства для жизни и бизнеса.<br/>
                    </Typography>

                    <Typography
                        fontSize={16}
                    >
                        •  Комплексно решаем вопрос планировки пространства от фундамента до картины в готовом интерьере, учитываем технические аспекты связанные с назначением помещения и спецификой бытовых и бизнес-процессов.
                    </Typography>

                    <Typography
                        fontSize={16}
                    >
                        •  Ведем авторский надзор и сопровождение проектов, что является залогом не только качественного проекта, но и его успешной реализации.
                    </Typography>
                </Box>

            </Grid>
            <Grid
                item
                lg={4}
                xs={12}
            >

                <Box
                    sx={{
                        width: '100%',
                        height: '600px',
                        bgcolor: '#1b1e1f'
                    }}
                >
                </Box>

            </Grid>
        </>
    );
};

export default MainTitle;