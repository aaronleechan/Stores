import React from 'react';
import { View, Text, StyleSheet,Picker } from 'react-native'

const PickerComponent = () =>{
    return(
        <View>
            <Picker style={styles.pickerContainer}>
                <Picker.Item label="Normal" value="normal"/>
                <Picker.Item label="Special" value="special"/>
            </Picker>
        </View>
    )
}
module.exports = PickerComponent

const styles = StyleSheet.create({
    pickerContainer:{
        height: 50,
        width: 100
    }
})