import {Box, Button, Popover, Typography} from "@mui/material";
import React, {useEffect} from "react";
import LocaleText from "../../components/Locale/LocaleText/LocaleText.tsx";
import LocaleComponent from "../LocaleComponent/LocaleComponent.tsx";

const CookiesPopup = () => {

    const [open, setOpen] = React.useState(window.location.pathname != "/policy");

    useEffect(() => {
        console.log(window.location.pathname);
    }, []);

    const handleReject = () => {
        setOpen(false);
        localStorage.setItem("policyShown", "1");
    }

    return (
        <Box
            sx={{
                position: "fixed",
                bottom: 64,
                left: 84,
                zIndex: 4000,
                //border: "1px  solid",
                borderRadius: 2,
                padding: 1,
                display: open ? "flex" : "none",
                flexDirection: "column",
                //justifyContent: "space-between",
                backgroundColor: "#101010",
                maxWidth: 400,
            }}
        >
            <LocaleComponent localeName={"ru"}>
                <Typography
                    fontSize={14}
                >
                    Использование cookies
                </Typography>
                <Typography fontSize={12}>
                    Выбирая «Принять все», Вы соглашаетесь с использованием файлов cookie и <a href={"/policy"} target="_blank">политикой в отношении обработки
                    персональных данных</a> на нашем сайте.
                    <br/><br/>
                    Обработка данных осуществляется для интеграции внешнего контента, интеграции потокового контента, а
                    также статистического анализа данных.<br/><br/>
                    Файлы cookie хранятся в Вашем браузере. В настройках браузера Вы можете ограничить или вовсе отключить использование файлов cookie.
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        alignSelf: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        mt: 1,
                        gap: 2
                    }}
                >
                    <Button
                        size={"small"}
                        onClick={handleReject}
                        variant={"contained"}
                        sx={{
                            bgcolor: "white",
                            color: "black",
                            fontSize: 14
                        }}
                    >
                        Принять
                    </Button>
                    <Button
                        size={"small"}
                        onClick={handleReject}
                        sx={{
                            fontSize: 14
                        }}
                    >
                        Отклонить
                    </Button>

                </Box>
            </LocaleComponent>
            <LocaleComponent localeName={"en-US"}>
                <Typography
                    fontSize={14}
                >
                    Cookies
                </Typography>
                <Typography fontSize={12}>
                    By clicking "Accept", you consent to our use of cookies and agree with our
                    <a href={"/policy"} target="_blank">Privacy policy</a>.
                    <br/><br/>
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        alignSelf: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        mt: 1,
                        gap: 2
                    }}
                >
                    <Button
                        size="small"
                        onClick={handleReject}
                        variant={"contained"}
                        sx={{
                            bgcolor: "white",
                            color: "black",
                            fontSize: 14
                        }}
                    >
                        Accept
                    </Button>
                    <Button
                        size={"small"}
                        onClick={handleReject}
                        sx={{
                            fontSize: 14
                        }}
                    >
                        Reject
                    </Button>

                </Box>
            </LocaleComponent>

        </Box>
    );
};

export default CookiesPopup;