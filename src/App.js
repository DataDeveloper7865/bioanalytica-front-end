import logo from './logo.svg';
import './App.css';
import SignInSide from './components/auth/SignInSide';
import SignUp from './components/auth/SignUp';
import Checkout from './components/checkout/Checkout';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div>
      {/* <SignInSide /> */}
      {/* <SignUp /> */}
      {/* <Checkout /> */}
      <Dashboard />
    </div>
  );
}

export default App;
