import React, {useEffect, useState} from 'react';
import {Box, Button, Popover} from "@mui/material";
import {Home} from "@mui/icons-material";
import NavBarButton from "./NavBarButton/NavBarButton";
import { useLocation } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LanguageChange from "../../LanguageChange/LanguageChange";

const NavBarMobile = ({pages}) => {

    const [anchor, setAnchor] = useState(null)

    const handleClick = (e) => {
        setAnchor(e.currentTarget)
    }

    const handleClose = () => {
        setAnchor(null)
    }

    const open = Boolean(anchor);

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
                    <Button
                        onClick={handleClick}
                    >
                        <MoreVertIcon/>
                    </Button>

                    <Popover
                        open={open}
                        anchorEl={anchor}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        sx={{
                        }}
                    >
                        <Box
                            sx={{
                                p: 2
                            }}
                        >
                            <LanguageChange/>
                        </Box>
                    </Popover>
                </Box>
            </Box>


        </Box>
    );
};

export default NavBarMobile;