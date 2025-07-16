import { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions, StatusBar } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import { useFavorites } from '../contexts/FavoriteContext';
import { LinearGradient } from 'expo-linear-gradient';

const API_KEY = '2bd2c1f463c066ba65b8b0f4a4f62200';
const API_URL = 'https://api.themoviedb.org/3';
const { width, height } = Dimensions.get('window');

export function HomeScreen({ navigation }) {
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = useAuth();
  const user = auth.user;
  const { getFavoritesCount } = useFavorites();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [popularResponse, trendingResponse] = await Promise.all([
          fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`),
          fetch(`${API_URL}/trending/movie/week?api_key=${API_KEY}`)
        ]);
        
        const popularData = await popularResponse.json();
        const trendingData = await trendingResponse.json();
        
        setMovies(popularData.results);
        setTrendingMovies(trendingData.results.slice(0, 10));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleMoviePress = (movie) => {
    navigation.navigate('MovieDetails', { movie });
  };

  const renderTrendingMovie = ({ item }) => (
    <TouchableOpacity
      style={styles.trendingCard}
      onPress={() => handleMoviePress(item)}
      activeOpacity={0.8}
    >
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.trendingPoster}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.trendingGradient}
      >
        <Text style={styles.trendingTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <View style={styles.ratingBadge}>
          <Text style={styles.rating}>⭐ {item.vote_average.toFixed(1)}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  const renderPopularMovie = ({ item }) => (
    <TouchableOpacity
      style={styles.popularCard}
      onPress={() => handleMoviePress(item)}
      activeOpacity={0.9}
    >
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.popularPoster}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.9)']}
        style={styles.popularGradient}
      >
        <View style={styles.popularInfo}>
          <Text style={styles.popularTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.popularYear}>
            {new Date(item.release_date).getFullYear()}
          </Text>
          <View style={styles.popularRatingContainer}>
            <View style={styles.popularRatingBadge}>
              <Text style={styles.popularRating}>
                ⭐ {item.vote_average.toFixed(1)}
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />
        <View style={styles.loadingContent}>
          <Text style={styles.loadingText}>Loading Movies...</Text>
          <View style={styles.loadingDots}>
            <View style={[styles.dot, styles.dot1]} />
            <View style={[styles.dot, styles.dot2]} />
            <View style={[styles.dot, styles.dot3]} />
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient colors={["#0a0a0a", "#1a1a1a"]} style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.greeting}>
              Hello {user?.displayName || "Movie Lover"}!{" "}
            </Text>
            <Text style={styles.subtitle}>What would you like to watch?</Text>
          </View>
          <View style={styles.headerActions}>
            <TouchableOpacity
              style={styles.favoritesButton}
              onPress={() => navigation.navigate("FavoritesScreen")}
            >
              <Text style={styles.favoritesButtonText}>❤️</Text>
              {user && getFavoritesCount() > 0 && (
                <View style={styles.favoritesCount}>
                  <Text style={styles.favoritesCountText}>
                    {getFavoritesCount()}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.profileButton}
              onPress={() => {
                user ? auth.logout() : navigation.navigate("Auth");
              }}
            >
              <Text style={styles.profileButtonText}>
                {user ? "Logout" : "Login"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Trending Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>🔥 Trending This Week</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.trendingList}
          >
            {trendingMovies.map((movie, index) => (
              <View key={`trending-${movie.id}`}>
                {renderTrendingMovie({ item: movie, index })}
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Popular Movies Section */}
        <ScrollView style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>🎬 Popular Movies</Text>
          </View>
          <View style={styles.popularGrid}>
            {movies.map((movie, index) => (
              <View key={`popular-${movie.id}`} style={styles.movieItem}>
                {renderPopularMovie({ item: movie, index })}
              </View>
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  header: {
    paddingTop: StatusBar.currentHeight || 44,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  favoritesButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  favoritesButtonText: {
    fontSize: 20,
  },
  favoritesCount: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#ff6b6b',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0a0a0a',
  },
  favoritesCountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  greeting: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    color: '#aaa',
    fontSize: 16,
  },
  profileButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  profileButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  trendingList: {
    paddingHorizontal: 15,
  },
  trendingCard: {
    width: width * 0.7,
    height: 280,
    marginHorizontal: 8,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  trendingPoster: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  trendingGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    justifyContent: 'flex-end',
    padding: 15,
  },
  trendingTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ratingBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  rating: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  // popularGrid: {
  //   paddingHorizontal: 15,
  //   paddingBottom: 20,
  // },
    popularGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 8,
    paddingVertical: 16,
    justifyContent: 'space-between',
  },
  popularRow: {
    justifyContent: 'space-between',
  },
  popularCard: {
    width: (width - 50) / 2,
    height: 280,
    marginBottom: 15,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#1a1a1a',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  popularPoster: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
  },
  popularGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40%',
    justifyContent: 'flex-end',
  },
  popularInfo: {
    padding: 12,
  },
  popularTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  popularYear: {
    color: '#aaa',
    fontSize: 12,
    marginBottom: 8,
  },
  popularRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  popularRatingBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  popularRating: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContent: {
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  loadingDots: {
    flexDirection: 'row',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginHorizontal: 4,
  },
  dot1: {
    opacity: 0.3,
  },
  dot2: {
    opacity: 0.6,
  },
  dot3: {
    opacity: 1,
  },
});