import React, { Component } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

export default class Pet extends Component {
    
    render() {
        const { item } = this.props
        return (
            <View style={styles.container}>
                <View>
                    <Image style={styles.img} source={item.petpic}/>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoTitle}>{item.petname}</Text>
                    <Text style={styles.info}>{item.pettype}</Text>
                    <Text style={styles.info}>{item.petage}</Text>
                    <Text style={styles.info}>{item.petloc}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        marginHorizontal:20,
        marginVertical:6
    },

    img: {
        width:150,
        height:160,
        borderRadius:10,
        borderColor:'#000',
    },

    infoContainer: {
        backgroundColor:'#000',
        width:'55%',
        height:120,
        marginTop:20,
        borderTopEndRadius: 15,
        borderBottomEndRadius: 15,
        paddingHorizontal:15,
        borderColor:'#000',
        borderWidth:1,
        borderLeftWidth:0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,  
        elevation: 5
    },
    
    info: {
        marginVertical:5,
        color: '#999'
    },

    infoTitle: {
        marginVertical:10,
        color: '#ffcc33',
        fontSize: 20,
        fontWeight: 'bold',

    }
})
