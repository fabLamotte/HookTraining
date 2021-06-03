import React, {useState, useEffect} from 'react'
import { StyleSheet, Picker, Text, View , TextInput, ScrollView } from 'react-native'
import Header from '../template/Header'
import DatePicker from './DatePicker'

const SecondStepSignUp = (props) => {
    const {
        navigation
    } = props

    let firstnameErrorState = true
    let lastnameErrorState = true

    const [selectedValue, setSelectedValue] = useState(null)
    const [firstname, setFirstname] = useState(null)
    const [lastname, setLastname] = useState(null)
    const [firstnameErrorMessage, setFirstnameErrorMessage] = useState(null)
    const [lastnameErrorMessage, setLastnameErrorMessage] = useState(null)
    const [years, setYears] = useState(null)
    const [months, setMonths] = useState(null)
    const [days, setDays] = useState(null)

    const verifyFirstname = () => {
        if(firstname == ''){
            setFirstnameErrorMessage('Votre prénom ne peut pas être vide')
            firstnameErrorState = true
        } else {
            setFirstnameErrorMessage(null)
            firstnameErrorState = false
        }
    }

    const verifyLastname = () => {
        if(lastname == ''){
            setLastnameErrorMessage('Votre nom ne peut pas être vide')
            lastnameErrorState = true
        } else {
            setLastnameErrorMessage(null)
            lastnameErrorState = false
        }
    }

    return (
        <View style={{flex:1}}>
            <Header navigation={navigation} title="Inscription" />
            <ScrollView style={styles.container}>
                
                <View style={styles.blockform}>
                    <Text style={styles.labels}>Civilités :</Text>
                    <View style={styles.select}>
                        <Picker
                            selectedValue={selectedValue}
                            style={{height:50, width:'100%'}}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                                <Picker.Item label="Homme" value="Homme" />
                                <Picker.Item label="Femme" value="Femme" />
                        </Picker>
                    </View>
                </View>

                <View style={styles.blockform}>
                    <Text style={styles.labels}>Prénom :</Text>
                    <TextInput 
                        style={styles.inputs}
                        value={firstname}
                        onChangeText={setFirstname}
                        onBlur={verifyFirstname}
                        onFocus={() => setFirstnameErrorMessage('')}
                        placeholder="Entrez votre prénom"
                    />
                    <Text style={styles.errors}>{firstnameErrorMessage}</Text>
                </View>

                <View style={styles.blockform}>
                    <Text style={styles.labels}>Nom :</Text>
                    <TextInput 
                        style={styles.inputs}
                        value={lastname}
                        onChangeText={setLastname}
                        onBlur={verifyLastname}
                        onFocus={() => setLastnameErrorMessage('')}
                        placeholder="Entrez votre nom de famille"
                    />
                    <Text style={styles.errors}>{lastnameErrorMessage}</Text>
                </View>

                <View style={styles.blockform}>
                    <DatePicker {...props} years={years} months={months} days={days} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20
    },
    blockform:{
        marginHorizontal:40,
        marginVertical:5
    },
    labels:{
        fontSize:22,
        color:'#707070',
        marginVertical:5
    },
    select:{
        height:50,
        borderWidth:1,
        borderColor:'#707070',
        width:'100%',
        borderRadius:20,
        paddingHorizontal:10,
    },
    errors:{
        color:'red'
    },
    inputs:{
        borderWidth:1,
        borderColor:'#707070',
        borderRadius:20,
        height:50,
        padding:15
    }
})

export default SecondStepSignUp