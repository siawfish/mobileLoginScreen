import 'react-native-gesture-handler'
import React from 'react'
import { store, persistor} from './redux/store'
import { Provider } from 'react-redux'
import Navigation from './screens/navigation'
import { PersistGate } from 'redux-persist/integration/react'


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation/>
      </PersistGate>
    </Provider>
  );
}


