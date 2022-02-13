import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed';

const config = {
  apiKey: "AIzaSyBZi9No5F1otng4N56ERnuTfAWzJQGaaZA",
  authDomain: "prueba-a6549.firebaseapp.com",
  projectId: "prueba-a6549",
  storageBucket: "prueba-a6549.appspot.com",
  messagingSenderId: "798198946551",
  appId: "1:798198946551:web:96f4fceb8eebaf5e9711f2"
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };
