import React from 'react';
import {Box} from "@mui/material";
import LocaleText from "../../../components/Locale/LocaleText/LocaleText";

const CardItem = ({title, children, height, ...props}) => {

    return (
        <Box
            sx={{
                borderRadius: 2,
                border: '2px solid',
                borderColor: (theme) => theme.palette.primary.borderLight,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                p: 2,
                height: height
            }}
            {...props}
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
                    height: '100%'
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default CardItem;