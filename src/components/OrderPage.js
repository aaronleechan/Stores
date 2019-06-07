import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import FooterScreen from '../components/common/FooterComponent';



const OrderPage = (props) =>{
    return(
        <View style={styles.container}>
            <Text>This is Order Page</Text>
            <Text>This is Order Page</Text>
            <Text>This is Order Page</Text>
            <Text>This is Order Page</Text>
            <Text>This is Order Page</Text>
            <Text>This is Order Page</Text>
            <Text>This is Order Page</Text>
            <Text>This is Order Page</Text>
            <Text>This is Order Page</Text>
            <Text>This is Order Page</Text>
            <Text>This is Order Page</Text>
            <FooterScreen passProps={props}/>
        </View>
    )
}
module.exports = OrderPage

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})