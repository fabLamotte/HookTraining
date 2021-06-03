import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import AccueilScreen from './src/screens/AccueilScreen'
import SignUp from './src/screens/SignUp'
import SignIn from './src/screens/SignIn'

import USERS from './assets/Users.json' 

const Stack = createStackNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Accueil" screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Accueil" component={AccueilScreen} />
          <Stack.Screen name="Inscription" component={SignUp} />
          <Stack.Screen name="Connexion" component={SignIn} />
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
