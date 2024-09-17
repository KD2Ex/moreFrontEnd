import React from 'react';
import {Grid as GridLoader} from "react-loader-spinner";
import {Box} from "@mui/material";

const LoadingAnim = () => {

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                bgcolor: 'rgba(0,0,0,0.49)',
                zIndex: 4000
            }}
        >
            <GridLoader
                radius={12}
                color={'white'}
                wrapperStyle={{
                    margin: 'auto',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >

            </GridLoader>
        </Box>

    );
};

export default LoadingAnim;