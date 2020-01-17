// Components/Search.js

import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator } from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'


class Search extends React.Component {
  static navigationOptions = {
    title: 'Recherche de film'
  }

  _loadFilms() {
    if (this.searchedText.length > 0) {//si barre de recherche non vide
      this.setState({ isLoading: true })  //faire apparaitre l'icone de chargement
      getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => { //appel api
          this.page = data.page
          this.totalPages = data.total_pages
          this.setState({
            films: [ ...this.state.films, ...data.results ], //copie des films de la page précédente pour permettre le "scroll infini"
            isLoading: false
          })
      })
    }
}
   _searchTextInputChanged(text) {
    this.searchedText = text // Modification du texte recherché à chaque saisie de texte
  }
  constructor(props) {
  super(props)
  this.page = 0 // Compteur pour connaître la page courante
  this.totalPages = 0 // Nombre de pages totales pour savoir si on a atteint la fin des retours de l'API TMDB
  this.searchedText = ""
  this.state = {
    films: [],
    isLoading: false  //ne pas afficher l'icone de chargement par default
   }
  }
  render() {
    return (
      <View style={styles.main_container}>
      <TextInput
        style={styles.textinput}
        placeholder='Titre du film'
        onChangeText={(text) => this._searchTextInputChanged(text)}
        onSubmitEditing={() => this._loadFilms()}
      />
      <Button title='Rechercher' onPress={() => this._loadFilms()}/>
      <FlatList
        data={this.state.films}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <FilmItem film={item}/>}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (this.page < this.totalPages) { // On vérifie qu'on n'a pas atteint la fin de la pagination (totalPages) avant de charger plus d'éléments
            this._loadFilms()
          }
       }}
      />
      { this.state.isLoading ?
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
          </View>
          : null
      }
    </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Search
