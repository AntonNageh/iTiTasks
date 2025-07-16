import { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./src/firebase";
import { createUserDocument } from "./src/services/userService";
import { Text, StyleSheet } from 'react-native';
import { HomeScreen } from "./src/pages/Homescreen";
import { LoginScreen } from "./src/components/LoginScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MovieDetails from './src/pages/MovieDetails';
import FavoritesScreen from './src/pages/FavoritesScreen';
import { FavoritesProvider } from './src/contexts/FavoriteContext';
function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const Stack = createStackNavigator();

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // User is signed in
        setUser(currentUser);
        // Create user document in Firestore if it doesn't exist
        await createUserDocument(currentUser);
      } else {
        // User is signed out
        setUser(null);
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <FavoritesProvider>
      <NavigationContainer style={{ width: "100%", height: "100%" }}>
        <Stack.Navigator>
          {user ? (
            <Stack.Screen name="Home" component={HomeScreen} />
          ) : (
            <Stack.Screen
              name="Auth"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
          )}
          <Stack.Screen name="MovieDetails" component={MovieDetails} />
          <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default App;