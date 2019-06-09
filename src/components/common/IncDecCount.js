import React,{useState} from 'react'
import { View, Text, FlatList, StyleSheet,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

const IncDecCount = () =>{
    const [count,setCount] = useState(0);
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.spaceContainer} onPress={() => setCount(count-1)}><Icon name="minus" size={20}/></TouchableOpacity>
            <View style={styles.spaceContainer}><Text>{count}</Text></View>
            <TouchableOpacity style={styles.spaceContainer} onPress={() => setCount(count+1)}><Icon name="plus" size={20}/></TouchableOpacity> 
        </View>
        
    )
}

module.exports = IncDecCount

const styles=StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    spaceContainer:{
        paddingLeft: 5,
        paddingRight: 5,
    }
})

