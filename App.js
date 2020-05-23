import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './LoginScreen'
import ContactList from './ContactList'
import SignupScreen from './SignupScreen'
import ExploreScreen from './ExploreScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown:false
          }}
          name="signup" 
          component={SignupScreen}
        />
        <Stack.Screen
          options={{
            headerShown:false
          }}
          name="signin" 
          component={LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


