import React, { useState } from 'react'
import { Platform, StyleSheet, Text, View, Image, Linking, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import Header from '../template/Header'
import Icon from 'react-native-vector-icons/Ionicons'


const Connexion = (props) => {
    const {
        navigation
    } = props

    // Variables du formulaire
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const [passVisibility, setPassVisibility ] = useState(true)
    const [buttonHidden, setButtonHidden] = useState(true)

    // Icone password visibility
    let display = Platform.OS === 'ios' ? 'eye-outline' : 'eye-sharp' 
    let hide = Platform.OS === 'ios' ? 'eye-off-outline' : 'eye-off-sharp' 
    let icon = passVisibility ? display : hide

    // Fonction de gestion de l'icone 
    const togglePassVisibility = () => {
        passVisibility ? setPassVisibility(false) : setPassVisibility(true)
    }

    let errorEmail = false
    let errorPassword = false
    const verifyEmail = () => {
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        switch(email){
            case email == '' || email == null : setEmailError("L'email ne peut pas être vide.");errorEmail = true;break;
            case !email.match(regexEmail): setEmailError("Format de l'email invalide.");errorEmail = true;break;
            default: setEmailError(null);errorEmail = false;break;
        }
        activeButton()
    }

    const verifyPassword = () => {
        switch(password){
            case password === '' : errorPassword = true;setPasswordError("Votre mot de passe ne peut pas être vide");break;
            case password.length < 8: errorPassword = true;setPasswordError("Votre mot de passe doit contenir au moins 8 caractères");break;
            default:setPasswordError(null);errorPassword = false;break;
        }
        activeButton()
    }

    const activeButton = () => {
        if(!errorPassword && !errorEmail){
            setButtonHidden(false)
        }
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.logo}>
                <Image
                    style={styles.portalLogo}
                    source={require('./../../assets/images/portal.png')}
                />
            </View>
            <View style={styles.form}>
                <View style={styles.blockForm}>
                    <Text style={styles.labels}>Email : </Text>
                    <TextInput 
                        style={styles.inputs}
                        value={email}
                        onChangeText={setEmail}
                        onBlur={verifyEmail}
                        onFocus={() => setEmailError('')}
                        placeholder="Entrez votre email"
                    />
                    <Text style={styles.error}>{emailError}</Text>
                </View>
                <View style={styles.blockForm}>
                    <Text style={styles.labels}>Mot de passe: </Text>
                    <View style={styles.inputPassView}>
                        <TextInput 
                            style={styles.pass}
                            value={password}
                            onChangeText={setPassword}
                            onBlur={verifyPassword}
                            placeholder="Entrez votre mot de passe"
                            secureTextEntry={passVisibility}
                        />
                        <Icon name={icon} style={styles.iconPass} onPress={() => togglePassVisibility()} />
                    </View>
                    <Text style={styles.error}>{passwordError}</Text>
                </View>
                <View style={styles.connectZone}>
                    <TouchableOpacity disabled={buttonHidden} style={styles.connectButton} onPress={() => Test()}>
                        <Text style={styles.connectText}>SE CONNECTER</Text>
                    </TouchableOpacity> 
                </View>
                <View style={styles.askInscription}>
                    <Text>Pas encore inscrit ?</Text>
                    <Text style={styles.colorLink} onPress={() => navigation.navigate('Inscription')}>Créer un compte</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:Platform.currentHeight
    },
    logo:{
        justifyContent:'center',
        alignItems:'center'
    },
    portalLogo:{
        height:200,
        width:200
    },
    form:{
        flex:1
    },
    blockForm:{
        marginHorizontal:40,
    },
    inputs:{
        borderWidth:1,
        borderColor:"#707070",
        height:50,
        borderRadius:20,
        paddingLeft:8
    },
    inputPassView:{
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:'black',
        alignItems:'center',
        borderRadius:20,
    },
    iconPass:{
        color:'black',
        fontSize:30
    },
    pass:{
        width:'90%',
        paddingLeft:5
    },
    labels:{
        color:'#707070',
        marginVertical:5,
        fontSize:22
    },
    connectZone:{
        flex:1,
        width:'100%',
        alignItems:'center',
        marginTop:20
    },
    connectButton:{
        width:'60%',
        height:50,
        alignItems:'center',
        backgroundColor:'#2855AE',
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center'
    },
    connectText:{
        color:'white',
        fontWeight:'bold',
        fontSize:18
    },
    askInscription:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        marginTop:50
    },
    colorLink:{
        color:'#2855AE',
        fontWeight:'bold',
        marginLeft:5
    },
    error:{
        color:'red'
    },

})

export default Connexion
