import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import React from 'react';

const ButtonComponent = (props) =>{
    return(
        <View style={styles.container}>  
            <TouchableOpacity onPress={()=>props.passProps.navigation.navigate('Profile')}>
                <Text style={styles.textStyle}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

module.exports = ButtonComponent

const styles = StyleSheet.create({
    container:{
        width: "50%",
        height: 50,
        padding: 10,
        borderWidth: 4,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderColor: 'white',
        justifyContent: 'center',
        backgroundColor: '#B7BABF',
    },
    textStyle:{
        fontSize: 28,
        color: 'white',
        textAlign: 'center'
    }
})


