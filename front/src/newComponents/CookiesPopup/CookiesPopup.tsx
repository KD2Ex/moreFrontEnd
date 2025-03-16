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
                bottom: 16,
                right: 84,
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
                    variant={"h6"}
                >
                    Использование cookies
                </Typography>
                <Typography>
                    Выбирая «Принять все», Вы соглашаетесь с использованием файлов cookie и <a href={"/policy"} target="_blank">политикой в отношении обработки
                    персональных данных</a> на нашем сайте.
                    <br/><br/>
                    Обработка данных осуществляется для интеграции внешнего контента, интеграции потокового контента, а
                    также статистического анализа данных.
                </Typography>

                <Box>
                    <Button
                        onClick={handleReject}
                        variant={"contained"}
                    >
                        Confirm
                    </Button>
                    <Button
                        onClick={handleReject}
                    >
                        Reject
                    </Button>

                </Box>
            </LocaleComponent>
            <LocaleComponent localeName={"en-US"}>
                <Typography
                    variant={"h6"}
                >
                    Cookies
                </Typography>
                <Typography>
                    By
                    Выбирая «Принять все», Вы соглашаетесь с использованием файлов cookie и <a href={"/policy"} target="_blank">политикой в отношении обработки
                    персональных данных</a> на нашем сайте.
                    <br/><br/>
                    Обработка данных осуществляется для интеграции внешнего контента, интеграции потокового контента, а
                    также статистического анализа данных.
                </Typography>

                <Box>
                    <Button
                        onClick={handleReject}
                        variant={"contained"}
                    >
                        Confirm
                    </Button>
                    <Button
                        onClick={handleReject}
                    >
                        Reject
                    </Button>

                </Box>
            </LocaleComponent>

        </Box>
    );
};

export default CookiesPopup;