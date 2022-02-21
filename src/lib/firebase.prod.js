import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import {seedDatabase} from '../seed';

const config = {
  apiKey: "AIzaSyA0kLa4R9Rz8xKvXXjnAfkTFnObAG9OsRk",
  authDomain: "local-d18df.firebaseapp.com",
  projectId: "local-d18df",
  storageBucket: "local-d18df.appspot.com",
  messagingSenderId: "90999257626",
  appId: "1:90999257626:web:a734659f6d59794b8d2fa3"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
