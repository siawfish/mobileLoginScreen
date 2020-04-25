import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';


export default class LoginScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Log In</Text>
                </View>

                <View style={styles.formContainer} >
                    <View style={styles.input} >
                    <TextInput placeholder='Email' placeholderTextColor='#777'/>
                    </View>

                    <View style={styles.input} >
                    <TextInput placeholder='Password' placeholderTextColor='#777'/>
                    </View>

                    <Text style={styles.forgotPass}>Forget password?</Text>

                    <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>Don't have an account?</Text>
                    <Text style={styles.signupLink}>Sign up</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      paddingHorizontal: 30,
      paddingVertical:150
    },
  
    titleContainer:{
      alignSelf:'center',
    },
  
    title: {
      color: '#ffcc33',
      fontSize: 50,
      fontWeight: '700',
    },
  
    formContainer: {
      marginTop: 50,
    },
  
    input: {
      marginTop:20,
      borderBottomColor:'#ffcc33',
      borderBottomWidth: 2,
      paddingVertical:10
    },
  
    forgotPass: {
      color: '#4287f5',
      alignSelf: 'flex-end',
      paddingVertical: 8
    },
  
    button: {
      backgroundColor:'#ffcc33',
      borderRadius: 25,
      textAlign: 'center',
      marginTop: 40
    },
  
    buttonText: {
      paddingVertical: 15,
      textAlign: 'center',
      fontSize: 18,
      fontWeight:'900'
    },
  
    signupContainer: {
      alignSelf: 'center',
      marginTop: 50,
      flexDirection: 'row'
    },
  
    signupText: {
      color: '#aaa'
    },
  
    signupLink: {
      color: '#ffcc33',
      marginLeft: 10
    }
  });
