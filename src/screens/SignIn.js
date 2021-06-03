import React from 'react'
import { Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import Header from './../template/Header'
import Connexion from './../components/Connexion'

const SignIn = (props) => {
    const {
        navigation
    } = props

    return(
        <View style={styles.container}>
            <Header navigation={navigation} title="Inscription" />
            <Connexion {...props} navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default SignIn
