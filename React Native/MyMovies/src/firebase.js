
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyBv1Ifc5mME5HV7YvE72ccbmdKQ4-n-4c8",
  authDomain: "mymovies-5a208.firebaseapp.com",
  projectId: "mymovies-5a208",
  storageBucket: "mymovies-5a208.firebasestorage.app",
  messagingSenderId: "949011087583",
  appId: "1:949011087583:web:67bbbcbf278a86d400e96a"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 
export const googleProvider = new GoogleAuthProvider();