import { createStore, applyMiddleware } from 'redux'
import authReducer from './reducers/authReducers'
import thunk from 'redux-thunk'

let store = createStore(authReducer, applyMiddleware(thunk))

export default store