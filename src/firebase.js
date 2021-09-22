import firebase from "firebase/compat";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: 'AIzaSyCUJ3uIzvzRndzd4xFgjOO7Jxg8ynf6tDY',
    authDomain: 'lorderly-auth-dev.firebaseapp.com',
    dataBaseURL: 'https://lorderly-auth-dev-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'lorderly-auth-dev',
    storageBucket: 'lorderly-auth-dev.appspot.com',
    messagingSenderId: '988399499370',
    appId: '1:988399499370:web:2e8ebe9cf91d54dfb63213'
})

export const auth = app.auth()
export default app

