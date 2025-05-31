
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy } from 'react'
import { Suspense } from 'react'
import UserContextProvider from './context/UserContextProvider'


const Home =lazy(()=>import("./pages/Home"))
const Contact =lazy(()=>import("./pages/Contact"))
const Movie =lazy(()=>import("./pages/Movie"))
const About =lazy(()=>import("./pages/About"))
const Layout =lazy(()=>import("./pages/Layout"))
const NotFound =lazy(()=>import("./pages/NotFound"))

import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />, children : [
      {
        index:true,
        element:<Home />
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"movies/:id",
        element:<Movie />
      },
      {
        path:"*",
        element:<NotFound/>
      }
    ]
  }
])
  return (
    <>
    <Suspense fallback={<div style={{backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100vh'}}>loading......</div>}>
     <UserContextProvider> 
      <RouterProvider router={router}></RouterProvider>
     </UserContextProvider>
     </Suspense>
    </>
  )
}

export default App
