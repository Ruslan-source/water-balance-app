import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {paths} from "../constans/route.constants";
import {Menu} from "../Components";
import {Calendar, Home, Profile} from "../Pages";


function Routing() {

    return (
        <Router>
            <Menu />
            <Switch >
                <Route exact path={paths.home}>
                    <Home />
                </Route>
                <Route path={paths.calendar}>
                    <Calendar />
                </Route>
                <Route path={paths.profile}>
                    <Profile />
                </Route>
            </Switch>
        </Router>
    );
}

export {Routing};