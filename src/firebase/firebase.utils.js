import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAjlk_44YU25LGdjrjL5hODbYRNMO1jg2o',
  authDomain: 'crown-db-afc7e.firebaseapp.com',
  databaseURL: 'https://crown-db-afc7e.firebaseio.com',
  projectId: 'crown-db-afc7e',
  storageBucket: 'crown-db-afc7e.appspot.com',
  messagingSenderId: '121050733590',
  appId: '1:121050733590:web:818a21d6dcbba8e0632937',
  measurementId: 'G-269LYBPW8N'
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { email, displayName } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
