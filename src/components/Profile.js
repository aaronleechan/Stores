import React,{useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ScrollView,Dimensions,Image,Button,Animated } from 'react-native';
import FooterScreen from '../components/common/FooterComponent';
import SmallCardComponent from './common/SmallCardComponent';
import BigCardComponent from './common/BigCardComponent'
import ItemComponent from './common/ItemComponent'
import ActionComponent from './common/ActionComponent'
import data from '../../data/menu'


export const Profile = (props) =>{
    const [count,setCount] = useState(0);

    const allAvailableItemList = (data) =>{
        const UI = []
        data.map(d=>{
            var img = d.imgUrl
            UI.push(<SmallCardComponent key={d.name} picsource={img}/>)
        })
        return UI
    }

    const allFoodList = (data) =>{
        const UI = []
        data.map(d=>{
            var img = d.imgUrl
            UI.push(<BigCardComponent key={d.name} picsource={img}/>)
        })
        return UI
    }

    return(
        <View style={styles.container}>
            <Animated.ScrollView scrollEventThrottle={16} style={styles.scrollviewContainer}>
                <View><Text style={styles.titleContainer}>Available List</Text></View>
                <ScrollView horizontal={true}>
                    {allAvailableItemList(data)}
                    <SmallCardComponent picsource={require('../images/salad.jpg')}/>
                </ScrollView>

                <View><Text style={styles.titleContainer}>All Food List</Text></View>
                <ScrollView horizontal={true}>
                    {allFoodList(data)}
                    <BigCardComponent picsource={require('../images/salad.jpg')}/>
                </ScrollView>

                <View><Text style={styles.titleContainer}>Action</Text></View>
                <ScrollView horizontal={true}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('CreateFoodMenu')}> 
                        <ActionComponent icon="plus" title="Add Item" size={100}/>
                    </TouchableOpacity>
                </ScrollView>
            </Animated.ScrollView>
            <FooterScreen passProps={props}/>
        </View>
    )
}

module.exports = Profile

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    scrollviewContainer:{
        flex: 1,
        padding: 10,
        marginBottom: 70
    },
    titleContainer:{
        fontSize: 30,
        fontFamily: 'Cochin',
        fontWeight: 'bold',
    }
})