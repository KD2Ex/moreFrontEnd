import NavBar from "../../components/NavBar/NavBar.tsx";
import {Outlet} from "react-router-dom";
import GlobalAlerts from "../../components/GlobalAlert/GlobalAlerts.tsx";

const ParentPage = () => {
    return (
        <div>
            
            <NavBar/>
            
            <Outlet/>

            
        </div>
    );
};

export default ParentPage;