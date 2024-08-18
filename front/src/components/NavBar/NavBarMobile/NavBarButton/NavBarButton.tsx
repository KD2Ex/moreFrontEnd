import React, {useEffect, useMemo, useState} from 'react';
import {Box, Button, IconButton} from "@mui/material";
import {Home} from "@mui/icons-material";
import LocaleText from "../../../Locale/LocaleText/LocaleText";
import CollectionsIcon from '@mui/icons-material/Collections';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import {Link} from "react-router-dom";

const NavBarButton = ({link, filled}) => {


    const icons = useMemo(() => {
        return {
            '/': {
                filled: <Home/>,
                outlined: <HomeOutlinedIcon/>
            },
            '/gallery': {
                filled: <CollectionsIcon/>,
                outlined: <CollectionsOutlinedIcon/>
            },
            '/portfolio': {
                filled: <HomeWorkIcon/>,
                outlined: <HomeWorkOutlinedIcon/>
            },
        }
    }, [])


    return (
        <IconButton
            component={Link}
            to={link.url}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: (theme) => theme.palette.text.primary
                }}
            >
                {filled ? icons[link.url].filled : icons[link.url].outlined}
                <LocaleText
                    fontSize={'.5em'}
                    localeList={link.title}
                />
            </Box>

        </IconButton>
    );
};

export default NavBarButton;