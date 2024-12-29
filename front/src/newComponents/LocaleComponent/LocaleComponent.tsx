import React, {FC, ReactElement} from 'react';
import locale from "../../store/locale.ts";
import {observer} from "mobx-react-lite";

interface LocaleComponentProps {
    localeName: string,
    children: ReactElement | ReactElement[]
}
const LocaleComponent: FC<LocaleComponentProps> = observer(({localeName, children}) => {

    const isLang = locale.currentLocale.name === localeName
    return (
        <>
            {
                   isLang ? children : null
            }
        </>
    );
});

export default LocaleComponent;