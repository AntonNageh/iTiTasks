import { FlatList, Text, View, TouchableOpacity, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export default function ColorBar({ onPress }) {
  const Colors = [
    { key: '1', name: 'Red', hex: '#FF0000' },
    { key: '2', name: 'Green', hex: '#00FF00' },
    { key: '3', name: 'Blue', hex: '#0000FF' },
    { key: '4', name: 'Orange', hex: '#FFA500' },
    { key: '5', name: 'Cyan', hex: '#00FFFF' },
    { key: '6', name: 'Magenta', hex: '#FF00FF' },
    { key: '7', name: 'Yellow', hex: '#FFFF00' },
    { key: '8', name: 'Purple', hex: '#800080' },
    { key: '9', name: 'Brown', hex: '#A52A2A' },
    { key: '10', name: 'Pink', hex: '#FFC0CB' },
    { key: '11', name: 'Lime', hex: '#00FF00' },
    { key: '12', name: 'Teal', hex: '#008080' },
    { key: '13', name: 'Navy', hex: '#000080' },
    { key: '14', name: 'Gray', hex: '#808080' },
    { key: '15', name: 'Black', hex: '#000000' },
    { key: '16', name: 'White', hex: '#FFFFFF' },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={Colors}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.bar, { backgroundColor: item.hex }]}
            activeOpacity={0.9}
            onPress={() => console.log(item.name + ' ' + item.hex)}
          >
            <Text
              style={[
                styles.text,
                { color: item.name === 'White' ? '#333' : 'white' }
              ]}
            >
              {item.name} ({item.hex})
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 30,
  },
  bar: {
    width: width - 48,
    paddingVertical: 18,
    marginVertical: 8,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    textShadowColor: 'rgba(0,0,0,0.15)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 0.5,
  },
};
