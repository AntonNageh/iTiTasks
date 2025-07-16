// firebase.js - Expo-optimized approach
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const firebaseConfig = {
  apiKey: "AIzaSyDCF9cU3UCJwtMPFSeTtiRFc-XRrYGHPWY",
  authDomain: "newsapp-96d32.firebaseapp.com",
  projectId: "newsapp-96d32",
  storageBucket: "newsapp-96d32.firebasestorage.app",
  messagingSenderId: "554708122523",
  appId: "1:554708122523:web:882080f744d4c93419bf3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with Expo-specific configuration
let auth;

if (Platform.OS === 'web') {
  // For Expo Web
  auth = getAuth(app);
} else {
  // For Expo Go and Expo Dev Client (iOS/Android)
  try {
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage)
    });
  } catch (error) {
    // If already initialized (common in Expo development)
    if (error.code === 'auth/already-initialized') {
      auth = getAuth(app);
    } else {
      console.error('Expo Firebase Auth initialization error:', error);
      throw error;
    }
  }
}

// Initialize Firestore
const db = getFirestore(app);

export { auth, db };
export default app;