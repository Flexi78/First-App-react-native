import React,{ Component } from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'


class SignUpScreen extends Component{
  static navigationOptions = {
    title: 'SignUp'
  }

  isSignupTrue(){
    if(this.mailText.length > 0 && this.userText.length > 0 && this.passText.length > 0){
      alert("Account created")
      this.props.navigation.navigate('Film')
    }else{
      alert("All fields are required")
    }
  }

  TextMailChanged(text) {
    this.mailText = text // Modification du texte recherché à chaque saisie de texte
  }

  TextUserChanged(text) {
    this.userText = text // Modification du texte recherché à chaque saisie de texte
  }

  TextPassChanged(text) {
    this.passText = text // Modification du texte recherché à chaque saisie de texte
  }

  constructor(props){
    super(props)
    this.mailText = ""  //valeur du text input initialisé a nul
    this.userText = ""  //valeur du text input initialisé a nul
    this.passText = ""  //valeur du text input initialisé a nul
  }

  render() {
    return (
      <View style={ styles.container }>
       <Text style={styles.welcome}>Create an account</Text>
       <TextInput
         style={styles.input}
         placeholder='Mail address'
         onChangeText={(text) => this.TextMailChanged(text)}
       />
       <TextInput
         style={styles.input}
         placeholder='Username'
         onChangeText={(text) => this.TextUserChanged(text)}
       />
       <TextInput
         style={styles.input}
         placeholder='Password'
         secureTextEntry
         onChangeText={(text) => this.TextPassChanged(text)}
       />
       <TouchableOpacity
         style={styles.userBtn}
         onPress={() => this.isSignupTrue()}
       >
         <Text style={styles.btnTxt}>Signup</Text>
       </TouchableOpacity>

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
    textAlign: 'center',
    marginTop: 50,
    margin: 10,
    color:"#fff",
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
  }
})


export default SignUpScreen
