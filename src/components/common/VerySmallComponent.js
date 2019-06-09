import React from 'react'
import { Text, View,StyleSheet,Image } from 'react-native'

const VerySmallComponent = (props) =>{

    const imageSource = (props) =>{
        if(props.picsource){
            return(
                <View style={styles.smallboxContainer}>
                    <Image style={styles.imageStyle} source={require('../../images/salad.jpg')}/>
                </View>
            )
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                {imageSource(props)}
                <Text style={styles.bottomTextStyle}>x 10</Text>
            </View>
            <View>
                <Text style={styles.resultText}>100</Text>
            </View>
        </View>
    )
}

module.exports = VerySmallComponent

const styles = StyleSheet.create({
    container:{
        marginBottom: 5,
        marginRight: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    innerContainer:{
        flexDirection: 'row',
        marginBottom: 5,
        marginRight: 5,
    },
    resultText:{
        fontSize: 30,
        justifyContent: 'center',
        textAlign: 'right',
    },
    smallboxContainer:{
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    bottomTextStyle:{
        position: 'relative',
        bottom: -70,
        fontSize: 20,
        color: 'red'
    },
    imageStyle:{
        flex: 1,
        width: null,
        height: null, 
        resizeMode: 'cover',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#dddddd'
    },
})