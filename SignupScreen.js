import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'

export default class SignupScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            email:'',
            password:'',
            conPassword:''
        }
    }

    handleInputChange = (name, value) => {
        this.setState({
            [name]:value
        })
    }

    gotoLogin = () => {
        const { navigation } = this.props
        navigation.navigate('signin')
    }


    render() {
        return (
            <ScrollView style={styles.container}>

                <View style={styles.seconContainer}>
                    
                    <View  style={styles.titleContainer}>
                        <Text style={styles.title}>Sign Up</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <View style={styles.inputContainer}>
                            <TextInput onChangeText={(text)=>{this.handleInputChange('username', text)}} value={this.state.username} style={styles.input} placeholder='Username' placeholderTextColor='#999' selectionColor="#ffcc33"/>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput onChangeText={(text)=>{this.handleInputChange('email', text)}} value={this.state.email} style={styles.input} placeholder='Email' placeholderTextColor='#999' selectionColor="#ffcc33"/>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput onChangeText={(text)=>{this.handleInputChange('password', text)}} value={this.state.password} style={styles.input} placeholder='Password' placeholderTextColor='#999' selectionColor="#ffcc33"/>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput onChangeText={(text)=>{this.handleInputChange('conPassword', text)}} value={this.state.conPassword} style={styles.input} placeholder='Confirm Password' placeholderTextColor='#999' selectionColor="#ffcc33"/>
                        </View>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.signInContainer}>
                        <Text style={styles.signInText}>Already have an account?</Text>
                        <TouchableOpacity onPress={this.gotoLogin}>
                            <Text style={styles.signInLink}>Sign In</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#ffcc33',
        flex: 1,
    },

    seconContainer: {
        backgroundColor:'#000',
        flex: 0.65,
        marginTop:150,
        marginHorizontal:30,
        borderRadius:25,
        shadowColor: '#222422',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,  
        elevation: 5
    },

    title: {
        color: '#ffcc33',
        fontSize: 50
    },

    titleContainer: {
        marginVertical:30,
        marginHorizontal:30,
    },

    formContainer: {
        marginHorizontal: 30
    },

    inputContainer: {
        marginVertical:10,
        borderBottomColor: '#ffcc33',
        borderBottomWidth: 3,
        paddingVertical:15
    },

    input: {
        color:"#ffcc33"
    },

    button: {
        backgroundColor:'#ffcc33',
        paddingVertical:10,
        borderRadius:8
    },

    buttonContainer: {
        marginHorizontal:30,
        marginVertical:30
    },

    buttonText: {
        textAlign:"center",
        fontSize:18,
        fontWeight:'bold'
    },

    signInText: {
        color: '#999'
    },

    signInLink: {
        color: '#ffcc33', 
        marginLeft:10
    },

    signInContainer: {
        flexDirection: 'row',
        marginHorizontal: 30,
        justifyContent: "center",
        marginVertical: 10
    }
})
