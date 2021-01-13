import firebase from "firebase/app";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA8ug5YbhtU1z9PHiCliTzG8FLG6oEmzPY",
    authDomain: "clone-b6e81.firebaseapp.com",
    projectId: "clone-b6e81",
    storageBucket: "clone-b6e81.appspot.com",
    messagingSenderId: "157376352663",
    appId: "1:157376352663:web:f54e9873078e36c0a434d2",
    measurementId: "G-3YBHTD9JT2"
});

const auth = firebase.auth();

export { auth };



