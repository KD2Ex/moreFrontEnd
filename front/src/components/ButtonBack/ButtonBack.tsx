import React from 'react';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom"
import LocaleText from "../Locale/LocaleText/LocaleText";

const ButtonBack = ({...props}) => {

    const navigate = useNavigate();

    return (
        <Button
            {...props}
            onClick={() => {
                navigate(-1)
            }}
        >
            <LocaleText
                useDefault
                localeList={[
                    'Вернуться',
                    'Back'
                ]}
            />
        </Button>
    );
};

export default ButtonBack;