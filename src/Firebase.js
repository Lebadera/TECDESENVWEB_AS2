import firebase from 'firebase/app'; 
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAuW3JsPvIUoVLTYKv7bXKAwz5XY5JRfYM",
    authDomain: "projetoas2-650b5.firebaseapp.com",
    projectId: "projetoas2-650b5",
    storageBucket: "projetoas2-650b5.appspot.com",
    messagingSenderId: "443363348160",
    appId: "1:443363348160:web:dbd9b523515390bee96725"
  };

if(!firebase.apps.lenght)
{
    firebase.initializeApp(firebaseConfig);
}

export default firebase;