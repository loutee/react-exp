import { firebaseAuth } from '../config/constants'

export function login(email, password) {
  return firebaseAuth().signInWithEmailAndPassword(email, password)
}

export function logout() {
  return firebaseAuth().signOut()
}

