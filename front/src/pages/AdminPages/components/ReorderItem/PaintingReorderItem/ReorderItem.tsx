import React, {useRef, useState} from 'react';
import {Box} from "@mui/material";
import appInfo from "../../../../../store/appInfo";



const ReorderItem = ({item, ...props}) => {

    return (
        <Box
            {...props}
            sx={{
                height: 60,
                borderRadius: 8,
                width: '100%',
                bgcolor: '#262323',
                py: 1,
                px: 3,
                display: 'flex',
                gap: 1,
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <Box>
                {item.id} {"   "}
                {item.title.ru}
            </Box>

            <Box
                sx={{
                    height: '100%',
                }}
            >
                <Box
                    component={'img'}
                    src={appInfo.url + item.images[0].name}
                    sx={{
                        height: '100%',
                        objectFit: 'contain'
                    }}
                >

                </Box>
            </Box>

            <Box>
                {item.order}
            </Box>
        </Box>
    );
};

export default ReorderItem;