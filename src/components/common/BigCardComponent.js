import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { View, Text,StyleSheet,Dimensions,Image,TouchableOpacity } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const BigCardComponent = (props) => {

    const ContactNumber = (props) =>{
        if(props.ContactNumber){
            return(
                <View>
                    <Text style={styles.phoneNumberStyle}>{props.ContactNumber}</Text>
                </View>
            )
        }
    }

    const ContactEnvelop = (props) =>{
        if(props.ContactEnvelop){
            return(
                <View>
                    <Text style={styles.phoneNumberStyle}>{props.ContactEnvelop}</Text>
                </View>
            )
        }
    }

    const imageSource = (props) =>{
        if(props.picsource){
            return(
                <View>
                    <Image style={styles.imageStyle} source={require('../../images/salad.jpg')}/>
                    <View style={styles.availableButtonStyle}>
                        <TouchableOpacity>
                            <Text style={styles.availableButtonTextStyle}>Available</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.declineButtonStyle}>
                        <TouchableOpacity>
                            <Text style={styles.declineButtonTextStyle}>Decline</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }

    const iconSource = (props) =>{
        if(props.icon){
            return(
                <View>
                    <Icon name={props.icon} size={props.size}></Icon>
                </View>
            )
        }
    }
    

    return(
        <View style={styles.bigbox}>
            {iconSource(props)}
            {ContactNumber(props)}
            {ContactEnvelop(props)}
            {imageSource(props)}
        </View>
    )
}

module.exports = BigCardComponent

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
    },
    phoneNumberStyle:{
        fontSize: 30,
    },
    imageStyle:{
        flex: 1,
        width: null,
        height: null, 
        width: screenWidth-20,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#dddddd'
    },
    availableButtonTextStyle:{
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    availableButtonStyle:{
        backgroundColor:'#B7BABF',
        borderColor:'#B7BABF',
        justifyContent: 'center',
        position:'absolute',
        borderRadius:80/2,
        height:38,
        width:90,
        left: 250,
        bottom: 10,
    },
    declineButtonTextStyle:{
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    declineButtonStyle:{
        backgroundColor:'#B7BABF',
        borderColor:'#B7BABF',
        justifyContent: 'center',
        position:'absolute',
        borderRadius:80/2,
        height:38,
        width:90,
        left: 30,
        bottom: 10,
    },
})