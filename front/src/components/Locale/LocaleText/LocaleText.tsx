import React, {FC, useEffect, useState} from 'react';
import {Typography} from "@mui/material";
import {observer} from "mobx-react-lite";
import locale from "../../../store/locale";

interface LocaleItem {
    locale: string,
    value: string
}

interface LocaleTextProps {
    localeList: LocaleItem[] | string[],
    childBefore?: boolean,
    useDefault?: boolean
}


const LocaleText: FC<LocaleTextProps> = observer(({localeList, childBefore, useDefault, children, ...props} : LocaleTextProps) => {

    const [text, setText] = useState()

    useEffect(() => {

        if (useDefault) {
            const id = locale.currentLocale.id === 1 ? 0 : 1;
            setText(localeList[id])
        } else {
            setText(locale.currentLocale
                ? localeList?.find(i => i.locale === locale.currentLocale.name).value
                : localeList[0].value)
        }

        console.log('localeText')

    }, [locale.currentLocale])


    return (
        <Typography {...props}>
            {childBefore ? [children, text] : [text, children]}
        </Typography>
    );
});

export default LocaleText;