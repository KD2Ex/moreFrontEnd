﻿import NavBar from "../../components/NavBar/NavBar.tsx";
import {Outlet} from "react-router-dom";

const ParentPage = () => {
    return (
        <div>
            
            <NavBar/>
            
            <Outlet/>
            
        </div>
    );
};

export default ParentPage;