import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  FlatList,
  Share,
  Linking,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useAuth } from "../hooks/useAuth";
import { useFavorites } from "../contexts/FavoriteContext";

const API_KEY = "2bd2c1f463c066ba65b8b0f4a4f62200";
const API_URL = "https://api.themoviedb.org/3";
const { width, height } = Dimensions.get("window");

export default function MovieDetails({ route, navigation }) {
  const { movie } = route.params;
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = useAuth();
  const { toggleFavorite, isInFavorites } = useFavorites();
  const isFavorite = isInFavorites(movie.id);

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    try {
      const [
        detailsResponse,
        creditsResponse,
        videosResponse,
        similarResponse,
      ] = await Promise.all([
        fetch(`${API_URL}/movie/${movie.id}?api_key=${API_KEY}`),
        fetch(`${API_URL}/movie/${movie.id}/credits?api_key=${API_KEY}`),
        fetch(`${API_URL}/movie/${movie.id}/videos?api_key=${API_KEY}`),
        fetch(`${API_URL}/movie/${movie.id}/similar?api_key=${API_KEY}`),
      ]);

      const details = await detailsResponse.json();
      const credits = await creditsResponse.json();
      const videos = await videosResponse.json();
      const similar = await similarResponse.json();

      setMovieDetails(details);
      setCast(credits.cast.slice(0, 10));
      setTrailers(
        videos.results.filter((video) => video.type === "Trailer").slice(0, 3)
      );
      setSimilarMovies(similar.results.slice(0, 10));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movie details:", error);
      setLoading(false);
    }
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out this movie: ${movie.title}\n\nRating: ${movie.vote_average}/10\n\n${movie.overview}`,
        title: movie.title,
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const handleFavoriteToggle = async () => {
    if (!auth.user) {
      // Redirect to login if not authenticated
      navigation.navigate("Auth");
      return;
    }

    await toggleFavorite(movie);
  };

  const handleWatchTrailer = (trailer) => {
    const url = `https://www.youtube.com/watch?v=${trailer.key}`;
    Linking.openURL(url);
  };

  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const formatBudget = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    }
    return `$${(amount / 1000).toFixed(0)}K`;
  };

  const renderCastMember = ({ item }) => (
    <View style={styles.castCard}>
      <Image
        source={{
          uri: item.profile_path
            ? `https://image.tmdb.org/t/p/w200${item.profile_path}`
            : "https://via.placeholder.com/200x300/333/fff?text=No+Image",
        }}
        style={styles.castImage}
      />
      <Text style={styles.castName} numberOfLines={1}>
        {item.name}
      </Text>
      <Text style={styles.castCharacter} numberOfLines={1}>
        {item.character}
      </Text>
    </View>
  );

  const renderSimilarMovie = ({ item }) => (
    <TouchableOpacity
      style={styles.similarCard}
      onPress={() => navigation.push("MovieDetails", { movie: item })}
    >
      <Image
        source={{
          uri: item.poster_path
            ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
            : "https://via.placeholder.com/300x450/333/fff?text=No+Image",
        }}
        style={styles.similarPoster}
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={styles.similarGradient}
      >
        <Text style={styles.similarTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.similarRating}>
          ⭐ {item.vote_average.toFixed(1)}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />
        <Text style={styles.loadingText}>Loading Movie Details...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View style={styles.heroContainer}>
          <Image
            source={{
              uri: movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
                : `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
            style={styles.backdropImage}
          />
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.7)", "#0a0a0a"]}
            style={styles.heroGradient}
          >
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                });
              }}
            >
              <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>

            <View style={styles.heroActions}>
              <TouchableOpacity
                style={[styles.actionButton, styles.favoriteButton]}
                onPress={handleFavoriteToggle}
              >
                <Text style={styles.actionButtonText}>
                  {isFavorite ? "❤️" : "🤍"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.actionButton, styles.shareButton]}
                onPress={handleShare}
              >
                <Text style={styles.actionButtonText}>📤</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>

        {/* Movie Info */}
        <View style={styles.movieInfoContainer}>
          <View style={styles.movieHeader}>
            <Image
              source={{
                uri: movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  : "https://via.placeholder.com/300x450/333/fff?text=No+Image",
              }}
              style={styles.posterImage}
            />

            <View style={styles.movieInfo}>
              <Text style={styles.movieTitle}>{movie.title}</Text>
              <Text style={styles.movieYear}>
                {new Date(movie.release_date).getFullYear()}
              </Text>

              <View style={styles.ratingContainer}>
                <View style={styles.ratingBadge}>
                  <Text style={styles.ratingText}>
                    ⭐ {movie.vote_average.toFixed(1)}
                  </Text>
                </View>
                <Text style={styles.voteCount}>
                  ({movie.vote_count.toLocaleString()} votes)
                </Text>
              </View>

              {movieDetails && (
                <View style={styles.movieMeta}>
                  <Text style={styles.metaText}>
                    {formatRuntime(movieDetails.runtime)}
                  </Text>
                  <Text style={styles.metaDivider}>•</Text>
                  <Text style={styles.metaText}>
                    {movieDetails.genres.map((g) => g.name).join(", ")}
                  </Text>
                </View>
              )}
            </View>
          </View>

          {/* Overview */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Overview</Text>
            <Text style={styles.overview}>{movie.overview}</Text>
          </View>

          {/* Movie Stats */}
          {movieDetails && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Details</Text>
              <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                  <Text style={styles.statLabel}>Budget</Text>
                  <Text style={styles.statValue}>
                    {movieDetails.budget > 0
                      ? formatBudget(movieDetails.budget)
                      : "N/A"}
                  </Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statLabel}>Revenue</Text>
                  <Text style={styles.statValue}>
                    {movieDetails.revenue > 0
                      ? formatBudget(movieDetails.revenue)
                      : "N/A"}
                  </Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statLabel}>Status</Text>
                  <Text style={styles.statValue}>{movieDetails.status}</Text>
                </View>
              </View>
            </View>
          )}

          {/* Trailers */}
          {trailers.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>🎬 Trailers</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {trailers.map((trailer, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.trailerButton}
                    onPress={() => handleWatchTrailer(trailer)}
                  >
                    <Text style={styles.trailerButtonText}>
                      ▶️ {trailer.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          )}

          {/* Cast */}
          {cast.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>🎭 Cast</Text>
              <FlatList
                data={cast}
                renderItem={renderCastMember}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.castList}
              />
            </View>
          )}

          {/* Similar Movies */}
          {similarMovies.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>🎯 Similar Movies</Text>
              <FlatList
                data={similarMovies}
                renderItem={renderSimilarMovie}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.similarList}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
  },
  scrollView: {
    flex: 1,
  },
  heroContainer: {
    position: "relative",
    height: height * 0.6,
  },
  backdropImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  heroGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "space-between",
  },
  backButton: {
    position: "absolute",
    top: StatusBar.currentHeight + 10 || 54,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  heroActions: {
    position: "absolute",
    top: StatusBar.currentHeight + 10 || 54,
    right: 20,
    flexDirection: "row",
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  actionButtonText: {
    fontSize: 18,
  },
  movieInfoContainer: {
    backgroundColor: "#0a0a0a",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  movieHeader: {
    flexDirection: "row",
    marginBottom: 20,
  },
  posterImage: {
    width: 120,
    height: 180,
    borderRadius: 12,
    marginRight: 20,
  },
  movieInfo: {
    flex: 1,
    justifyContent: "center",
  },
  movieTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  movieYear: {
    color: "#aaa",
    fontSize: 16,
    marginBottom: 12,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  ratingBadge: {
    backgroundColor: "#333",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 10,
  },
  ratingText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  voteCount: {
    color: "#aaa",
    fontSize: 12,
  },
  movieMeta: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  metaText: {
    color: "#aaa",
    fontSize: 14,
  },
  metaDivider: {
    color: "#aaa",
    fontSize: 14,
    marginHorizontal: 8,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  overview: {
    color: "#ccc",
    fontSize: 16,
    lineHeight: 24,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statItem: {
    flex: 1,
    alignItems: "center",
    padding: 15,
    backgroundColor: "#1a1a1a",
    marginHorizontal: 5,
    borderRadius: 10,
  },
  statLabel: {
    color: "#aaa",
    fontSize: 12,
    marginBottom: 5,
  },
  statValue: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  trailerButton: {
    backgroundColor: "#333",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    marginRight: 10,
  },
  trailerButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  castList: {
    paddingLeft: 5,
  },
  castCard: {
    width: 100,
    marginRight: 15,
    alignItems: "center",
  },
  castImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  castName: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 2,
  },
  castCharacter: {
    color: "#aaa",
    fontSize: 10,
    textAlign: "center",
  },
  similarList: {
    paddingLeft: 5,
  },
  similarCard: {
    width: 120,
    height: 180,
    marginRight: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  similarPoster: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  similarGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "50%",
    justifyContent: "flex-end",
    padding: 8,
  },
  similarTitle: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
  },
  similarRating: {
    color: "#fff",
    fontSize: 10,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#0a0a0a",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: "#fff",
    fontSize: 18,
  },
});
