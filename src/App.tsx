import React, {  } from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './actions'




function App() {
  const counter = useSelector(state =>state.counter)
  const isLogged = useSelector(state =>state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>          
  <h1>Counter {counter} </h1>

  {isLogged? <h3>Login Info</h3> : ''}
   
    </div>
  );
}

export default App;
