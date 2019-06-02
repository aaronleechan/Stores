import React from 'react';
import {View,Text} from 'react-native';
import TextInputComponent from './common/TextInputComponent';
import ButtonComponent from './common/ButtonComponent';


export const EditProfile = () =>{
    return(
        <View>
            <TextInputComponent />
            <ButtonComponent />
        </View>
    )
}

module.exports = EditProfile