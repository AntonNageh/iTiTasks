import { useState } from 'react'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Form from './screens/form';
import Home from './screens/home';

function App() {
  const [data, setData] = useState([]);
  const [isForm, setIsForm] = useState(false);
  return (
    <>
    {
      data.length > 0 &&  isForm?
      <Home data ={data} setIsForm={setIsForm}/>
      :
      <Form data={data} setIsForm={setIsForm} setData={setData}/>
    }
    </>
  )
}

export default App
