import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBzWPqEy63N9w83a0MVLriU2Iu4sFgZLeM",
  authDomain: "fbmessage-8f0db.firebaseapp.com",
  projectId: "fbmessage-8f0db",
  storageBucket: "fbmessage-8f0db.appspot.com",
  messagingSenderId: "750107158065",
  appId: "1:750107158065:web:61c62dd4cab222626b9710",
  measurementId: "G-636JQ1HRZE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

export { db };
