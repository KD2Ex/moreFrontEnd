import NavBar from "../../components/NavBar/NavBar.tsx";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import technique from "../../store/technique.ts";
import material from "../../store/material.ts";

const ParentPage = () => {

    useEffect(() => {
        (async () => {

            if (!technique.loading) {
                await technique.getItems()
            }

            if (!material.loading) {
                await material.getItems()
            }

        })()
    }, [])
    
    return (
        <div>
            
            <NavBar/>
            
            <Outlet/>

            
        </div>
    );
};

export default ParentPage;