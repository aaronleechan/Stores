import React from 'react'
import { View,Text,StyleSheet,ScrollView ,Button,TouchableOpacity,FlatList } from 'react-native'
import FooterScreen from '../components/common/FooterComponent';
import VerySmallComponent from './common/VerySmallComponent';
import Icon from 'react-native-vector-icons/Zocial'

const data = [
    {imageurl: 'www.google.com',price: 100,count: 3},
    {imageurl: 'www.google.com',price: 100,count: 3},
    {imageurl: 'www.google.com',price: 100,count: 3},
    {imageurl: 'www.google.com',price: 100,count: 3},
    {imageurl: 'www.google.com',price: 100,count: 3},
    {imageurl: 'www.google.com',price: 100,count: 3},
    {imageurl: 'www.google.com',price: 100,count: 3},
    {imageurl: 'www.google.com',price: 100,count: 3},
    {imageurl: 'www.google.com',price: 100,count: 3},
    {imageurl: 'www.google.com',price: 100,count: 3},
    {imageurl: 'www.google.com',price: 100,count: 3},
]

const OrderPage = (props) =>{

    const payPalContainer = (props) =>{
        return(
            <TouchableOpacity onPress={()=>props.navigation.navigate('Complete')}>
                <Icon style={styles.iconBorderStyle} name="paypal" size={30}>
                    <Text style={{fontFamily: "Georgia, serif", fontSize: 20,fontStyle: 'italic'}}>
                        Pay with Paypal
                    </Text> 
                </Icon>
            </TouchableOpacity>
        )
    }

    return(
        <View style={styles.container}>
            <View style={styles.topContainer}><Text style={styles.textStyle}>Order Summary</Text></View>
            <FlatList style={styles.scrollviewContainer}
                data={data}
                renderItem={
                    ({item})=><VerySmallComponent picsource="test"/>   
                }
            >
            </FlatList>
            <View style={styles.submitContainer}>
                <View style={{borderBottomColor: 'grey',borderBottomWidth: 3,}}/>
                <View style={styles.TotalContainer}>
                    <Text style={styles.resultStyle}>Total:</Text>
                    <Text style={styles.resultStyle}>1000</Text>
                </View>
                {payPalContainer(props)}
            </View>
            <FooterScreen passProps={props}/>
        </View>
        
    )
}
module.exports = OrderPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    iconBorderStyle:{
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        padding: 5,
    },
    TotalContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    topContainer:{
        alignItems: 'center',
    },
    scrollviewContainer:{
        flex: 3,
    },
    submitContainer:{
        flex: 1,
        marginBottom: 100,
        marginLeft: 5,
        marginRight: 5,
    },
    textStyle:{
        fontSize: 40,
    },
    resultStyle:{
        fontSize: 30
    }
})