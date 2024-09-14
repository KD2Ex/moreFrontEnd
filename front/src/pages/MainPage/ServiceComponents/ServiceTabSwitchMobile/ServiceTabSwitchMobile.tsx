import React from 'react';
import {Box, Chip, Tab, Tabs} from "@mui/material";
import './styles.css'

const ServiceTabSwitchMobile = ({tabs, tab, setTab}) => {

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
                my: 2,

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
                        },
                        '&:hover': {
                            backgroundColor: item.value === tab ? 'none' : '#6e6853',
                        }
                    }}
                />
            ))}
        </Box>
    )


};

export default ServiceTabSwitchMobile;