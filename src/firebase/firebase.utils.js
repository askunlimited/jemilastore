import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyBMrp9d5Cjc23nKuR9hn0AA_hSh4z-Ek1U",
    authDomain: "jemila-71c89.firebaseapp.com",
    projectId: "jemila-71c89",
    storageBucket: "jemila-71c89.appspot.com",
    messagingSenderId: "619180302539",
    appId: "1:619180302539:web:f80ece3a80d4292b13bb4e",
    measurementId: "G-EM76WPGCB6"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider); 


  export default firebase;