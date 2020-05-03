import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from "../Bootstrap/login.component";
import SignUp from "../Bootstrap/signup.component";
import Navigation from '../Navigation/Navigation'


const Logincomponent = () => {



return (
<div className="fa3 ma6">
  
<Router>
  <div className="App ">
    <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
      <div className="container ">
        <Link className="navbar-brand" to={"/sign-in"}>React Project</Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-in"}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/homepage"}>Homepage</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className="auth-wrapper">
      <div className="auth-inner">
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/homepage" component={Navigation} />
          <Route path="/sign-out" component={Navigation} />

        </Switch>
      </div>
    </div>
  </div>
  </Router>
  </div>
)
}

export default Logincomponent;