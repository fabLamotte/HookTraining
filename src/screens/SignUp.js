import React, {useState} from 'react'
import { Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import Header from './../template/Header'
import FirstStepSignUp from './../components/FirstStepSignUp'
import SecondStepSignUp from './../components/SecondStepSignUp'

import { createStackNavigator } from '@react-navigation/stack'

const Sign = createStackNavigator()

const SignUp = (props) => {
    const {
        navigation
    } = props


    const [civility, setCivility] = useState('')
    const [lastname, setLastname] = useState('')
    const [firstname, setFirstname] = useState('')
    const [birthday, setBirthday] = useState('')

    return(
        <Sign.Navigator initialRouteName="secondStep" screenOptions={{ headerShown: false }}>
            <Sign.Screen name="firstStep">
                {() => <FirstStepSignUp {...props} navigation={navigation} />}
            </Sign.Screen>
            <Sign.Screen name="secondStep">
                {() => <SecondStepSignUp {...props} navigation={navigation} />}
            </Sign.Screen>
        </Sign.Navigator>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default SignUp
