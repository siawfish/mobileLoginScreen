import 'react-native-gesture-handler'
import React, { Component } from 'react'
import ContactList from './ContactList'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'
import { connect } from 'react-redux'

const Stack = createStackNavigator();

class Navigation extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>

                    {this.props.auth ? 
                        <Stack.Screen
                        title="Contacts"
                        options={{
                        headerStyle: {
                            backgroundColor:'#ffcc33',
                            height:100
                        },
                        headerTitleStyle: {
                            fontSize:24,
                            fontWeight:'300'
                        }
                        }}
                        headerRight={()=><Text>Logout</Text>}
                        name="Contacts" 
                        component={ContactList}
                    /> :
                        <>
                        <Stack.Screen
                        options={{
                        headerShown:false
                        }}
                        name="signin" 
                        component={LoginScreen}
                        />
                        <Stack.Screen
                        options={{
                        headerShown:false
                        }}
                        name="signup" 
                        component={SignupScreen}
                        />
                        </>
                    }
                    

                    
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth:state.status
    }
}

export default connect(mapStateToProps)(Navigation)
