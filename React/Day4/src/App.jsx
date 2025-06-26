
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy } from 'react'
import { Suspense } from 'react'


const Home =lazy(()=>import("./pages/Home"))
const Movie =lazy(()=>import("./pages/Movie"))
const Favorite =lazy(()=>import("./pages/FavoriteMovies"))
const Series =lazy(()=>import("./pages/Series"))
const Layout =lazy(()=>import("./pages/Layout"))
const NotFound =lazy(()=>import("./pages/NotFound"))
const SignIn =lazy(()=>import("./components/SignIn"))
const SignUp =lazy(()=>import("./components/SignUp"))

import './App.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import MovieDetail from './pages/MovieDetail'
import Form from './pages/Form'
import Profile from './pages/Profile'

function App() {

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />, children : [

      {
        index:true,
        element:<Form />
      },
      {
        path:"signin",
        element:<SignIn />
      },
      {
        path:"signup",
        element:<SignUp />
      },
      {
        path:"profile",
        element:<Profile />
      },
      {
        path:"Home",
        element:<Home />
      },
      {
        path:"Series",
        element:<Series/>
      },
      {
        path:"Movie",
        element:<Movie/>
      },
      {
        path:"favorites",
        element:<Favorite />
      },
      {
        path:"movies/:id",
        element:<MovieDetail />
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
     <Provider store={store}>
      <Suspense fallback={<div style={{backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100vh'}}>loading......</div>}>
        {/* <UserContextProvider>  */}
          <RouterProvider router={router}></RouterProvider>
        {/* </UserContextProvider> */}
      </Suspense>
     </Provider>
    </>
  )
}

export default App
