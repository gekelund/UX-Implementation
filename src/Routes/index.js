import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from '../Pages/LandingPage';
import SignInPage from '../Pages/SignInPage';

export const LANDING = '/';
export const SIGN_IN = '/signin';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path={LANDING} component={LandingPage} />
            <Route path={SIGN_IN} component={SignInPage} />
        </Switch>
    </Router>
);

export default Routes;