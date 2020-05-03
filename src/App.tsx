import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation'
import LoginPage from './components/FinalComponents/logincomponents'




function App() {
  return (
  <div className="App">

  <LoginPage/>
    
  
    </div>
  );
  }

export default App;