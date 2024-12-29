import React from 'react';
import locale from "../../../store/locale.ts";
import {observer} from "mobx-react-lite";

const EnComponent = observer(({children}) => {

    const isLang = locale.currentLocale.name === "en-US";

    return (
        <>
            {isLang ? children : null}
        </>
    );
});

export default EnComponent;