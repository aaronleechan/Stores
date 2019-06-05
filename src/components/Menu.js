import React from 'react';
import { View, Text,StyleSheet,ScrollView } from 'react-native';
import FooterScreen from './common/FooterComponent';
import RowComponent from './common/RowComponent'

export const Menu = (props) =>{
    return(
        <View style={styles.container}>
            <ScrollView style={styles.rowContainer}>
                <RowComponent icon="user" title="Edit" onClick={() => props.navigation.navigate('EditProfile')}/>
                <RowComponent icon="notebook" title="Food Menu" onClick={() => props.navigation.navigate('CreateFoodMenu')}/>
                <RowComponent icon="logout" title="Log out" onClick={() => props.navigation.navigate('Home')}/>
            </ScrollView>
            <FooterScreen passProps={props}/>
        </View>
    )
}
export default Menu

const styles=StyleSheet.create({
    container:{
        flex: 1
    },
    rowContainer:{
        flexDirection: 'column',
    }
})