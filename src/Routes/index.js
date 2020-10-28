import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import BottomNav from '../Components/BottomNav';
import EditPage from '../Pages/EditPage';
import AdminPage from '../Pages/AdminPage';
import LandingPage from '../Pages/LandingPage';
import SignInPage from '../Pages/SignInPage';
import Wizard from '../Pages/Wizard';
import Confirmation from '../Pages/Wizard/confirmation';
import ScrollToTop from './scrollToTop';

export const LANDING = '/';
export const SIGN_IN = '/signin';
export const WIZARD = '/wizard';
export const EDIT = '/edit/:soupID';
export const CONFIRMATION = '/Confirmation/:orderID';
export const ADMIN = '/admin';

const Routes = () => (
    <Router>
        <ScrollToTop />
        <Switch>
            <Route exact path={LANDING} component={LandingPage} />
            <Route path={SIGN_IN} component={SignInPage} />
            <Route path={WIZARD} component={Wizard} />
            <Route path={EDIT} component={EditPage} /> 
            <Route path={CONFIRMATION} component={Confirmation} />
            <Route path={ADMIN} component={AdminPage} />
        </Switch>
        <BottomNav />
    </Router>
);

export default Routes;