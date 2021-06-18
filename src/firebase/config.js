import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCwJ_NSB0qqZDKPLyvGL3-MkvL1y8lKukY",
    authDomain: "codetrainproject-af048.firebaseapp.com",
    projectId: "codetrainproject-af048",
    storageBucket: "codetrainproject-af048.appspot.com",
    messagingSenderId: "234987614181",
    appId: "1:234987614181:web:d9fc6abe98cb6cca77890c",
    measurementId: "G-Q9ZLHFNJ2L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapShots: true});


  export default firebase;
