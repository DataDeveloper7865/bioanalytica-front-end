import logo from './logo.svg';
import './App.css';
import SignInSide from './components/auth/SignInSide';
import SignUp from './components/auth/SignUp';
import Checkout from './components/checkout/Checkout';

function App() {
  return (
    <div>
      {/* <SignInSide /> */}
      {/* <SignUp /> */}
      <Checkout />
    </div>
  );
}

export default App;
