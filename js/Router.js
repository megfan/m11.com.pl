import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import App from "./App.jsx";
import NotFound from './Components/NotFound.js'
import ApartmentDetail from "./Components/ApartmentDetail.js";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/:id" component={ApartmentDetail}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)
export default Router;