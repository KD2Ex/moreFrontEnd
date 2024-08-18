import React from 'react';
import {Tab, Tabs} from "@mui/material";

const ServiceTabSwitchMobile = ({tabs, tab, setTab, visible}) => {

    const handleChange = (event, value) => {
        setTab(value)
    }

    return (
        <Tabs
            value={tab}
            onChange={handleChange}
            variant={'scrollable'}
            scrollButtons={'auto'}
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '250px',
                mb: 1,
                ml: 1,
                zIndex: 3000,
                opacity: visible ? 1 : 0,
                transition: 'opacity 500ms linear',
                backgroundColor: (theme) => theme.palette.background.default,
            }}
        >
            {tabs.map((item, index) => (
                <Tab
                    label={item.name}
                    sx={{
                        textTransform: 'none'
                    }}
                />
            ))}
        </Tabs>
    );
};

export default ServiceTabSwitchMobile;