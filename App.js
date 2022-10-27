import 'react-native-gesture-handler'
import * as React from 'react';
import HomeScreen from './tales/home';
import MeteorScreen from './tales/meteor';
import TrackerScreen from './tales/tracker';
import { Text, View, TouchableOpacity, StyleSheet,ImageBackground, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack' 
import { NavigationContainer } from "@react-navigation/native";


const Stack = createStackNavigator();

export default function App() {
  return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerShown: false

        }}
        >
          <Stack.Screen name = 'Home' component= {HomeScreen}/>
          <Stack.Screen name = 'Meteor' component= {MeteorScreen}/>
          <Stack.Screen name = 'Tracker' component= {TrackerScreen}/>
          
        </Stack.Navigator>
      </NavigationContainer>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
