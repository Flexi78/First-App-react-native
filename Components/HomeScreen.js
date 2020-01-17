import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'


class HomeScreen extends Component {
  static navigationOptons = {
    header: null
  }

  TextUsernameChanged(text) {
    this.usernameText = text // Modification du texte recherché à chaque saisie de texte
  }

  TextPasswordChanged(text) {
    this.passwordText = text // Modification du texte recherché à chaque saisie de texte
  }
  isLoginTrue(){ // Vérification du login et password entrés
    if(this.usernameText == this.username && this.passwordText == this.password){//si login et mot de passe corects
      this.props.navigation.navigate('Film')    //naviguer vers la page de recherche de film
    }else{
      return(
        alert("Incorrect login or password") //sinon afficher une alrte erreur
      )
    }
  }

  constructor(props){
    super(props)
    this.username = "login"  //login pour se connecter
    this.password = "password"  //mot de passe pour se connecter
    this.usernameText = ""  //valeur du texte input initialisé a nul
    this.passwordText = ""  //valeur du texte input initialisé a nul
  }

  render() {
    return (
      <View style={styles.container}>

          <Text style={styles.welcome}>Login to my app</Text>
          <TextInput
            style={styles.input}
            placeholder='Username'
            onChangeText={(text) => this.TextUsernameChanged(text)}
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            secureTextEntry
            onChangeText={(text) => this.TextPasswordChanged(text)}
          />
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.userBtn}
              onPress={() => this.isLoginTrue()}
            >
              <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.userBtn}
              onPress={() => this.props.navigation.navigate('Signup')}
            >
              <Text style={styles.btnTxt}>Signup</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: '#1e90ff',
  },
  welcome: {
    fontSize: 25,
    marginTop: 80,
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

export default HomeScreen
