import { useState } from 'react';
import { View } from 'react-native';
import Task1 from './src/pages/Task1';
import Task2 from './src/pages/Task2';
import Task3 from './src/pages/Task3';
export default function App() {
  const [pages, setPages] = useState(0);
  return (
    <>
      {pages === 0 && (
        <View style={{flex:1, backgroundColor: 'black', justifyContent:'center', alignItems:'center'}}>
            <Task1 setPages={setPages}/>
        </View>
      )}
      {pages === 1 && (
        <View style={{flex:1, backgroundColor: '#f8f8f8', justifyContent:'center', alignItems:'center'}}>
            <Task2 setPages={setPages}/>
        </View>
      )}
      {pages === 2 && (
        <View style={{flex:1, backgroundColor: 'black', justifyContent:'center', alignItems:'center'}}>
            <Task3 setPages={setPages}/>
        </View>
      )}
    </>
    );
}