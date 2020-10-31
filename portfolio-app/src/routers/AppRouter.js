import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PortfolioHomePage from '../components/PortfolioHomePage';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioInfoPage from '../components/PortfolioInfoPage';
import ContactPage from '../components/Contact';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={PortfolioHomePage} exact={true} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/portfolio" component={PortfolioPage} exact={true} />
                <Route path="/portfolio/:id" component={PortfolioInfoPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>

    </BrowserRouter>
);

export default AppRouter;