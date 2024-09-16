import React from 'react';
import ServiceTabSwitchMobile from "../ServiceTabSwitchMobile/ServiceTabSwitchMobile";
import ServiceTabSwitch from "../ServiceTabSwitch/ServiceTabSwitch";
import appInfo from "../../../../store/appInfo";
import ServiceTab from "../ServiceTab/ServiceTab";

const tabs = [
    {value: 0, name: {ru: 'Консультация', 'en-US': 'Consulting'}},
    {value: 1, name: {ru: 'Проект', 'en-US': 'Project'}},
    {value: 2, name: {ru: 'Коммерция', 'en-US': 'Commercial'}},
    {value: 3, name: {ru: 'Архитектура', 'en-US': 'Architecture'}},
    {value: 4, name: {ru: 'Ландшафт', 'en-US': 'Landscape'}},
    {value: 5, name: {ru: 'Комплексные решения', 'en-US': 'Comprehensive solutions'}},
]

const ServiceTabSwitchFactory = ({tab, setTab, inView}) => {

    let tabSwitch = {}

    if (appInfo.isMobile) {
        tabSwitch = <ServiceTabSwitchMobile
            tabs={tabs}
            tab={tab}
            setTab={setTab}
            visible={inView}
        />
    } else {
        tabSwitch = <ServiceTabSwitch
            tabs={tabs}
            tab={tab}
            setTab={setTab}
        />

    }

    tabSwitch = <ServiceTabSwitchMobile
        tabs={tabs}
        tab={tab}
        setTab={setTab}
    />

    return (
        <>
            {tabSwitch}
            <ServiceTab
                tab={tab}
                setTab={setTab}
            />

        </>
    );
};

export default ServiceTabSwitchFactory;