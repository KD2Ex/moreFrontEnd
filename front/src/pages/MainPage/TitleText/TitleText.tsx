import React from 'react';
import {Typography} from "@mui/material";

const TitleText = () => {
    return (
        <Typography
            fontSize={{xs: 24, md: 32}}
            textAlign={'center'}
            sx={{

            }}
        >
            Мы занимаемся проектированием, дизайном интерьеров, архитектурой индивидуальных жилых домов, уже 17 лет. За это время мы выработали авторские методики работы и алгоритмы принятия решений, что не мало важно как в проектировании так и на этапе реализации проектов, тем более когда работа ведется в режиме сжатых сроков.
            <br/><br/>
            Помимо проектного бюро, к Вашим услугам художественная мастерская, где вы можете подобрать картины в ваши интерьеры, оформить офис, кафе ресторан или гостиничные номера, уникальными авторскими произведениями. Мы не делаем копии мы создаем искусство.
        </Typography>
    );
};

export default TitleText;