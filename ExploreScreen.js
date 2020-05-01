import React, { Component } from 'react'
import { Text, StyleSheet, ScrollView, FlatList, View, TextInput } from 'react-native'
import Pet from './components/Pet'


export default class ExploreScreen extends Component {
    render() {
        const pets = [
            {petname:'Ricky', pettype:'Dog', petage:'3 Years', petloc:'1234 Achimota Lane', petpic:require('./assets/dog.jpg')},
            {petname:'Princilla', pettype:'Cat', petage:'4 Years', petloc:'1234 Achimota Lane', petpic:require('./assets/cat.jpg')},
            {petname:'Sponge Bob', pettype:'Goat', petage:'1 Years', petloc:'1234 Achimota Lane', petpic:require('./assets/goat.jpg')},
            {petname:'Yve', pettype:'Monkey', petage:'1 Years', petloc:'1234 Achimota Lane', petpic:require('./assets/monkey.jpg')},
            {petname:'Rinse', pettype:'Tiger', petage:'6 Years', petloc:'1234 Achimota Lane', petpic:require('./assets/tiger.jpg')}
        ]
        return (
            <View style={styles.container} >
                <View style={styles.searchContainer}>
                    <TextInput placeholder='&#128269; Search here' placeholderTextColor='#ffcc33'/>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <FlatList
                        data={pets}
                        renderItem={({item})=>{
                            return <Pet item={item}/>
                            }
                        }
                        keyExtractor={(item)=>item.petname}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#171616',
        flex:1,
    },

    searchContainer: {
        marginVertical:20,
        marginHorizontal:20,
        paddingLeft:30,
        marginTop:70,
        borderWidth:1,
        borderRadius:15,
        paddingVertical: 20,
        backgroundColor:'#000'
    }
})
