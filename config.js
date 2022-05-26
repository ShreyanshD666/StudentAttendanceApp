import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC9L_HsTa7g4CxnTXeRj9biHfAGVxI1zCM",
    authDomain: "schoolattendance-f7797.firebaseapp.com",
    databaseURL: "https://schoolattendance-f7797-default-rtdb.firebaseio.com",
    projectId: "schoolattendance-f7797",
    storageBucket: "schoolattendance-f7797.appspot.com",
    messagingSenderId: "797230933556",
    appId: "1:797230933556:web:eb493925d782f7db3ecc61"
  };

// Initialize Firebase

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export default firebase.database();
