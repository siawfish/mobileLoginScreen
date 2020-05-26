import { createStore, applyMiddleware } from 'redux'
import authReducer from './reducers/authReducers'
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  }

const persistedReducer = persistReducer(persistConfig, authReducer)


let store = createStore(persistedReducer, applyMiddleware(thunk))

let persistor = persistStore(store)

export { store, persistor }