import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getFirestore, getDoc, setDoc, doc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAhJKEn4s99UjIinHzifwfgTWZaofwSznI',
  authDomain: 'zukko-clothing-4414f.firebaseapp.com',
  projectId: 'zukko-clothing-4414f',
  storageBucket: 'zukko-clothing-4414f.appspot.com',
  messagingSenderId: '92301726560',
  appId: '1:92301726560:web:b76d00f0adde860e4a8405',
}

export const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account',
})

//** ---- Create User Document ---- */
export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = doc(db, `users/${userAuth.uid}`)

  const snapShot = await getDoc(userRef)
  console.log('snapshot: ', snapShot.data())
  console.log('exists?: ', snapShot.exists())

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return userRef
}

//** ---- Google Sign In Method ---- */
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  // .then((result) => {

  // })
  // .catch((error) => {
  //   console.log(error)
  // })
}

//** ---- Email and Password Sign in ---- */

export default db
