import React,{useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ScrollView,Dimensions,Image,Button,Animated,Quote } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const ItemComponent = (props) =>{
    const [count,setCount] = useState(0);
    return(
        <View style={styles.itemContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={require('../../images/salad.jpg')}/>
                <View style={styles.imageOverlay}>
                    <Text style={styles.wordSize}>100$</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.buttonContainer}>  
                <TouchableOpacity onPress={() => setCount(count-1)}><Icon name="minus" size={60}/></TouchableOpacity>
                <View><Text style={styles.signContainer}>{count}</Text></View>
                <TouchableOpacity onPress={() => setCount(count+1)}><Icon name="plus" size={60}/></TouchableOpacity> 
            </TouchableOpacity>
        </View>
    )
}
module.exports = ItemComponent

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    scrollviewContainer:{
        marginBottom: 70
    },
    imageOverlay:{
        backgroundColor:'#B7BABF',
        justifyContent: 'center',
        borderColor:'#B7BABF',
        position:'absolute',
        borderRadius:70/2,
        height:38,
        width:70,
        margin:5,
    },
    inContainer:{
        flexDirection: 'column',
    },
    imageContainer:{
        flex: 1,
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
        // height: 140,
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