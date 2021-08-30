import React from 'react';
import SignInSide from '../auth/SignInSide';
import SignUp from '../auth/SignUp';
import Checkout from '../checkout/Checkout';
import Dashboard from '../dashboard/Dashboard';
import Pricing from '../pricing/Pricing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function Routes () {

    return (
        <Router>
            <Switch>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/signin">
                    <SignInSide /> 
                </Route>
                <Route path="/checkout">
                    <Checkout />  
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/pricing">
                    <Pricing />
                </Route>
                <Route path="/">
                    <SignInSide /> 
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;