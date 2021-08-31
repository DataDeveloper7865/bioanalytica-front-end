import './App.css';
import SignInSide from './components/auth/SignInSide';
import Routes from './components/routing/Routes';
import React, { useState, useEffect }  from 'react';

function App() {
  const [token, setToken] = useState();

  const MyContext = React.createContext(token);

  useEffect(() => {
    console.log("THE TOKEN IS: ", token)
  }, [token])

  if(!token) {
    return <SignInSide setToken={setToken}/>
  }


  return (
    <MyContext.Provider value={token}>
      <Routes/>
    </MyContext.Provider>
  );
}

export default App;
