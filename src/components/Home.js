import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet, Image} from 'react-native';
import ButtonComponent from '../components/common/ButtonComponent';

export const Home = (props) =>{
    return(
        <View style={styles.container}>

            <View style={styles.header}></View>

            <View style={styles.footer}>
                <ButtonComponent passProps={props} title="SignIn" linkName="Profile"/>
                <ButtonComponent passProps={props} title="SignUp" linkName="ThirdPartySignUp"/>
            </View>
        </View>
    )
}

module.exports = Home

const styles = StyleSheet.create({
    container:{
        flex: 1, 
    },
    header:{
        flex: 2,
    },
    footer:{
        flex: 1,
        alignItems: 'center',
    },
    
})