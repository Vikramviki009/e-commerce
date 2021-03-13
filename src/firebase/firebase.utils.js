import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDZ9DBW7WeIHckBzEYHpoQp5jaU93NqeIU",
  authDomain: "e-commerce-e8b13.firebaseapp.com",
  projectId: "e-commerce-e8b13",
  storageBucket: "e-commerce-e8b13.appspot.com",
  messagingSenderId: "991240912412",
  appId: "1:991240912412:web:f92576f0a72417832769d9",
  measurementId: "G-814ZJ3DEKF"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;