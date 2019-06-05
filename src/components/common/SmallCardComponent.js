import React from 'react';
import { View,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'


export const SmallCardComponent = () => {
    return(
        <View style={styles.smallbox}>
            <Icon name="cup" size={40}></Icon>
        </View>
    )
}

module.exports = SmallCardComponent

const styles = StyleSheet.create({
    smallbox:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: 200,
        height: 200,
        backgroundColor: 'grey',
        marginBottom: 5,
        marginRight: 5,
    }
})