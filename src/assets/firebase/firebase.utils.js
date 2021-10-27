import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {
  GoogleAuthProvider,
  createUserWithEmainAndPassword,
  signInWithPopup,
  getAuth,
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAhJKEn4s99UjIinHzifwfgTWZaofwSznI',
  authDomain: 'zukko-clothing-4414f.firebaseapp.com',
  projectId: 'zukko-clothing-4414f',
  storageBucket: 'zukko-clothing-4414f.appspot.com',
  messagingSenderId: '92301726560',
  appId: '1:92301726560:web:b76d00f0adde860e4a8405',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

//! Create instance of Google Provider Object
export const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  // what this means is that we walways want to trigger google pop up when we use sign in
  prompt: 'select_account',
})

const auth = getAuth()

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    ///! start here
  })
}

//! Create database connection
export const db = getFirestore
