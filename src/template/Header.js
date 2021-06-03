import React from 'react'
import { Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Header = (props) => {

    const {
        title,
        navigation
    } = props
    const iconBackName = (Platform.OS === 'ios') ? 'arrow-back-outline' : 'arrow-back-sharp'

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonHeader} onPress={() => navigation.goBack()}>
                <Icon name={iconBackName} style={styles.iconBack}  />
                <Text style={styles.textHeader}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:20
    },
    buttonHeader:{
        width:'100%',
        height:50,
        backgroundColor:"#E9E3E3",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    iconBack:{
        fontSize:30,
        position:'absolute',
        left:10
    },
    textHeader:{
        fontSize:20,
        color:"#707070",
        fontWeight:'bold'
    }
})

export default Header
