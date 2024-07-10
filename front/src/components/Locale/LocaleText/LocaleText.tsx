import React from 'react';
import {Typography} from "@mui/material";
import {observer} from "mobx-react-lite";
import locale from "../../../store/locale";


const LocaleText = observer(({localeList, ...props}) => {

    const text = locale.currentLocale
        ? localeList?.find(i => i.locale === locale.currentLocale.name).value
        : localeList[0].value;

    return (
        <Typography {...props}>
            {text}
        </Typography>
    );
});

export default LocaleText;