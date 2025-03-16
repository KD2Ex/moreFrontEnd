import React from 'react';
import {Box} from "@mui/material";

const FilePage = () => {
    return (
        <Box
            sx={{
                height: "99vh",
            }}
        >
            <embed src={"../../policy.pdf"} width="100%" height="100%" type={"application/pdf"}/>
        </Box>
    );
};

export default FilePage;