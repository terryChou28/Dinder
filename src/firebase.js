import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC3HeFqBbvw2sAGU6NgivO-r0wLSEXxFLY",
    authDomain: "tinder-clone-fff43.firebaseapp.com",
    projectId: "tinder-clone-fff43",
    storageBucket: "tinder-clone-fff43.appspot.com",
    messagingSenderId: "546209890288",
    appId: "1:546209890288:web:91f68f35fa5e536b4d6735",
    measurementId: "G-5ZV9S69E3C",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;