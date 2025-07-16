import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

// Function to create user document in Firestore
export const createUserDocument = async (user) => {
  if (!user) return;
  
  const userDocRef = doc(db, 'users', user.uid);
  const userSnapshot = await getDoc(userDocRef);
  
  // Only create if document doesn't exist
  if (!userSnapshot.exists()) {
    const { displayName, email, uid } = user;
    const createdAt = new Date();
    
    try {
      await setDoc(userDocRef, {
        displayName: displayName || 'Anonymous User',
        email: email || '',
        uid,
        createdAt
      });
      console.log('User document created successfully');
    } catch (error) {
      console.log('Error creating user document:', error);
    }
  }
};