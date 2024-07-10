import NavBar from "../../components/NavBar/NavBar.tsx";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import technique from "../../store/technique.ts";
import material from "../../store/material.ts";
import LocaleText from "../../components/Locale/LocaleText/LocaleText";
import locale from "../../store/locale";

const ParentPage = () => {

    useEffect(() => {
        (async () => {

            if (!locale.loading) {
                await locale.getLocales();
            }

            if (!technique.loading) {
                await technique.getItems()
            }

            if (!material.loading) {
                await material.getItems()
            }

        })()
    }, [])

    const list = [
        {
            locale: "ru",
            value: "Хеллоу"
        },
        {
            locale: "eu-US",
            value: "HI"
        }
    ]

    return (
        <div>
            
            <NavBar/>

            <LocaleText
                localeList={list}
            />

            <Outlet/>

        </div>
    );
};

export default ParentPage;