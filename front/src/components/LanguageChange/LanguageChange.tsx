import React, {useEffect, useState} from 'react';
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import {observer} from "mobx-react-lite";
import locale from "../../store/locale";

const LanguageChange = observer(() => {

    const [lang, setLang] = useState('ru')

    const handleChange = (e, newLang) => {

        console.log(newLang)
        setLang(newLang);

        locale.setLocale(newLang, true)
    }

    useEffect(() => {

        setLang(locale.currentLocale.name)

    }, [locale.currentLocale.name])

    return (
        <ToggleButtonGroup
            size={'small'}
            variant={'outlined'}
            value={lang}
            onChange={handleChange}
            exclusive
        >
            <ToggleButton value={'ru'}>RU</ToggleButton>
            <ToggleButton value={'en-US'}>EN</ToggleButton>
        </ToggleButtonGroup>
    );
});

export default LanguageChange;