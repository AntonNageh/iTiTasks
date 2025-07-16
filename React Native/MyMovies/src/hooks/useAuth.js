import { useState, useEffect } from 'react';
import {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithCredential,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../firebase';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';
import { Platform } from 'react-native';

// Complete the auth session on app load
WebBrowser.maybeCompleteAuthSession();

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create proper redirect URI
  // const redirectUri = AuthSession.makeRedirectUri({
  //   useProxy: true,
  //   path: 'redirect',
  // });
  const redirectUri = 'https://auth.expo.io/@anton31/mymovies';

  console.log('Redirect URI:', redirectUri); // Debug log

  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: '949011087583-7lkeig0lkbirjl79uq7tl5el63v9g0p6.apps.googleusercontent.com',
    iosClientId: 'your-ios-client-id.googleusercontent.com', // Replace with actual iOS client ID
    androidClientId: '949011087583-f9opafdrl59bro98ablodl5di704tkkt.apps.googleusercontent.com',
    redirectUri,
    scopes: ['profile', 'email', 'openid'], // Add 'openid' scope
    additionalParameters: {
      response_type: 'id_token token', // Request both id_token and access_token
    },
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Handle Google Auth response
  useEffect(() => {
    if (response?.type === 'success') {
      console.log('Auth response params:', response.params); // Debug log
      
      const { id_token, access_token } = response.params;
      
      if (!id_token) {
        console.error('No id_token received from Google');
        console.log('Available params:', Object.keys(response.params));
        
        // Alternative: Try to get user info with access_token and create a custom token
        if (access_token) {
          handleAccessTokenAuth(access_token);
        }
        return;
      }

      try {
        // Create credential with both tokens
        const credential = GoogleAuthProvider.credential(id_token, access_token);
        
        signInWithCredential(auth, credential)
          .then((result) => {
            console.log('Firebase sign-in successful:', result.user.email);
          })
          .catch((error) => {
            console.error('Firebase Auth Error:', error);
          });
      } catch (error) {
        console.error('Credential creation error:', error);
      }
    } else if (response?.type === 'error') {
      console.error('Google Auth Error:', response.error);
    } else if (response?.type === 'cancel') {
      console.log('User cancelled Google sign-in');
    }
  }, [response]);

  // Alternative method to handle access_token only
  const handleAccessTokenAuth = async (accessToken) => {
    try {
      // Fetch user info from Google API
      const userInfoResponse = await fetch(
        `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${accessToken}`
      );
      const userInfo = await userInfoResponse.json();
      console.log('User info from Google API:', userInfo);
      
      // Try to create a custom credential using the access token
      try {
        // Create a Google credential with just the access token
        const credential = GoogleAuthProvider.credential(null, accessToken);
        
        const result = await signInWithCredential(auth, credential);
        console.log('Firebase sign-in successful with access_token:', result.user.email);
      } catch (firebaseError) {
        console.log('Firebase credential failed, trying alternative method:', firebaseError.message);
        
        // Alternative: Use Firebase's signInWithPopup for web
        if (Platform.OS === 'web') {
          try {
            const provider = new GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            
            const result = await signInWithPopup(auth, provider);
            console.log('Firebase popup sign-in successful:', result.user.email);
          } catch (popupError) {
            console.error('Popup sign-in also failed:', popupError);
            
            // As a last resort, you might need to implement custom authentication
            // or use a different Firebase auth method
            console.log('Consider implementing custom token authentication');
          }
        }
      }
      
    } catch (error) {
      console.error('Error in handleAccessTokenAuth:', error);
    }
  };

  const signInWithGoogle = async () => {
      console.log('Redirect URI:', redirectUri); // Debug log

    try {
      console.log('Starting Google sign-in...');
      
      // For web, try Firebase's built-in popup first
      if (Platform.OS === 'web') {
        try {
          const provider = new GoogleAuthProvider();
          provider.addScope('profile');
          provider.addScope('email');
          
          const result = await signInWithPopup(auth, provider);
          console.log('Firebase popup sign-in successful:', result.user.email);
          return { type: 'success', user: result.user };
        } catch (popupError) {
          console.log('Popup failed, falling back to expo auth session:', popupError.message);
          // Fall through to expo auth session
        }
      }
      
      // Use expo auth session (for mobile or as web fallback)
      const result = await promptAsync();
      console.log('Prompt result:', result);
      return result;
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      console.log('User signed out successfully');
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

const signUpWithGoogle = async () => {
    console.log('Redirect URI:', redirectUri); // Debug log
  try {
    const result = await promptAsync();
    if (result.type === 'success') {
      const { id_token, access_token } = result.params;
      const credential = GoogleAuthProvider.credential(id_token, access_token);
      
      const userCredential = await signInWithCredential(auth, credential);
      
      // Create user document if this is a new user
      await createUserDocument(userCredential.user);
      console.log('Google sign-up successful:', userCredential.user);

    } else {
      console.error('Google sign-up error:', result.error);
    }
  } catch (error) {
    console.error('Google sign-up error:', error);
    throw error; // Re-throw so handleGoogleSignUp can catch it
  }
};
  return {
    user,
    loading,
    signInWithGoogle,
    logout,
    signUpWithGoogle
  };
};