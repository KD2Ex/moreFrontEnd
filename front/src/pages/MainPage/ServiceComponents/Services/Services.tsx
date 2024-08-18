import React, {useEffect, useState} from 'react';
import ServiceTabSwitch from "../ServiceTabSwitch/ServiceTabSwitch";
import ServiceTab from "../ServiceTab/ServiceTab";
import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import {useInView} from "react-intersection-observer";
import ServiceTabSwitchFactory from "../ServiceTabFactory/ServiceTabSwitchFactory";

const Services = () => {

    const [tab, setTab] = useState(0);


    const { ref, inView, entry } = useInView({
        threshold: 0
    })
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));


    useEffect(() => {


    }, [inView, entry])

    return (
        <div
            ref={ref}
            style={{


            }}
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
                inView={inView}
            />

 {/*           <ServiceTabSwitch
                tab={tab}
                setTab={setTab}
                sx={{
                }}
            />

            <ServiceTab
                tab={tab}
            />
*/}
        </div>
    );
};

export default Services;