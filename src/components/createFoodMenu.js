import React from 'react';
import { View, Text,StyleSheet,ScrollView,Picker } from 'react-native'
import ActionComponent from './common/ActionComponent'
import TextInputComponent from './common/TextInputComponent'
import ButtonComponent from './common/ButtonComponent'
import FooterScreen from './common/FooterComponent'

const CreateFoodMenu = (props) =>{
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.foodcontainer}><Text style={styles.foodcontainerTextStyle}>Create Item</Text></View>
                <View style={styles.imageContainer}>
                    <ActionComponent icon="picture" size={100}/>
                    <TextInputComponent text="Name"/>
                    <TextInputComponent text="Price"/>
                    <TextInputComponent text="Ingre"/>
                    <ButtonComponent passProps={props} title="Submit" linkName="Profile"/>
                </View>
            </ScrollView>
            <FooterScreen passProps={props}/>
        </View>
    )
}
module.exports = CreateFoodMenu;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    foodItemName:{
        margin: 10
    },
    foodcontainerTextStyle:{
        fontSize: 20,
        textAlign: 'center',
    },
    imageContainer:{
        alignItems: 'center',
    }
})