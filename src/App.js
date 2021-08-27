import logo from './logo.svg';
import './App.css';
import SignInSide from './components/auth/SignInSide';
import SignUp from './components/auth/SignUp';
import Checkout from './components/checkout/Checkout';
import Dashboard from './components/dashboard/Dashboard';
import Pricing from './components/pricing/Pricing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
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
      </Switch>
    </Router>
  );
}

export default App;
