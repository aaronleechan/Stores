import React,{useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ScrollView,Dimensions,Image,Button,Animated } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import FooterScreen from '../components/common/FooterComponent';
import SmallCardComponent from './common/SmallCardComponent';
import BigCardComponent from './common/BigCardComponent'
import ItemComponent from './common/ItemComponent'
import ActionComponent from './common/ActionComponent'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


export const Profile = (props) =>{
    const [count,setCount] = useState(0);
    return(
        <View style={styles.container}>
            <Animated.ScrollView scrollEventThrottle={16} style={styles.scrollviewContainer}>
                <View><Text style={styles.titleContainer}>Available List</Text></View>
                <ScrollView horizontal={true}>
                    <SmallCardComponent/>
                    <SmallCardComponent/>
                    <SmallCardComponent/>
                    <SmallCardComponent/>
                    <SmallCardComponent/>
                </ScrollView>

                <View><Text style={styles.titleContainer}>All Food List</Text></View>
                <ScrollView horizontal={true}>
                    <BigCardComponent picsource={require('../images/burger.jpg')}/>
                    <BigCardComponent icon="picture" size={40}/>
                    <BigCardComponent icon="picture" size={40}/>
                    <BigCardComponent icon="picture" size={40}/>
                    <BigCardComponent icon="picture" size={40}/>
                    <BigCardComponent icon="picture" size={40}/>
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