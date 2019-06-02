import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,ScrollView,Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const Profile = (props) =>{
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text>This is Scroll View</Text>
                    <Text>This is Scroll View</Text>
                    <Text>This is Scroll View</Text>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <Text style={styles.textStyle}>Aarlic</Text>
                <TouchableOpacity onPress={()=>props.navigation.navigate('EditProfile')}>
                    <Image source={require('../images/profile.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

module.exports = Profile

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'stretch',
    },
    header:{

    },
    footer:{
        position: 'absolute',
        width: screenWidth,
        bottom: 0,
        height: 50,
        backgroundColor: 'grey',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flexDirection: 'row',

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