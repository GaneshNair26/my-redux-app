
import React, { useState, useEffect, Component } from 'react';
import { useHistory } from 'react-router-dom';
import Navigation from '../Navigation/Navigation'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const Login  = () => {

    const [username, setUsername] = useState('');
    const [onRouteChange, setonRouteChange] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [helperText, setHelperText] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if (username.trim() && password.trim()) {
          setIsButtonDisabled(false);
        } else {
          setIsButtonDisabled(true);
        }
      }, [username, password]);



      const handleLogin = () => {
        if (username === 'pass@gmail.com' && password === 'pass') {

          setHelperText('Login Successfully');

        } else {
          setError(true);
          setHelperText('Incorrect username or password')
        }
      }
    ;
      
    return (
        <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"
                    onChange={(e)=>setUsername(e.target.value)}  />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={()=>handleLogin()}>
                    Submit
                </button>
                
            </form>
        );
    }



export default Login ;