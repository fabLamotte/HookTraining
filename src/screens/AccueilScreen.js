import React from 'react'
import { Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'

const AccueilScreen = (props) => {
    const {
      navigation
    } = props

    return(
        <View style={styles.container}>
          <View style={styles.logoBlock}>
            <Image 
              style={styles.logo}
              source={require('./../../assets/images/trident.png')}
            />
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.connexionBlock} onPress={() => navigation.navigate('Connexion')}>
              <Text style={styles.connexionText}>Se connecter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.inscriptionBlock} onPress={() => navigation.navigate('Inscription')}>
              <Text style={styles.inscriptionText}>S'inscrire</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop:Platform.currentHeight
      },
      logoBlock:{
        flex:3,
        justifyContent:'center',
        alignItems:'center'
      },
      buttons:{
        flex:2,
        marginLeft:50,
        marginRight:50,
      },
      connexionBlock:{
        backgroundColor:'#2855AE',
        height:70,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#707070',
        borderWidth:1
      },
      inscriptionBlock:{
        backgroundColor:'white',
        height:70,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#707070',
        borderWidth:1,
        marginTop:40
      },
      connexionText:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
      },
      inscriptionText:{
        color:'#707070',
        fontSize:30,
        fontWeight:'bold',
      },
      logo:{
        height:300,
        width:150
      }
})

export default AccueilScreen
