import React, {useState} from 'react';
import {Typography} from "@mui/material";
import ServiceTabSwitchFactory from "../ServiceTabFactory/ServiceTabSwitchFactory";
import RawLocale from "../../MainBlock/StickyText/RawLocale/RawLocale";

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
                    my: 2
                }}
            >
                <RawLocale list={['Наши услуги', 'We provide']}/>
            </Typography>

            <ServiceTabSwitchFactory
                tab={tab}
                setTab={setTab}
            />
        </div>
    );
};

export default Services;