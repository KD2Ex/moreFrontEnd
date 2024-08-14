import React, {useState} from 'react';
import {ToggleButton, ToggleButtonGroup} from "@mui/material";

const ServiceTabSwitch = ({tab, setTab}) => {

    const handleChange = (e, item) => {
        if (!item) return
        setTab(item);
    }



    return (
        <>
            <ToggleButtonGroup
                size={'small'}
                onChange={handleChange}
                value={tab}
                exclusive
                sx={{

                    overflow: 'hidden',
                    position: 'sticky',
                    top: 24,
                    zIndex: 3000,
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 4,
                    mb: 2,
                    '.MuiToggleButton-root': {
                        textTransform: 'none',
                        px: 2,
                        borderRadius: 5,
                        fontSize: 15,

                    },
                    '.Mui-selected': {
                    }
                }}
            >
                <ToggleButton value={1}>Консультация</ToggleButton>
                <ToggleButton value={2}>Проект</ToggleButton>
                <ToggleButton value={3}>Коммерция</ToggleButton>
                <ToggleButton value={4}>Архитектура</ToggleButton>
                <ToggleButton value={5}>Ландшафт</ToggleButton>
                <ToggleButton value={6}>Комплексные решения</ToggleButton>
            </ToggleButtonGroup>


        </>

    );
};

export default ServiceTabSwitch;