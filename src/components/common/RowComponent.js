import React from 'react';
import { View, Text,StyleSheet,ScrollView,TouchableOpacity,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import PropsTypes from 'prop-types';

const screenWidth = Dimensions.get('window').width;

const RowComponent = (props) =>{
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.flowcontainer} onPress={props.onClick}>
                <Icon name={props.icon} size={30}/>
                <Text>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

module.exports = RowComponent;


RowComponent.PropsTypes = {
    icon: PropsTypes.string,
    title: PropsTypes.string
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: screenWidth,
    },
    flowcontainer:{
        flex: 1,
        padding: 10,
        borderColor: 2,
        borderWidth: 3,
        borderRadius: 10,
        height: 60,
        backgroundColor: "#A2CEDB",
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

