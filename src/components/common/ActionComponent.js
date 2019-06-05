import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { View,StyleSheet,Dimensions } from 'react-native';
import PropsTypes from 'prop-types';

const screenWidth = Dimensions.get('window').width;

export const ActionComponent = (props) => {
    return(
        <View style={styles.bigbox}>
            <Icon name={props.icon} size={props.size}></Icon>
        </View>
    )
}

ActionComponent.PropsTypes = {
    name: PropsTypes.string,
    size: PropsTypes.object
}

module.exports = ActionComponent

const styles = StyleSheet.create({
    bigbox:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: screenWidth-20,
        height: 200,
        backgroundColor: 'grey',
        marginBottom: 5,
        marginRight: 5,
    }
})