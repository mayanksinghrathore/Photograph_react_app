import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDrRl5fqnbE5RtlewdHBwPMoNoL_kAVjg4",
  authDomain: "photograph-50565.firebaseapp.com",
  projectId: "photograph-50565",
  storageBucket: "photograph-50565.appspot.com",
  messagingSenderId: "304637270344",
  appId: "1:304637270344:web:85df7f9cfba747fa413b7d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };