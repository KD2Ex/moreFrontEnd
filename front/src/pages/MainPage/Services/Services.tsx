import React, {useEffect, useState} from 'react';
import ServiceTabSwitch from "../ServiceTabSwitch/ServiceTabSwitch";
import ServiceTab from "../ServiceTab/ServiceTab";
import {useMediaQuery, useTheme} from "@mui/material";

const Services = () => {

    const [tab, setTab] = useState(1);

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    if (isMobile) return (null)

    return (
        <div
        >
            <ServiceTabSwitch
                tab={tab}
                setTab={setTab}
            />

            <ServiceTab
                tab={tab}
            />

        </div>
    );
};

export default Services;