import firebase from "firebase";
// import { initializeApp } from 'firebase/app';
// import firebase from "firebase/compat/app";



const firebaseConfig = {
    apiKey: "AIzaSyBz3ENGL_bE9d2fHfdDmr_UeoT6TR3Oeko",
    authDomain: "rn-sem5-project.firebaseapp.com",
    projectId: "rn-sem5-project",
    storageBucket: "rn-sem5-project.appspot.com",
    messagingSenderId: "129181324099",
    appId: "1:129181324099:web:fb15e1aadf92393f1195f6"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
