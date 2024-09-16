import React from 'react';
import {Box, Paper} from "@mui/material";
import LocaleText from "../../../components/Locale/LocaleText/LocaleText";

const CardItem = ({title, children, height, ...props}) => {

    return (
        <Paper
            sx={{
                borderRadius: 2,
                border: '0px solid',
                borderColor: (theme) => theme.palette.primary.borderLight,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                p: 2,
                gap: 1,
                height: height,
                bgcolor: 'rgba(77,77,77,0.47)',
/*                bgcolor: 'rgb(220,210,192)',
                color: 'rgb(61,61,61)'*/
            }}
            {...props}
            elevation={12}
        >
            <LocaleText
                useDefault
                variant={'h4'}
                fontWeight={'bold'}
                sx={{
                    textAlign: 'center'
                }}
                localeList={[...title]}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'space-between',
                    gap: 1,
                    height: '100%',
                    width: '100%'
                }}
            >
                {children}
            </Box>
        </Paper>
    );
};

export default CardItem;