import LoggedReducer from './isLogged'
import CounterReducer from './counter'
import {combineReducers} from 'redux'
import isLogged from './isLogged'

const allReducers = combineReducers({
    counter: CounterReducer,
    isLogged: LoggedReducer
})

export default allReducers;