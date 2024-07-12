import React from 'react';
import {Box} from "@mui/material";

const TabPanel = ({value, index, children, ...props}) => {

    return (
        <Box
            hidden={value !== index}
            sx={{
                height: '1000px'
            }}
            {...props}
        >
            {value === index && {...children}}
        </Box>
    );
};

export default TabPanel;