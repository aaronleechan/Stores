import React from 'react';
import { View,StyleSheet,TextInput,Text } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

const TextInputComponent = (props) =>{
    return(
        <View style={styles.container}>
            <Icon name={props.icon} size={40}> </Icon>
            <Text style={styles.textStyle}>{props.text}:</Text>
            <TextInput style={styles.textInputStyle}/>
        </View>
    )
}

module.exports = TextInputComponent

const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 10,
    },
    textStyle:{
        fontSize: 25,
    },
    textInputStyle:{
        height: 50,
        width: "60%",
        fontSize: 25,
        borderBottomWidth: 2,
        borderWidth: 0,
        justifyContent: 'center',
        borderColor: '#D8D8D2',
    }
})