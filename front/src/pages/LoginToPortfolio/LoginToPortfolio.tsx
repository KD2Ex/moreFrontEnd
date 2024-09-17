import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {observer} from "mobx-react-lite";
import appInfo from "../../store/appInfo";
import alert from "../../store/alert";
import {useNavigate} from 'react-router-dom'

const LoginToPortfolio = observer(() => {

    const [login, setLogin] = useState('Iwanttosee')
    const [password, setPassword] = useState('yourproject')

    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: 'flex',
                height: '100vh'
            }}
        >

            <Box
                sx={{
                    margin: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: 2,

                }}
            >
                <TextField
                    label={'Enter Login'}
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />

                <TextField
                    type={'password'}
                    label={'Enter Password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                    variant={"contained"}
                    onClick={async () => {
                        if (login == 'Iwanttosee' && password == "yourproject") {
                            appInfo.activateTestMode();
                            window.location.pathname = '/gallery';
                            navigate('/')
                        } else {
                            alert.openAlert("look password at github.com", "error")
                        }
                    }}
                    sx={{
                        width: '100%',
                    }}
                >
                    Login
                </Button>
            </Box>

        </Box>
    );
});

export default LoginToPortfolio;