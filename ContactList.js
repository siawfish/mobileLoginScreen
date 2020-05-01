import React, { Component } from 'react'
import { ScrollView, StyleSheet, FlatList, View, Text } from 'react-native'
import Contact from './components/contact'

export default class ContactList extends Component {
    render() {
        const contacts = [
            {name:'Jerome Amanor', phone:'0244025365'},
            {name:'Abigail Amanor', phone:'0244925365'},
            {name:'Mavis Amanor', phone:'0244625365'},
            {name:'Michael Amanor', phone:'0245425365'},
            {name:'Elsie Amanor', phone:'0244485365'},
            {name:'Riane Amanor', phone:'0244435365'},
            {name:'Comfort Amanor', phone:'0247425365'},
            {name:'Jacqueline Amanor', phone:'0244525365'},
            {name:'Gerald Amanor', phone:'0244925365'}
        ]
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Contacts</Text>
                </View>
                <ScrollView style={styles.listContainer} showsVerticalScrollIndicator={false}>
                    <FlatList
                        data={contacts}
                        renderItem={({item})=>{
                            return <Contact name={item.name} phone={item.phone}/>
                            }
                        }
                        keyExtractor={(item)=>item.phone}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#000',
        flex: 1,
    },

    title: {
        color: '#000',
        fontSize: 50,
        fontWeight: '100',
        height:110,
        paddingVertical:70,
        paddingHorizontal:30
    },

    titleContainer: {
        backgroundColor: '#ffcc33'
    },

    listContainer: {
        marginBottom:60,
    }
})
