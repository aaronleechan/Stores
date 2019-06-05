import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import FooterScreen from './common/FooterComponent'
import BigCardComponent from './common/BigCardComponent'
import PropsTypes from 'prop-types';

export const ContactUs = (props) =>{
    return(
        <View style={styles.container}>
            <View><Text style={styles.textStyle}>How can we help ?</Text></View>
            <BigCardComponent icon="phone" size={40} ContactNumber="xxx.xxx.1234"/>
            <BigCardComponent icon="envelope-letter" size={40} ContactEnvelop="phyoaung03@gmail.com"/>
            <FooterScreen passProps={props}/>
        </View>
    )
}

module.exports = ContactUs

const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignSelf: 'center',
    },
    textStyle:{
        fontSize: 30,
        alignSelf: 'center',
    }
})