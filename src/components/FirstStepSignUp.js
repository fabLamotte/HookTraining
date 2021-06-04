import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View , Animated, TextInput, TouchableOpacity, Platform, ScrollView } from 'react-native'
import Header from '../template/Header'
import Icon from 'react-native-vector-icons/Ionicons'

const SignUp = (props) => {
    const {
        navigation,
        finalEmail,
        finalPassword
    } = props

    console.log(props)

    let errorEmailState = false
    let errorPasswordState = false
    let errorPasswordCheckState = false

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorPasswordCheck, setErrorPasswordCheck] = useState('')

    const [passVisibility, setPassVisibility ] = useState(true)
    const [buttonHidden, setButtonHidden] = useState(true)
    const iconSubmit = (Platform.OS === 'ios')? 'arrow-forward-outline' : 'arrow-forward-sharp'
    let display = Platform.OS === 'ios' ? 'eye-outline' : 'eye-sharp' 
    let hide = Platform.OS === 'ios' ? 'eye-off-outline' : 'eye-off-sharp' 
    let icon = passVisibility ? display : hide

    // Fonction de gestion de l'icone 
        const togglePassVisibility = () => {
            passVisibility ? setPassVisibility(false) : setPassVisibility(true)
        }

    // Animation des inputs red border => erreur dans le champs
    const verifyEmail = () => {
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(email == ''){
            setErrorEmail("L'email ne peut pas être vide.")
            errorEmailState = true
        } else if (!regexEmail.test(email)){

            setErrorEmail("Format de l'email invalide.")
            errorEmailState = true
        } else {
            setErrorEmail(null)
            errorEmailState = false
        }
        activeButton()
    }

    const verifyPassword = () => {
        var regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%#*?&]{8,}$/
        if(password == ''){
            errorPasswordState = true
            setErrorPassword("Votre mot de passe ne peut pas être vide")
        } else if(!regexPassword.test(password)){
            errorPasswordState = true;
            setErrorPassword("Votre mot de passe doit contenir au moins 8 caractères, parmi lesquelles une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial");
        } else {
            setErrorPassword(null);
            errorPasswordState = false;
        }
        activeButton()
    }

    const verifyPasswordCheck = () => {
        if(passwordCheck != password){ 
            setErrorPasswordCheck("Vos mots de passe doivent être identiques")
            errorPasswordCheckState = true
        } else{
            setErrorPasswordCheck(null)
            errorPasswordCheckState = false
        }
        activeButton()
    }

    const activeButton = () => {
        if(!errorEmailState && !errorPasswordState && !errorPasswordCheckState){
            setButtonHidden(false)
        } else {
            setButtonHidden(true)
        }
    }

    const SaveData = () =>{
        finalEmail(email)
        finalPassword(password)
        navigation.navigate('secondStep')
    }

    return(
        <View style={styles.container}>
            <Header navigation={navigation} title="Inscription" />
            <ScrollView style={{flex:1}}>
                <View style={{alignItems:'center'}}>
                    <View style={styles.blockForm}>
                        <Text style={styles.labels}>Email : </Text>
                        <TextInput 
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Entrez votre email"
                            onBlur={verifyEmail}
                            onFocus={() => {setErrorEmail(null)}}
                        />
                        <Text style={styles.errors}>{errorEmail}</Text>
                    </View>
                    <View style={styles.blockForm}>
                        <Text style={styles.labels}>Mot de passe : </Text>
                        <View style={styles.inputPassView}>
                            <TextInput 
                                style={styles.pass}
                                value={password}
                                onChangeText={setPassword}
                                onBlur={verifyPassword}
                                placeholder="Entrez votre mot de passe"
                                secureTextEntry={passVisibility}
                                onFocus={() => {setErrorPassword(null)}}
                            />
                            <Icon name={icon} style={styles.iconPass} onPress={() => togglePassVisibility()} />
                        </View>
                        <Text style={styles.errors}>{errorPassword}</Text>
                    </View>
                    <View style={styles.blockForm}>
                        <Text style={styles.labels}>Confirmation du mot de passe : </Text>
                        <View style={styles.inputPassView}>
                            <TextInput 
                                style={styles.pass}
                                value={passwordCheck}
                                onChangeText={setPasswordCheck}
                                onBlur={verifyPasswordCheck}
                                placeholder="Entrez votre mot de passe"
                                secureTextEntry={passVisibility}
                                onFocus={() => {setErrorPasswordCheck(null)}}
                            />
                            <Icon name={icon} style={styles.iconPass} onPress={() => togglePassVisibility()} />
                        </View>
                        <Text style={styles.errors}>{errorPasswordCheck}</Text>
                    </View>
                    <View style={styles.submitForm}>
                        <TouchableOpacity style={styles.nextStep} onPress={(() => SaveData())} disabled={buttonHidden}>
                            <Text style={styles.nextText}>SUIVANT</Text>
                            <Icon name={iconSubmit} style={styles.arrowRight} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    blockForm:{
        width:'85%'
    },
    labels:{
        marginVertical:20,
        fontSize:22,
        color:"#707070"
    },
    input:{
        height:50,
        width:'100%',
        borderWidth:1,
        borderColor:'#707070',
        borderRadius:20,
        padding:5,
    },
    errors:{
        color:'red'
    },
    submitForm:{
        justifyContent:'center',
        width:'50%'
    },
    nextStep:{
        flexDirection:'row',
        backgroundColor:'#2855AE',
        marginTop:20,
        height:50,
        justifyContent:'space-around',
        alignItems:'center',
        borderRadius:40,
        paddingHorizontal:30
    },
    nextText:{
        color:'white',
        fontSize:20
    },
    arrowRight:{
        color:'white',
        fontSize:40
    },
    inputPassView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderWidth:1,
        borderColor:'black',
        height:50,
        borderRadius:40,
        paddingHorizontal:20
    },
    iconPass:{
        fontSize:30
    }
})

export default SignUp
