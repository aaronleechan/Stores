import React,{useState} from 'react'
import { View, Text, FlatList, StyleSheet,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import IncDecCount from './IncDecCount'

const data = [
    {name: 'Orange Chicken', price: '9.99'},
    {name: 'Orange Chicken', price: '9.99'},
    {name: 'Almond Chicken', price: '9.99'},
    {name: 'Hunan Chicken', price: '9.99'},
    {name: 'Tofu Chicken', price: '9.99'},
    {name: 'Garlic Chicken', price: '9.99'},
    {name: 'Curry Chicken', price: '9.99'},
    {name: 'Crispy Chicken', price: '9.99'},
    {name: 'Mongolian Beef', price: '9.99'},
    {name: 'BBQ Pork', price: '9.99'},
    {name: 'Walnut Shrimp', price: '9.99'},
    {name: 'Kung Pao Chicken', price: '9.99'},
]

const SimpleMenuList = (props) =>{
    
    return(
        <View>
            <Text style={styles.titleStyle}>Menu</Text>
                <FlatList
                    data={data}
                    renderItem={
                    ({item})=>
                    <View style={styles.flatListContainer}>
                        <View style={styles.innerContainer}>
                            <Text style={styles.itemStyle}>{item.name}</Text>
                            <Text style={styles.itemStyle}>{item.price}</Text>
                        </View>
                        <View style={styles.innerContainerend}>
                            <IncDecCount/> 
                        </View>
                    </View>
                }
            />
        </View>
    )
    
}

module.exports = SimpleMenuList

const styles = StyleSheet.create({
    titleStyle:{
        fontSize: 30,
        textAlign: 'center',
    },
    flatListContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
    },
    innerContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    innerContainerend:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 8,
    }
})