import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../shared/header/header.connected';
import Footer from '../shared/footer';
import {
    ArticlesRoute,
    HomeRoute,
    InstructionsRoute,
    NotFoundRoute,
    ProductsRoute,
    ProductDetailsRoute,
    DownloadsRoute,
    CheckoutRoute,
    PurchaseRoute
} from '../routes/index';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact component={HomeRoute}/>
                    <Route path="/produse" exact component={ProductsRoute}/>
                    <Route path="/produse/:id" component={ProductDetailsRoute}/>
                    <Route path="/articole" component={ArticlesRoute}/>
                    <Route path="/instructiuni" component={InstructionsRoute}/>
                    <Route path="/downloads" component={DownloadsRoute}/>
                    <Route path="/comanda" exact component={CheckoutRoute}/>
                    <Route path="/comanda/finalizare" exact component={PurchaseRoute}/>
                    <Route component={NotFoundRoute}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
};

export default AppRouter;
