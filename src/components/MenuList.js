import React,{useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ScrollView,Dimensions,Image,Button,Animated } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import FooterScreen from './common/FooterComponent'
import ItemComponent from './common/ItemComponent'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const MenuList = (props) =>{
    const [count,setCount] = useState(0);
    return(
        <View style={styles.container}>
            <Animated.ScrollView scrollEventThrottle={16} style={styles.scrollviewContainer}>
                <ItemComponent/>
                <ItemComponent/>
                <ItemComponent/>
                <ItemComponent/>
                <ItemComponent/>
                <ItemComponent/>
                <ItemComponent/>
                <ItemComponent/>
                <ItemComponent/>
                <ItemComponent/>
            </Animated.ScrollView>
            <FooterScreen passProps={props}/>
        </View>
    )
}

module.exports = MenuList

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    scrollviewContainer:{
        marginBottom: 70
    },
    inContainer:{
        flexDirection: 'column',
    },
    imageContainer:{
        width: screenWidth,
        height: 200,
        marginTop: 10,
    },
    signContainer:{
        fontSize: 50,
        justifyContent: 'center',
    },
    imageStyle:{
        flex: 1,
        width: null,
        height: null, 
        resizeMode: 'cover',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#dddddd'
    },
    itemContainer:{
        flexDirection: 'column'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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