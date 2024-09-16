import React from 'react';
import {Box, Chip, Tab, Tabs} from "@mui/material";
import './styles.css'
import {observer} from "mobx-react-lite";
import locale from "../../../../store/locale";

const ServiceTabSwitchMobile = observer(({tabs, tab, setTab}) => {

    const handleClick = (e) => {
        const newTab = +e.target.ariaLabel

        setTab(newTab)
    }

    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 0,
                    py: 2,
                    gap: 1,
                    flexWrap: 'wrap',
                }}
                className={'tabs'}
            >
                {tabs.map((item, index) => (
                    <Chip
                        clickable={false}
                        key={index}
                        aria-label={item.value}
                        onClick={handleClick}
                        label={item.name[locale.currentLocale.name]}
                        sx={{
                            px: {xs: 0, md: 4},
                            py: 2,
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
        </Box>

    )


});

export default ServiceTabSwitchMobile;