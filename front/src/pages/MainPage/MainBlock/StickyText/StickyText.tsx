import React from 'react';
import {Box, Typography} from "@mui/material";
import LocaleText from "../../../../components/Locale/LocaleText/LocaleText";

const StickyText = ({text, mockHeight, children}) => {
    return (
        <Box
            sx={{
                position: 'relative',
                top: 0,
                zIndex: 2
            }}
        >
            <Box
                sx={{
                    position: 'sticky',
                    top: 0,
                    width: '100%',
                    height: '100vh',
                }}
            >
                <Box
                    sx={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyItems: 'center',
                        p: {xs: 4, md: 32},
                        zIndex: 2
                    }}
                >

                    <Typography
                        fontSize={{xs: 24, md: 32}}
                        textAlign={'start'}
                        sx={{
                            whiteSpace: "pre-wrap",
                            width: '100%'
                        }}
                    >
                        {text}
                        {children}
                    </Typography>
                </Box>

            </Box>
            <Box
                sx={{
                    //bgcolor: 'white',
                    height: `${mockHeight}px`
                }}
            >

            </Box>
        </Box>
    );
};

export default StickyText;