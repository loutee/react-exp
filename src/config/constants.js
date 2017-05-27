import firebase from 'firebase'
import constants from './constants.json'

const config = {
  apiKey: constants.apiKey,
  authDomain: constants.apiDomain,
  databaseURL: constants.databaseURL
}

firebase.initializeApp(config)

export const db = firebase.database()
export const firebaseAuth = firebase.auth

