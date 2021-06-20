import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDWZ2P7vtXmS4cCu1iVkflI-1F7CiXB-b0",
    authDomain: "contact-app-fe9a9.firebaseapp.com",
    projectId: "contact-app-fe9a9",
    storageBucket: "contact-app-fe9a9.appspot.com",
    messagingSenderId: "939923261724",
    appId: "1:939923261724:web:8f1258daad7ef99fc7d2d9",
    measurementId: "G-5WQDEPPP79"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapShots: true});


  export default firebase;
