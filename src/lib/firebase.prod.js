import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed';

const config = {
  apiKey: "AIzaSyCwfFuj8erx21h1W7bUvlPLl8dUUmrGxW8",
  authDomain: "masn-adf14.firebaseapp.com",
  projectId: "masn-adf14",
  storageBucket: "masn-adf14.appspot.com",
  messagingSenderId: "248753456223",
  appId: "1:248753456223:web:784cda0294025072e347ea"
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };
