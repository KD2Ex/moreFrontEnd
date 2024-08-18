import React from 'react';
import {Box} from "@mui/material";
import './styles.css'

const Cube3D = () => {

    const handleClick = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return (
        <Box
            onClick={handleClick}
            className={'cube-wrap cubeOpacityAnimation'}
            sx={{
                right: {md: '0%'},
                bottom: {md: '8%'},
            }}
        >
            <Box className={'cube'}
                sx={{
                    width: '1vm',
                    height: '1vm',
                }}
            >
                <div className={'side top'}></div>
                <div className="side bottom"></div>
                <div className="side front"></div>
                <div className="side back"></div>
                <div className="side left"></div>
                <div className="side right"></div>
            </Box>
        </Box>

    );
};

export default Cube3D;