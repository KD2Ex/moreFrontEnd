import React from 'react';
import {Typography} from "@mui/material";
import {observer} from "mobx-react-lite";
import locale from "../../../store/locale";


const LocaleText = observer(({localeList}) => {

    const list = {};

    for(let item of localeList) {
        list[item.locale] = item.value;
    }

    return (
        <div>
            <Typography>
                {list[locale.currentLocale]}
            </Typography>
        </div>
    );
});

export default LocaleText;