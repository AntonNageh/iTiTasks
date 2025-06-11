import { useEffect, useState } from 'react';
import { SignedOut, SignIn, SignUp, useUser } from '@clerk/clerk-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Form from './Components/Form/Form';

// Import your components
import CustomizedOrderProvider from './Context/CustomizedOrderContext'; 
import CustomizedOrder from './Components/CustomizedOrder/CustomizedOrder';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import Contact from './Components/Contact/Contact';
import Cart from './Components/Cart/Cart';


function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('signin'); // 'signin' or 'signup'
  const { isSignedIn } = useUser();
  
  // Close modal when user signs in
  useEffect(() => {
    if (isSignedIn && showAuthModal) {
      setShowAuthModal(false);
    }
  }, [isSignedIn, showAuthModal]);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
         <CustomizedOrderProvider>
          <Layout onAuthClick={(mode) => {
            setAuthMode(mode);
            setShowAuthModal(true);
          }} />
        </CustomizedOrderProvider>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "*", element: <Notfound /> },
        { path: "form", element: <Form /> },
        { path: "customizedOrder", element: <CustomizedOrder /> },
        { path: "contact", element: <Contact /> },
        { path: "cart", element: <Cart setShowAuthModal={setShowAuthModal}  /> }
      ]
    }
  ]);

    return (
      <>
        <RouterProvider router={routes} />
 {showAuthModal && (
  <SignedOut>
    <div
      className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50"
      onClick={() => setShowAuthModal(false)}
    >
      <div
        className="bg-transparent mt-[15%] pl-5 rounded-lg p-0 max-w-md w-full -mx-4 relative"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={() => setShowAuthModal(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>
        
        {authMode === 'signin' ? (
          <SignIn

            appearance={{
              elements: {
                rootBox: "w-full",
                card: "shadow-none bg-transparent"
              }
            }}
            onSignIn={() => {
              setShowAuthModal(false);
            }}
          />
        ) : (
          <SignUp 
            appearance={{
              layout:{
                showOptionalFields: false,
                showLabels: false
              },
              elements: {
                formField: "grid grid-cols-1 gap-6 -mt-10",
                rootBox: "w-full",
                card: "shadow-none bg-transparent"
              }
            }}
            onSignUp={() => {
              setShowAuthModal(false);
            }}
          />
        )}
        
        <div className="mt-4 text-center">
          <button
            onClick={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')}
            className="text-blue-500 hover:underline text-sm"
          >
            {authMode === 'signin' 
              ? "Don't have an account? Sign up" 
              : "Already have an account? Sign in"
            }
          </button>
        </div>
      </div>
    </div>
  </SignedOut>
        )}
      </>
    );
  }

export default App;