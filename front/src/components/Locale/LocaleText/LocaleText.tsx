import React, {FC} from 'react';
import {Typography} from "@mui/material";
import {observer} from "mobx-react-lite";
import locale from "../../../store/locale";

interface LocaleItem {
    locale: string,
    value: string
}

interface LocaleTextProps {
    localeList: LocaleItem[]
}


const LocaleText: FC<LocaleTextProps> = observer(({localeList, children, childBefore, ...props} : LocaleTextProps) => {

    const text = locale.currentLocale
        ? localeList?.find(i => i.locale === locale.currentLocale.name).value
        : localeList[0].value;

    const result = childBefore ? [children, text] : [text, children]

    return (
        <Typography {...props}>
            {result}
        </Typography>
    );
});

export default LocaleText;