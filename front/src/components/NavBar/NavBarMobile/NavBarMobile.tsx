import React, {useEffect} from 'react';
import {Box, Button} from "@mui/material";
import LocaleText from "../../Locale/LocaleText/LocaleText";
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import {Home} from "@mui/icons-material";
import NavBarButton from "./NavBarButton/NavBarButton";
import { useLocation } from 'react-router-dom';

const NavBarMobile = ({pages}) => {
    let location = useLocation();

    useEffect(() => {

        console.log(location)

    }, [location])

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 0,
                bgcolor: 'black',
                height: 56,
                zIndex: 3500,
                width: '100%',
            }}
        >
            <Box
                sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 4,
                        flex: 1
                    }}
                >
                    {pages.map((item, index) => (
                        <NavBarButton
                            key={index}
                            link={item}
                            filled={item.url === location.pathname}
                        >
                            <Home/>
                        </NavBarButton>
                    ))}
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        right: 0
                    }}
                >
                    <Button>
                        ...
                    </Button>
                </Box>
            </Box>


        </Box>
    );
};

export default NavBarMobile;