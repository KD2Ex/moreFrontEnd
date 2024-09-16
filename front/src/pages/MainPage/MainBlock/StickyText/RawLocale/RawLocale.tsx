import React from 'react';
import {observer} from "mobx-react-lite";
import locale from "../../../../../store/locale";

const RawLocale = observer(({defaultOrder, list}) => {

    const getName = () => {

        switch (locale.currentLocale.name) {
            case 'ru':
                return list[0]
            case 'en-US':
                return list[1]
            default:
                return list[0]

        }
    }


    return (
        <>
            {getName()}
        </>
    );
});

export default RawLocale;