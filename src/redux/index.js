import { createStore, combineReducers, applyMiddleware } from 'redux'
import { userReducer } from './reducer/user_reducer'
import logger from 'redux-logger'
import {thunk}  from 'redux-thunk'
const rootReducer = combineReducers({
    user: userReducer
})
const middlewares = [logger, thunk]
const store = createStore(rootReducer, applyMiddleware(thunk))
export default store