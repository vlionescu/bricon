import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../shared/header';
import {
    ArticlesRoute,
    HomeRoute,
    InstructionsRoute,
    NotFoundRoute,
    ProductsRoute,
    SoftwareRoute,
} from '../routes/index';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact component={HomeRoute}/>
                    <Route path="/produse" component={ProductsRoute}/>
                    <Route path="/articole" component={ArticlesRoute}/>
                    <Route path="/instructiuni" component={InstructionsRoute}/>
                    <Route path="/software" component={SoftwareRoute}/>
                    <Route component={NotFoundRoute}/>
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
