import React from 'react';
import ProjectTab from "../ServiceProjectTab/ProjectTab";
import ConsultTab from "../ServiceConsultTab/ConsultTab";
import CommercialTab from "../CommercialTab/CommercialTab";
import {Box, Tabs} from "@mui/material";
import TabPanel from "../TabPanel/TabPanel";


const ServiceTab = ({tab}) => {

   /* switch (tab) {
        case 'qwe': {
            return (
                <ConsultTab/>
            );
        }
        case 'qwe1': {
            return (
                <ProjectTab/>
            );
        }
        case 'qwe2': {
            return (
                <CommercialTab/>
            );
        }
        default: return null;
    }*/

    return (
        <Box>
            <TabPanel value={tab} index={1}><ConsultTab/></TabPanel>
            <TabPanel value={tab} index={2}><ProjectTab/></TabPanel>
            <TabPanel value={tab} index={3}><CommercialTab/></TabPanel>
        </Box>

    )

};

export default ServiceTab;