import 'react-native-gesture-handler'
import React from 'react'
import store from './redux/store'
import { Provider } from 'react-redux'
import Navigation from './screens/navigation'


export default function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}


