import React, {useEffect, useState} from 'react';
import main3 from "../../../../assets/main3.png";
import {Box, Typography} from "@mui/material";

const ImageContainer = () => {

    const [lastScroll, setLastScroll] = useState(0)

    useEffect(() => {

    }, [])

    const handleScroll = (e) => {
        const {scrollTop, scrollHeight, clientHeight} = e.target;

        const pos = scrollTop / (scrollHeight - clientHeight)
        e.target.scrollIntoView({behavior: "smooth"})


        console.log(pos)
    }

    return (
        <Box
            onScroll={() => console.log('scrol')}
            sx={{
                height: '800px',
                backgroundImage: `url(${main3})`,
                backgroundRepeat: 'no-repeat',
                /*position: 'sticky',
                top: 32*/
            }}
        >
            <Box

                onScroll={handleScroll}
                sx={{
                    overflow: 'auto',
                    height: '100%',
                    width: '100%',
                    scrollSnapType: 'y mandatory',

                    '& .MuiBox-root': {
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        scrollSnapAlign: 'start'
                    }
                }}
            >

                <Box
                    sx={{

                    }}
                >
                    <Typography
                        fontSize={{xs: 24, md: 34}}
                        textAlign={'center'}

                    >
                        Мы занимаемся проектированием, дизайном интерьеров, архитектурой индивидуальных жилых домов, уже 17 лет. За это время мы выработали авторские методики работы и алгоритмы принятия решений, что не мало важно как в проектировании так и на этапе реализации проектов, тем более когда работа ведется в режиме сжатых сроков.
                    </Typography>
                </Box>


                <Box
                    sx={{

                    }}
                >
                    <Typography
                        fontSize={{xs: 24, md: 34}}
                        textAlign={'center'}

                    >
                        Помимо проектного бюро, к Вашим услугам художественная мастерская, где вы можете подобрать картины в ваши интерьеры, оформить офис, кафе ресторан или гостиничные номера, уникальными авторскими произведениями. Мы не делаем копии мы создаем искусство.
                    </Typography>
                </Box>

            </Box>

        </Box>

    );
};

export default ImageContainer;