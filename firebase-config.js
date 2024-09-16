// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyBUuwjJ5p6Rccy-VUuUTKrJCv50pKldstE",
  authDomain: "authfirebase-9d917.firebaseapp.com",
  databaseURL: "https://authfirebase-9d917-default-rtdb.firebaseio.com",
  projectId: "authfirebase-9d917",
  storageBucket: "authfirebase-9d917.appspot.com",
  messagingSenderId: "204261408846",
  appId: "1:204261408846:web:75d95e43ea2444a4b1831f"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Realtime Database
const db = firebase.database();
