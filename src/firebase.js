import firebase from 'firebase';


const firebaseConfig = {
      apiKey: "AIzaSyBHfbnABbg5YG43j6ZGFyZEqjNx0d1U68Y",
    authDomain: "fbmessanger-3882f.firebaseapp.com",
    projectId: "fbmessanger-3882f",
    storageBucket: "fbmessanger-3882f.appspot.com",
    messagingSenderId: "186217026527",
    appId: "1:186217026527:web:e8fbf7b7d0a4c9be48aa6a",
    measurementId: "G-E3WQ0NLQZR"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

export { db };