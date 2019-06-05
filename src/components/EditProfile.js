import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import TextInputComponent from './common/TextInputComponent';
import FooterScreen from './common/FooterComponent';
import ButtonComponent from './common/ButtonComponent';

const SubmitButton = () =>{
    console.log("Submit Button")
}

export const EditProfile = (props) =>{
    return(
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <TextInputComponent icon="briefcase" />
                <TextInputComponent icon="location-pin" />
                <TextInputComponent icon="envelope" />
                <TextInputComponent icon="phone" />
                <Button onPress={SubmitButton} title="Submit" color="#B7BABF"/>
            </View>
                <FooterScreen style={styles.buttonContainer} passProps={props}/>
        </View>
    )
}

module.exports = EditProfile

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 10,
    },
    innerContainer:{
        borderWidth: 4,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderColor: 'white',
        justifyContent: 'space-between'
    },
    outerContainer:{
        flex: 1
    }
})