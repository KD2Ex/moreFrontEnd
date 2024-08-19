import React, {useEffect} from 'react';
import ProjectTab from "../Tabs/ServiceProjectTab/ProjectTab";
import ConsultTab from "../Tabs/ServiceConsultTab/ConsultTab";
import CommercialTab from "../Tabs/CommercialTab/CommercialTab";
import {Box, Tabs, useMediaQuery, useTheme} from "@mui/material";
import TabPanel from "../../TabPanel/TabPanel";
import {useSwipeable} from "react-swipeable";
import actionDialog from "../../../../components/ActionDialog/ActionDialog";
import {Architecture} from "@mui/icons-material";
import ArchTab from "../Tabs/ArchTab/ArchTab";
import LandscapeTab from "../Tabs/LandscapeTab/LandscapeTab";
import ComplexDecisionTab from "../Tabs/ComplexDecisionTab/ComplexDecisionTab";


const ServiceTab = ({tab, setTab}) => {

    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            //console.log("Swipe", eventData)

            const dir = eventData.dir;

            if (dir === "Left") {
                if (tab === 5) return;
                setTab(prev => prev + 1)
            }

            if (dir === "Right") {
                if (tab === 0) return;
                setTab(prev => prev - 1)
            }
        }
    })

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

    useEffect(() => {

        console.log('service tab changed')

    }, [tab])

    // different bg images for different tabs

    return (
        <Box
            {...handlers}
            sx={{

            }}
        >
            <TabPanel value={tab} index={0}><ConsultTab/></TabPanel>
            <TabPanel value={tab} index={1}><ProjectTab/></TabPanel>
            <TabPanel value={tab} index={2}><CommercialTab/></TabPanel>
            <TabPanel value={tab} index={3}><ArchTab/></TabPanel>
            <TabPanel value={tab} index={4}><LandscapeTab/></TabPanel>
            <TabPanel value={tab} index={5}><ComplexDecisionTab/></TabPanel>
        </Box>

    )

};

export default ServiceTab;