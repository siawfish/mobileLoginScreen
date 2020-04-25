import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { FontAwesome, Entypo, Ionicons } from '@expo/vector-icons';


export default class Contact extends Component {
    render() {
        const { name, phone } = this.props
        return (
            <View style={styles.container}>
                <Image style={styles.img} source={require('../assets/profile.jpg')}/>
                <View style={styles.infoContainer}>
                    <Text style={styles.name} numberOfLines={1}>{name}</Text>
                    <Text style={styles.phone} >{phone}</Text>
                </View>
                <View style={styles.icon}>
                    <FontAwesome
                        name='phone-square'
                        color='#333'
                        size='20'
                    />
                </View>
                <View style={styles.icon}>
                    <Entypo
                        name='message'
                        color='#333'
                        size='20'
                    />
                </View>
                <View style={styles.icon}>
                    <Ionicons
                        name='ios-options'
                        color='#333'
                        size='20'
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        marginVertical:5,
        borderBottomWidth:0.5,
        borderBottomColor:'#aaa',
        paddingVertical:10,
        alignItems: 'center',
        paddingHorizontal:10
    },

    img: {
        width:50,
        height:50,
        borderRadius:25,
        borderColor:'#ffcc33',
        borderWidth:2,
        marginRight:10
    },

    infoContainer: {
        flex: 9,
    },

    name: {
        color:'#777',
        fontWeight:'300',
        paddingVertical:3,
        fontSize:22
    },

    phone: {
        color:'#333'
    },

    icon: {
        flex:1
    }
})
