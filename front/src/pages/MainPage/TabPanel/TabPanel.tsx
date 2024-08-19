import React, {useEffect} from 'react';
import {Box} from "@mui/material";

const TabPanel = ({value, index, children, ...props}) => {

    console.log('TAB PANEL')

    return (
        <>
            <Box
                hidden={value !== index}
                sx={{
                }}
                {...props}
            >
                {children}
                {/*<Box
                    sx={{
                        height: '70px'
                    }}
                >

                </Box>*/}
            </Box>

        </>

    );
};

export default TabPanel;