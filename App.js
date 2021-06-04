import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import AccueilScreen from './src/screens/AccueilScreen'
import SignUp from './src/screens/SignUp'
import SignIn from './src/screens/SignIn'

const Stack = createStackNavigator()

export default function App() {
  const [FinalCivility, setFinalCivility] = useState('')
  const [FinalLastname, setFinalLastname] = useState('')
  const [FinalFirstname, setFinalFirstname] = useState('')
  const [finalEmail, setFinalEmail] = useState('')
  const [finalPassword, setFinalPassword] = useState('')

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Accueil" screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Accueil" component={AccueilScreen} />
          <Stack.Screen name="Inscription" component={SignUp} 
            setFinalCivility={setFinalCivility}
            setFinalLastname={setFinalLastname}
            setFinalFirstname={setFinalFirstname}
            setFinalEmail={setFinalEmail}
            setFinalPassword={setFinalPassword}
          />
          <Stack.Screen name="Connexion" component={SignIn} 
            finalEmail={finalEmail}
            finalPassword={finalPassword}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:Platform.currentHeight
  }
});
