import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBSmB2lppxy9ZGzviKk71X_os0bNGrbLNw",
    authDomain: "proyectologinyfirebase.firebaseapp.com",
    projectId: "proyectologinyfirebase",
    storageBucket: "proyectologinyfirebase.appspot.com",
    messagingSenderId: "41640518813",
    appId: "1:41640518813:web:488771c81da35079d6e074"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

export default {
  firebase,
  db
}