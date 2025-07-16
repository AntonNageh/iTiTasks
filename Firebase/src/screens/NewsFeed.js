import  { useState, useEffect, useRef } from 'react';
import { 
  View, 
  FlatList, 
  TouchableOpacity, 
  TextInput, 
  StyleSheet, 
  Text, 
  SafeAreaView,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { db, auth } from '../firebase';
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [commentText, setCommentText] = useState({});
  const [loading, setLoading] = useState(true);
  const [posting, setPosting] = useState(false);
  const [expandedComments, setExpandedComments] = useState({});
  const unsubscribeRef = useRef(null);

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const postsData = [];
        snapshot.forEach(doc => {
          postsData.push({ id: doc.id, ...doc.data() });
        });
        setPosts(postsData);
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching posts:', error);
        setLoading(false);
        if (error.code === 'permission-denied') {
          Alert.alert('Permission Error', 'Unable to load posts. Please check your connection.');
        }
      }
    );
    
    unsubscribeRef.current = unsubscribe;
    
    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
      }
    };
  }, []);

  const handlePost = async () => {
    if (!newPost.trim()) {
      Alert.alert('Empty Post', 'Please write something before posting.');
      return;
    }
    
    setPosting(true);
    try {
      await addDoc(collection(db, 'posts'), {
        content: newPost,
        author: auth.currentUser.uid,
        authorName: auth.currentUser.displayName || auth.currentUser.email || 'User',
        likes: [],
        comments: [],
        createdAt: serverTimestamp()
      });
      setNewPost('');
    } catch (error) {
      console.error('Error posting:', error);
      Alert.alert('Error', 'Failed to post. Please try again.');
    } finally {
      setPosting(false);
    }
  };

  const handleLike = async (postId, userId) => {
    try {
      const postRef = doc(db, 'posts', postId);
      const post = posts.find(p => p.id === postId);
      
      if (post?.likes?.includes(userId)) {
        await updateDoc(postRef, { likes: arrayRemove(userId) });
      } else {
        await updateDoc(postRef, { likes: arrayUnion(userId) });
      }
    } catch (error) {
      console.error('Error liking post:', error);
      Alert.alert('Error', 'Failed to like post. Please try again.');
    }
  };

  const handleComment = async (postId) => {
    if (!commentText[postId]?.trim()) return;
    
    try {
      const newComment = {
        text: commentText[postId],
        author: auth.currentUser.uid,
        authorName: auth.currentUser.displayName || auth.currentUser.email || 'User',
        createdAt: Date.now()
      };
      
      await updateDoc(doc(db, 'posts', postId), {
        comments: arrayUnion(newComment)
      });
      setCommentText({...commentText, [postId]: ''});
    } catch (error) {
      console.error('Error commenting:', error);
      Alert.alert('Error', 'Failed to add comment. Please try again.');
    }
  };

  const handleLogout = async () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',

          onPress: async () => {
            try {
              if (unsubscribeRef.current) {
                unsubscribeRef.current();
                unsubscribeRef.current = null;
              }
              await signOut(auth);
            } catch (error) {
              console.error('Error signing out:', error);
              Alert.alert('Error', 'Failed to logout. Please try again.');
            }
          }
        }
      ]
    );
  };

  const toggleComments = (postId) => {
    setExpandedComments(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return 'Just now';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  const renderPost = ({ item }) => {
    const isLiked = item.likes?.includes(auth.currentUser?.uid);
    const commentsCount = item.comments?.length || 0;
    const showComments = expandedComments[item.id];

    return (
      <View style={styles.postCard}>
        <View style={styles.postHeader}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {(item.authorName || 'U')[0].toUpperCase()}
            </Text>
          </View>
          <View style={styles.postHeaderText}>
            <Text style={styles.authorName}>{item.authorName || 'User'}</Text>
            <Text style={styles.timestamp}>{formatTime(item.createdAt)}</Text>
          </View>
        </View>

        <Text style={styles.postContent}>{item.content}</Text>

        <View style={styles.postActions}>
          <TouchableOpacity 
            style={[styles.actionButton, isLiked && styles.actionButtonLiked]}
            onPress={() => handleLike(item.id, auth.currentUser.uid)}
          >
            <Text style={[styles.actionText, isLiked && styles.actionTextLiked]}>
              ❤️ {item.likes?.length || 0}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => toggleComments(item.id)}
          >
            <Text style={styles.actionText}>💬 {commentsCount}</Text>
          </TouchableOpacity>
        </View>

        {showComments && (
          <View style={styles.commentsSection}>
            {item.comments?.map((comment, index) => (
              <View key={index} style={styles.comment}>
                <View style={styles.commentAvatar}>
                  <Text style={styles.commentAvatarText}>
                    {(comment.authorName || 'U')[0].toUpperCase()}
                  </Text>
                </View>
                <View style={styles.commentContent}>
                  <Text style={styles.commentAuthor}>{comment.authorName || 'User'}</Text>
                  <Text style={styles.commentText}>{comment.text}</Text>
                </View>
              </View>
            ))}
            
            <View style={styles.addComment}>
              <TextInput
                placeholder="Write a comment..."
                value={commentText[item.id] || ''}
                onChangeText={text => setCommentText({...commentText, [item.id]: text})}
                style={styles.commentInput}
                multiline
              />
              <TouchableOpacity 
                style={styles.commentButton}
                onPress={() => handleComment(item.id)}
              >
                <Text style={styles.commentButtonText}>Post</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.loadingText}>Loading feed...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Social Feed</Text>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>

        {/* Create Post */}
        <View style={styles.createPostCard}>
          <TextInput
            placeholder="What's on your mind?"
            value={newPost}
            onChangeText={setNewPost}
            style={styles.createPostInput}
            multiline
            maxLength={500}
          />
          <View style={styles.createPostFooter}>
            <Text style={styles.charCount}>{newPost.length}/500</Text>
            <TouchableOpacity 
              style={[styles.postButton, posting && styles.postButtonDisabled]}
              onPress={handlePost}
              disabled={posting}
            >
              {posting ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text style={styles.postButtonText}>Post</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Posts Feed */}
        <FlatList
          data={posts}
          keyExtractor={item => item.id}
          renderItem={renderPost}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.feedContainer}
          refreshing={loading}
          onRefresh={() => {
            // Refresh functionality can be added here
          }}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No posts yet. Be the first to share!</Text>
            </View>
          }
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  logoutButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#FF3B30',
  },
  logoutText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  createPostCard: {
    backgroundColor: 'white',
    margin: 15,
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  createPostInput: {
    fontSize: 16,
    minHeight: 80,
    textAlignVertical: 'top',
    color: '#1A1A1A',
  },
  createPostFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E7',
  },
  charCount: {
    fontSize: 12,
    color: '#8E8E93',
  },
  postButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  postButtonDisabled: {
    backgroundColor: '#C7C7CC',
  },
  postButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  feedContainer: {
    paddingBottom: 20,
  },
  postCard: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  postHeaderText: {
    flex: 1,
  },
  authorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  timestamp: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 2,
  },
  postContent: {
    fontSize: 16,
    lineHeight: 22,
    color: '#1A1A1A',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  postActions: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: '#F2F2F7',
    marginRight: 12,
  },
  actionButtonLiked: {
    backgroundColor: '#FFE5E5',
  },
  actionText: {
    fontSize: 14,
    color: '#8E8E93',
    fontWeight: '500',
  },
  actionTextLiked: {
    color: '#FF3B30',
  },
  commentsSection: {
    padding: 15,
  },
  comment: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  commentAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#C7C7CC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  commentAvatarText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  commentContent: {
    flex: 1,
  },
  commentAuthor: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 2,
  },
  commentText: {
    fontSize: 14,
    color: '#1A1A1A',
    lineHeight: 20,
  },
  addComment: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#F2F2F7',
  },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E5E5E7',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    maxHeight: 80,
    fontSize: 14,
  },
  commentButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  commentButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  emptyText: {
    fontSize: 16,
    color: '#8E8E93',
    textAlign: 'center',
  },
});

export default NewsFeed;