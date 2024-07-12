import React, {useEffect, useState} from 'react';
import ServiceTabSwitch from "../ServiceTabSwitch/ServiceTabSwitch";
import ServiceTab from "../ServiceTab/ServiceTab";

const Services = () => {

    const [tab, setTab] = useState(1);

    return (
        <div
        >
            <ServiceTabSwitch
                tab={tab}
                setTab={setTab}
            />

            <ServiceTab
                tab={tab}
            />

        </div>
    );
};

export default Services;