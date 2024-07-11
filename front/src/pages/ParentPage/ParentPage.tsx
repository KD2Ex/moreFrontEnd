import NavBar from "../../components/NavBar/NavBar.tsx";
import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import technique from "../../store/technique.ts";
import material from "../../store/material.ts";
import locale from "../../store/locale";
import {observer} from "mobx-react-lite";

const ParentPage = observer(() => {

    const [canLoad, setCanLoad] = useState(false);

    useEffect(() => {
        (async () => {

            await locale.fetchLocaleList();
            await locale.checkLocale();
            await technique.getItems()
            await material.getItems()

        })()

    }, [])

    useEffect(() => {

        if (locale.isLocaleLoaded) {
            setCanLoad(true)
        }

    }, [locale.isLocaleLoaded])

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

    if (canLoad) {
        return (
            <div>

                <NavBar/>


                <Outlet/>

            </div>
        );
    } else {
        return (
            <div>
                Loading
            </div>
        )
    }


});

export default ParentPage;