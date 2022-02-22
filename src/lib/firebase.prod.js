import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import {seedDatabase} from '../seed';

const config = {
  apiKey: "AIzaSyBXh8J6TxuXyA45O8lYORG0wtJpbXJFXH8",
  authDomain: "block-master-bd225.firebaseapp.com",
  projectId: "block-master-bd225",
  storageBucket: "block-master-bd225.appspot.com",
  messagingSenderId: "64749229809",
  appId: "1:64749229809:web:82a5b961e9aa4e960b3b50"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
