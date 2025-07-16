import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
        console.log("User authenticated:", user.uid);
      } else {
        console.log("No authenticated user");
      }
      setUser(user);
      setInitializing(false);
    });
    
    return unsubscribe;
  }, []);

  return { user, initializing };
}