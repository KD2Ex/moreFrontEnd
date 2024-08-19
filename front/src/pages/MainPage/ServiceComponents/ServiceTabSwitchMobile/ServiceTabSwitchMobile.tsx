import React from 'react';
import {Box, Chip, Tab, Tabs} from "@mui/material";
import './styles.css'

const ServiceTabSwitchMobile = ({tabs, tab, setTab, visible}) => {



    const handleChange = (event, value) => {
        setTab(value)
    }

    const handleClick = (e) => {
        const newTab = +e.target.ariaLabel

        setTab(newTab)
    }

    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                overflow: 'auto',
                alignItems: 'center',
                px: 0,
                height: 36,
                gap: 1,
                my: 2
            }}
            className={'tabs'}
        >
            {tabs.map((item, index) => (
                <Chip
                    clickable={false}
                    key={index}
                    aria-label={item.value}
                    onClick={handleClick}
                    label={item.name}
                    sx={{
                        color: (theme) => item.value === tab ? 'black' : theme.palette.text.primary,
                        bgcolor: (theme) => item.value === tab ? theme.palette.text.primary : theme.palette.background.light,
                        '& span': {
                            pointerEvents: 'none'
                        }
                    }}
                />
            ))}
        </Box>
    )

    return (
        <Tabs
            value={tab}
            onChange={handleChange}
            variant={'scrollable'}
            scrollButtons={'auto'}
            sx={{
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