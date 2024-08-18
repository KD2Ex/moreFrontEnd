import React, {useEffect} from 'react';
import {Box} from "@mui/material";

const TabPanel = ({value, index, children, ...props}) => {

    console.log('TAB PANEL')

    return (
        <Box
            hidden={value !== index}
            sx={{
                height: '1000px'
            }}
            {...props}
        >
            {children}
        </Box>
    );
};

export default TabPanel;