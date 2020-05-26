import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { signin, signinErr } from '../redux/actions/authActions'


class LoginScreen extends Component {
    constructor(props){
      super(props)
      this.state = {
        email:'',
        password:''
      }
    }
    gotoSignup = () => {
      const { navigation } = this.props
      navigation.navigate('signup')
    }

    handleInputChange = (name, value) => {
      this.setState({
        [name]:value
      })
    }

    onSubmit = () => {
      if(this.state.email==""){
        this.props.signinErr("Enter a valid email")
        return false
      }
      if(this.state.password==""){
        this.props.signinErr("Enter password")
        return false
      }
      this.props.signin(this.state.email, this.state.password)
    }
    render() {
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Log In</Text>
                </View>
                
                <View style={styles.formContainer} >
                    {this.props.authErr ? <Text style={styles.err}>{this.props.authErr}</Text>:null}
                    <View style={styles.inputContainer} >
                    <TextInput style={styles.input} value={this.state.email} onChangeText={(text)=>{this.handleInputChange('email', text)}} placeholder='Email' placeholderTextColor='#777'/>
                    </View>

                    <View style={styles.inputContainer} >
                    <TextInput style={styles.input} value={this.state.password} onChangeText={(text)=>{this.handleInputChange('password', text)}} secureTextEntry={true} placeholder='Password' placeholderTextColor='#777'/>
                    </View>

                    <Text style={styles.forgotPass}>Forget password?</Text>

                    <TouchableOpacity onPress={this.onSubmit} style={styles.button}>
                      <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={this.gotoSignup}>
                      <Text style={styles.signupLink}>Sign up</Text>
                    </TouchableOpacity>
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
  
    inputContainer: {
      marginTop:20,
      borderBottomColor:'#ffcc33',
      borderBottomWidth: 2,
      paddingVertical:10
    },

    input: {
      color:"#ffcc33"
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
    },

    err: {
      color:'red',
      paddingVertical:10,
    }
  });

  const mapDispatchToProps = {
    signin,
    signinErr
  }

  const mapStateToProps = (state) => {
    return {
      authErr:state.err.login,
      authStatus:state.status
    }
  }

  export default connect (mapStateToProps, mapDispatchToProps)(LoginScreen)
