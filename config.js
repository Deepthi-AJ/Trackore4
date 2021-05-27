import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyD2sjGbUrA734yncP8AwT6J2j81fkZpBn4",
    authDomain: "trackore-bfaca.firebaseapp.com",
    projectId: "trackore-bfaca",
    storageBucket: "trackore-bfaca.appspot.com",
    messagingSenderId: "22363269142",
    appId: "1:22363269142:web:6cc53fc4efda3627b8ad37"
  };
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
export default firebase.firestore() 
  