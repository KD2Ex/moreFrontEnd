import React, {useState} from 'react';
import {Typography} from "@mui/material";
import ServiceTabSwitchFactory from "../ServiceTabFactory/ServiceTabSwitchFactory";

const Services = () => {

    const [tab, setTab] = useState(0);

    return (
        <div
        >
            <Typography
                variant={'h3'}
                textAlign={'center'}
                sx={{
                    scrollSnapAlign: "start",

                }}
            >
                Наши услуги
            </Typography>

            <ServiceTabSwitchFactory
                tab={tab}
                setTab={setTab}
            />
        </div>
    );
};

export default Services;