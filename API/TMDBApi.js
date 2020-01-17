// API/TMDBApi.js

const API_TOKEN = "3763cf3eb294efa48959006d4087d92f";

export function getImageFromApi (name) {  //fonction pour récupérer l'image avec son adresse
  return 'https://image.tmdb.org/t/p/w300' + name
}

export function getFilmsFromApiWithSearchedText (text, page) {  //appel api avec ses parametres
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
