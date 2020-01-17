// App.js

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Search from './Components/Search'
import SignUpScreen from './Components/Signup'
import HomeScreen from './Components/HomeScreen'


const RootStack = createStackNavigator(   //navigateur pour accéder aux différentes pages
  {
    Home: HomeScreen,
    Signup: SignUpScreen,
    Film: Search
  },
  {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '1e90ff'
    },
    textAlign: 'center',
    flex: 1
  }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
   );
 }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e90ff',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color:"#fff",
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  input: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 20
  },
  userBtn:{
    backgroundColor: "yellow",
    padding: 15,
    width: "45%"
  },
  btnTxt:{
    fontSize: 18,
    textAlign: 'center'
  },
  btnContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    width:"90%"
  }
})
