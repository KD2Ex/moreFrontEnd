import React from 'react';
import ServiceTabSwitchMobile from "../ServiceTabSwitchMobile/ServiceTabSwitchMobile";
import ServiceTabSwitch from "../ServiceTabSwitch/ServiceTabSwitch";
import appInfo from "../../../../store/appInfo";
import ServiceTab from "../ServiceTab/ServiceTab";

const tabs = [
    {value: 0, name: 'Консультация'},
    {value: 1, name: 'Проект'},
    {value: 2, name: 'Коммерция'},
    {value: 3, name: 'Архитектура'},
    {value: 4, name: 'Ландшафт'},
    {value: 5, name: 'Комплексные решения'},
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

    return (
        <>
            {tabSwitch}
            <ServiceTab
                tab={tab}

            />
        </>
    );
};

export default ServiceTabSwitchFactory;