import React, { useState, useEffect } from 'react'
import { StyleSheet, Picker, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import Header from '../template/Header'

const SecondStepSignUp = (props) => {
    const {
        navigation,
        setFinalFirstname,
        setFinalLastname,
        setFinalCivility
    } = props
    
    const [selectedValue, setSelectedValue] = useState("Homme")
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [firstnameErrorMessage, setFirstnameErrorMessage] = useState('')
    const [lastnameErrorMessage, setLastnameErrorMessage] = useState('')
    const [submitHide, setSubmitHide] = useState(true)

    const verifyFirstname = () => {
        if (firstname == '') {
            setFirstnameErrorMessage("Votre prénom ne peut pas être vide.")
        } else {
            setFirstnameErrorMessage('')
        }
        check()
    }

    const verifyLastname = () => {
        if (lastname == '') {
            setLastnameErrorMessage("Votre nom ne peut être vide.")
        }  else {
            setLastnameErrorMessage('')
        }
        check()
    }

    const check = () => {
        if (firstname == '' || lastname == '') {
            setSubmitHide(true)
        } else {
            setSubmitHide(false)
        }
    }

    const Submit = () => {
        setFinalFirstname(firstname)
        setFinalLastname(lastname)
        setFinalCivility(selectedValue)
        navigation.navigate
    }

    return (
        <View style={{ flex: 1 }}>
            <Header navigation={navigation} title="Inscription" />
            <ScrollView style={styles.container}>
                <View style={styles.blockform}>
                    <Text style={styles.labels}>Civilités :</Text>
                    <View style={styles.select}>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 50, width: '100%' }}
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
                <View style={styles.submitZone}>
                    <TouchableOpacity style={styles.submitButton} disabled={submitHide} onPress={() => Submit()} >
                        <Text style={styles.submitText}>TERMINE</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    blockform: {
        marginHorizontal: 40,
        marginVertical: 5
    },
    labels: {
        fontSize: 22,
        color: '#707070',
        marginVertical: 5
    },
    select: {
        height: 50,
        borderWidth: 1,
        borderColor: '#707070',
        width: '100%',
        borderRadius: 20,
        paddingHorizontal: 10,
    },
    errors: {
        color: 'red'
    },
    inputs: {
        borderWidth: 1,
        borderColor: '#707070',
        borderRadius: 20,
        height: 50,
        padding: 15
    },
    submitZone: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    submitButton: {
        backgroundColor: '#2855AE',
        borderColor: '#707070',
        borderWidth: 1,
        width: '50%',
        height: 50,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitText: {
        color: 'white',
        fontSize: 22
    }
})

export default SecondStepSignUp