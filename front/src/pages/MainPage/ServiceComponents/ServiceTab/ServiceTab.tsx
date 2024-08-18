import React from 'react';
import ProjectTab from "../ServiceProjectTab/ProjectTab";
import ConsultTab from "../ServiceConsultTab/ConsultTab";
import CommercialTab from "../CommercialTab/CommercialTab";
import {Box, Tabs, useMediaQuery, useTheme} from "@mui/material";
import TabPanel from "../../TabPanel/TabPanel";


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

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));


    return (
        <Box
            sx={{

            }}
        >
            <TabPanel value={tab} index={0}><ConsultTab/></TabPanel>
            <TabPanel value={tab} index={1}><ProjectTab/></TabPanel>
            <TabPanel value={tab} index={2}><CommercialTab/></TabPanel>
        </Box>

    )

};

export default ServiceTab;