import { Button, Pressable, Text, View } from "react-native";
import User from "../Components/User";


export default function Task2({setPages}) {
  return (
    <View style={{flex:1,width: '100%', justifyContent:'center', alignItems:'center'}}>
      <Text style={{color: 'white'}}>Task 2</Text>
      <User/>
       <Pressable
        style={{
          backgroundColor: "#2196F3",
          padding: 10,
          width: '90%',
          marginTop: 30,
          marginBottom: 30,
          borderRadius: 5,
        }}
        onPress={() => setPages(2)}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Switch task</Text>
      </Pressable>
    </View>
  )
}
