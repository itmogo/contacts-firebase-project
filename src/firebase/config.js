import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAFbqFPAZjCUBXbOTvGq4rxV8jV79dFTvs",
    authDomain: "contact-firebase-7e373.firebaseapp.com",
    projectId: "contact-firebase-7e373",
    storageBucket: "contact-firebase-7e373.appspot.com",
    messagingSenderId: "1065977572057",
    appId: "1:1065977572057:web:cbd3a3499c1a97899dacc8",
    measurementId: "G-2YVDX2TVRJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.firestore().settings({timestampsInSnapShots: true});


  export default firebase;
