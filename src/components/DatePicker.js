import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text, Picker } from 'react-native'

const DatePicker = (props) => {
    const{
        years,
        months,
        days
    } = props

    const today = new Date()
    const staticYear = today.getYear() + 1900
    const staticMonth = today.getMonth()
    const staticDay = today.getDay()

    return (
        <View style={styles.container}>
            <Text>Date de naissance : </Text>
            <View>
                <Text></Text>
                <Picker
                    selectedValue={years}
                    style={{height:50, width:'100%', borderRadius:40}}
                    onValueChange={(itemValue, itemIndex) => setYears(itemValue)}>
                        {() => {
                            for(x = 1; x < 12; x++){
                                <Picker.Item label={x} value={x} />
                            }
                        }}
                </Picker>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default DatePicker