const config = {
    apiKey: "AIzaSyAPCdJdw1zL7W0tvtW2Qwhm132B1SRrJMc",
    authDomain: "mercadodev-8ffd0.firebaseapp.com",
    databaseURL: "https://mercadodev-8ffd0.firebaseio.com",
    projectId: "mercadodev-8ffd0",
    storageBucket: "gs://mercadodev-8ffd0.appspot.com",
    messagingSenderId: "724967947178"
  }

  const Rebase = require('re-base')
  const firebase = require('firebase/app')
  require('firebase/database')
  require('firebase/storage')

  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  export const storage = app.storage()

  export default base