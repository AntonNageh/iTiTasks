
import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  arrayUnion,  
} from 'firebase/firestore';
import { db } from '../firebase'; 

export const favoritesService = {
  // Get user's favorite movies
  async getUserFavorites(userId) {
    try {
      const userDoc = await getDoc(doc(db, 'users', userId));
      if (userDoc.exists()) {
        return userDoc.data().favorites || [];
      }
      return [];
    } catch (error) {
      console.error('Error getting user favorites:', error);
      return [];
    }
  },

  // Add movie to favorites
  async addToFavorites(userId, movie) {
    try {
      const userRef = doc(db, 'users', userId);
      const userDoc = await getDoc(userRef);
      
      // Create movie object with essential data
      const movieData = {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path,
        overview: movie.overview,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
        addedAt: new Date().toISOString()
      };

      if (userDoc.exists()) {
        // Update existing document
        await updateDoc(userRef, {
          favorites: arrayUnion(movieData)
        });
      } else {
        // Create new document
        await setDoc(userRef, {
          favorites: [movieData],
          createdAt: new Date().toISOString()
        });
      }
      
      return true;
    } catch (error) {
      console.error('Error adding to favorites:', error);
      return false;
    }
  },

  // Remove movie from favorites
  async removeFromFavorites(userId, movieId) {
    try {
      const userRef = doc(db, 'users', userId);
      const userDoc = await getDoc(userRef);
      
      if (userDoc.exists()) {
        const favorites = userDoc.data().favorites || [];
        const updatedFavorites = favorites.filter(movie => movie.id !== movieId);
        
        await updateDoc(userRef, {
          favorites: updatedFavorites
        });
        
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error removing from favorites:', error);
      return false;
    }
  },

  // Check if movie is in favorites
  async isMovieInFavorites(userId, movieId) {
    try {
      const favorites = await this.getUserFavorites(userId);
      return favorites.some(movie => movie.id === movieId);
    } catch (error) {
      console.error('Error checking favorite status:', error);
      return false;
    }
  },

  // Get favorites count
  async getFavoritesCount(userId) {
    try {
      const favorites = await this.getUserFavorites(userId);
      return favorites.length;
    } catch (error) {
      console.error('Error getting favorites count:', error);
      return 0;
    }
  }
};