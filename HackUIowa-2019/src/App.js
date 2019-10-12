import React from 'react';
import './App.css';
import {Button, NavLink} from 'reactstrap';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import {createAccount}
const Home = () => (
  <header className="App-header">

    <img src="logo.png" className="App-logo" alt="logo" />
      <div className="Login-buttons">
        <Button color="primary" size="lg" href="/login" block>Login</Button>
        <Button color="secondary" size="lg" href="/mainScreen"block>Guest Login</Button>
      </div>
      <NavLink href="/createAccount" classname="Create-account-link">Create Account</NavLink>
      
  </header>
);

function App() {
  return (
    <Router>
      <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/createAccount" component={CreateAccount} />
      </div>
    </Router>
  );
}

export default App;