import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Zocial'

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

module.exports = payPalContainer

const styles = StyleSheet.create({
    iconBorderStyle:{
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        padding: 5,
    },
})