import { createStore } from 'redux'
import authReducer from './reducers/authReducers'

let store = createStore(authReducer)

export default store