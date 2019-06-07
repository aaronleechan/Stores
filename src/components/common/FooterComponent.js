import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { StyleSheet,Text, View,TouchableOpacity,Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width;

const FooterComponent = (props) =>{
    return(
        <View style={styles.footer}>
            <TouchableOpacity onPress={()=>props.passProps.navigation.navigate('Profile')}><Icon name="home" size={30} /></TouchableOpacity>
            <TouchableOpacity onPress={()=>props.passProps.navigation.navigate('MenuList')}><Icon name="list" size={30} /></TouchableOpacity>
            <TouchableOpacity onPress={()=>props.passProps.navigation.navigate('OrderPage')}><Icon name="basket" size={30} /></TouchableOpacity>
            <TouchableOpacity onPress={()=>props.passProps.navigation.navigate('ContactUs')}><Icon name="speech" size={30} /></TouchableOpacity>
            <TouchableOpacity onPress={()=>props.passProps.navigation.navigate('Menu')}><Icon name="menu" size={30} /></TouchableOpacity>
        </View>
    )
}

module.exports = FooterComponent

const styles = StyleSheet.create({
    footer:{
        position: 'absolute',
        width: screenWidth,
        bottom: 0,
        left: 0,
        height: 70,
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flexDirection: 'row',
        backgroundColor: '#EEEEE8',
    },
    textStyle:{
        fontWeight: 'bold',
        textShadowColor: 'blue',
        textShadowRadius: 1,
        fontFamily: 'Cochin',
        fontSize: 30,
        paddingLeft: 5, 
    }
})