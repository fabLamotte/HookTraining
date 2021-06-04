import React, {useState} from 'react'
import { Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import Header from './../template/Header'
import FirstStepSignUp from './../components/FirstStepSignUp'
import SecondStepSignUp from './../components/SecondStepSignUp'

import { createStackNavigator } from '@react-navigation/stack'

const Sign = createStackNavigator()

const SignUp = (props) => {
    const {
        navigation,
        setFinalCivility,
        setFinalLastname,
        setFinalFirstname,
        setFinalFirstname,
        setFinalPassword,
    } = props

    

    return(
        <Sign.Navigator initialRouteName="firstStep" screenOptions={{ headerShown: false }}>
            
            <Sign.Screen name="firstStep">
                {() => <FirstStepSignUp {...props} navigation={navigation} finalEmail={setFinalEmail} finalPassword={setFinalPassword} />}
            </Sign.Screen>

            <Sign.Screen name="secondStep">
                {() => <SecondStepSignUp {...props} navigation={navigation} setFinalCivility={setFinalCivility} setFinalLastname={setFinalLastname} setFinalFirstname={setFinalFirstname} />}
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
