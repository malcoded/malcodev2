import {initializeApp} from 'firebase/app'
import {getAuth, GoogleAuthProvider, signOut, signInWithPopup, onAuthStateChanged} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAMuXthFYMi4Y_BEQ4W9hi0nZj9RRMGZ-A",
    authDomain: "malcode-c704e.firebaseapp.com",
    databaseURL: "https://malcode-c704e.firebaseio.com",
    projectId: "malcode-c704e",
    storageBucket: "malcode-c704e.appspot.com",
    messagingSenderId: "799692595033",
    appId: "1:799692595033:web:e3e5d56e9f708f832f3648"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

auth.languageCode = 'es'


const onAuthGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider()
        const response = await signInWithPopup(auth, provider)
        return response
    } catch(error: any) {
        return error.message || 'Error'
    }
}

export {
    //firebase Auth
    auth,
    signOut,
    onAuthStateChanged,
    onAuthGoogle,
    //firebase Firestore
    db,
    doc,
    getDoc,
    setDoc
}