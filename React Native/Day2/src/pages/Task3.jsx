import { Button, Pressable, Text, View } from "react-native";
import Task from "../Components/Task";

export default function Task3({setPages}) {
  return (
    <View style={{flex:1,width: '100%', justifyContent:'center', alignItems:'center'}}>
      <Text style={{color: 'white'}}>Task 3</Text>
      <Task />
      <Pressable
        style={{
          backgroundColor: "#2196F3",
          padding: 10,
          marginTop: 30,
          width: '90%',
          marginBottom: 30,
          borderRadius: 5,
        }}
        onPress={() => setPages(0)}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Switch task</Text>
      </Pressable>
    </View>
  )
}
