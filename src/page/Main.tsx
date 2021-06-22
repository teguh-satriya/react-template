import React, { useEffect, useState } from "react";
import { Link, Router,  } from "routing/Routing";
import SwitchRoute from "routing/SwitchRoute";
import RouteList from "./RouteList";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "react-router";
import TopNavigationComponent from "components/TopNavigationComponent";

export default observer(() => {
    const [loading, setLoading] = useState<boolean>(false);
    const [token, setToken] = useState<any>(null);

    useEffect(() => {
    }, []);

    return (
        <Router>
            <TopNavigationComponent />
            <div>
                <SwitchRoute routes={RouteList} />
            </div>
        </Router>
    );
});