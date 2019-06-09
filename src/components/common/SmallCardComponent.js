import React from 'react';
import { View,StyleSheet,TouchableOpacity,Image,Text,screenWidth,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'

// const screenWidth = Dimensions.get('window').width;

export const SmallCardComponent = (props) => {

    const iconSource = (props) =>{
        if(props.icon){
            return(
                <View>
                    <Icon name={props.icon} size={props.size}></Icon>
                </View>
            )
        }
    }

    const imageSource = (props) =>{
        if(props.picsource){
            return(
                <View>
                    <Image style={styles.imageStyle} source={require('../../images/salad.jpg')}/>
                </View>
            )
        }
    }

    return(
        <View style={styles.smallbox}>
            {imageSource(props)}
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
    },
    imageStyle:{
        flex: 1,
        width: null,
        height: null, 
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#dddddd'
    },
})