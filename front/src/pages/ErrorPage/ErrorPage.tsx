import React from 'react';
import {useRouteError} from "react-router-dom"
import {Box, Button, Typography} from "@mui/material";

const ErrorPage = () => {

    const error = useRouteError();

    console.log(error)

    let result = []

    if (error.hasOwnProperty('status')) {
        result.push(error.statusText)
        result.push(error.status)
        result.push(error.data)
    } else {
        result.push(error);
    }

    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: 2
            }}
        >
            {result.map((i, index) => (
                <Typography
                    key={index}
                    variant={'h5'}
                >
                    {i}
                </Typography>
            ))}

            <Button
                onClick={() => {
                    console.log(window.location.href)
                    window.location.replace('/');
                }}
                variant={'outlined'}
                sx={{
                    borderColor: '#ff4f4f',
                    color: '#ff4f4f',
                    '&:hover': {
                        borderColor: '#ff0000',
                    }
                }}
            >
                Reload page
                {/*icon*/}
            </Button>
        </Box>
    );
};

export default ErrorPage;