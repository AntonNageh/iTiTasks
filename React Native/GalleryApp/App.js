import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Dimensions, Pressable } from 'react-native';
import { Button } from 'react-native-paper';

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
];

const { height, width } = Dimensions.get('screen');
export default function App() {
  
  const [showGallery, setShowGallery] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!showGallery) {
    return (
      <ImageBackground
        source={{uri:"https://img.freepik.com/free-photo/sad-contemplative-person-near-lake_23-2150420706.jpg?semt=ais_hybrid&w=740"}}
        style={styles.container}
        resizeMode="cover"
      >
        <View style={styles.welcomeBox}>
          <Text style={styles.welcomeText}>Welcome to my Gallery App</Text>
          <Button
            mode="contained"
            onPress={() => setShowGallery(true)}
          >
            Continue
          </Button>
        </View>
      </ImageBackground>
    );
  }

  return (
    <View style={styles.container}>
      <Button onPress={
        () => {
         selectedIndex === images.length - 1 ? setSelectedIndex(0) : setSelectedIndex(selectedIndex + 1) 
        }
        }>
      <Image
        source={{ uri: images[selectedIndex] }}
        style={styles.mainImage}
        resizeMode="cover"
        height={height}
        />
      </Button>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 10 }}
      >
        {images.map((img, idx) => (
          <Pressable key={idx} onPress={() => setSelectedIndex(idx)}>
            <Image
              source={{ uri: img }}
              style={[
                styles.thumbnail,
                selectedIndex === idx && { borderColor: 'blue', borderWidth: 2 }
              ]}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeBox: {
    marginBottom: 50,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 50,
    padding: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    color: 'white',
    fontSize: 20,
    marginBottom: 60,
  },
  mainImage: {
    width: width * 1,
    height: height * 0.5,
    borderRadius: 20,
    marginBottom: 30,
  },
  scrollView: {
    maxHeight: 100,
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginHorizontal: 8,
  },
});
