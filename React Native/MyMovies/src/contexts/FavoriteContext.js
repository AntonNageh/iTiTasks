
import  { createContext, useContext, useState, useEffect } from 'react';
import { favoritesService } from '../services/favoriteService';
import { useAuth } from '../hooks/useAuth';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  // Load favorites when user changes
  useEffect(() => {
    if (user?.uid) {
      loadFavorites();
    } else {
      setFavorites([]);
    }
  }, [user?.uid]);

  const loadFavorites = async () => {
    if (!user?.uid) return;
    
    setLoading(true);
    try {
      const userFavorites = await favoritesService.getUserFavorites(user.uid);
      setFavorites(userFavorites);
    } catch (error) {
      console.error('Error loading favorites:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToFavorites = async (movie) => {
    if (!user?.uid) return false;
    
    try {
      const success = await favoritesService.addToFavorites(user.uid, movie);
      if (success) {
        // Refresh favorites list
        await loadFavorites(); 
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error adding to favorites:', error);
      return false;
    }
  };

  const removeFromFavorites = async (movieId) => {
    if (!user?.uid) return false;
    
    try {
      const success = await favoritesService.removeFromFavorites(user.uid, movieId);
      if (success) {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error removing from favorites:', error);
      return false;
    }
  };

  const toggleFavorite = async (movie) => {
    if (!user?.uid) return false;
    
    const isCurrentlyFavorite = isInFavorites(movie.id);
    
    if (isCurrentlyFavorite) {
      return await removeFromFavorites(movie.id);
    } else {
      return await addToFavorites(movie);
    }
  };

  const isInFavorites = (movieId) => {
    return favorites.some(movie => movie.id === movieId);
  };

  const getFavoritesCount = () => {
    return favorites.length;
  };

  const value = {
    favorites,
    loading,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isInFavorites,
    getFavoritesCount,
    loadFavorites
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};