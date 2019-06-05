import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import React from 'react';
import PropsTypes from 'prop-types';

const ButtonComponent = (props) =>{
    return(
        <View style={styles.container}>  
            <TouchableOpacity onPress={()=>props.passProps.navigation.navigate(props.linkName)}>
                <Text style={styles.textStyle}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

module.exports = ButtonComponent

ButtonComponent.PropsTypes = {
    title: PropsTypes.string,
    linkName: PropsTypes.string
}

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
        alignItems: 'center'
    },
    textStyle:{
        fontSize: 28,
        color: 'white',
        textAlign: 'center'
    }
})


