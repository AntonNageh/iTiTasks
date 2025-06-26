import { Pressable, Text, View } from "react-native";
import ColorBar from "../Components/ColorBar";

export default function Task1({ setPages }) {
  return (
    <View>
      <Text style={{ color: 'white' }}>Task 1</Text>
      <ColorBar />
      <Pressable
        style={{
          backgroundColor: "#2196F3",
          padding: 10,
          marginTop: 30,
          marginBottom: 30,
          borderRadius: 5,
        }}
        onPress={() => setPages(1)}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Switch task</Text>
      </Pressable>
    </View>
  );
}
