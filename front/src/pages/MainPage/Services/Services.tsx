import React, {useEffect, useState} from 'react';
import ServiceTabSwitch from "../ServiceTabSwitch/ServiceTabSwitch";
import ServiceTab from "../ServiceTab/ServiceTab";
import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import {useInView} from "react-intersection-observer";

const Services = () => {

    const [tab, setTab] = useState(1);


    const { ref, inView, entry } = useInView({
        threshold: 0
    })
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    //if (isMobile) return (<></>)

    useEffect(() => {

        console.log(inView, entry)

        if (inView) {


            document.documentElement.style.scrollSnapType = 'x'
        } else {

           if (isMobile) return;
           document.documentElement.style.scrollSnapType = 'y mandatory'
        }

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

            <ServiceTabSwitch
                tab={tab}
                setTab={setTab}
                sx={{
                }}
            />

            <ServiceTab
                tab={tab}
            />

        </div>
    );
};

export default Services;