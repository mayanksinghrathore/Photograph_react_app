import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAoo__KJWKxbwkjTLUHEl8jJF4UtD2B3kA",
  authDomain: "photograph-af70f.firebaseapp.com",
  projectId: "photograph-af70f",
  storageBucket: "photograph-af70f.appspot.com",
  messagingSenderId: "668261535130",
  appId: "1:668261535130:web:3044d637d9fcf60f5f7e23"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };