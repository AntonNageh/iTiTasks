import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  ClerkProvider
} from "@clerk/clerk-react";


const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_FRONTEND_API_KEY;

if (!import.meta.env.VITE_REACT_APP_CLERK_FRONTEND_API_KEY) {
  throw "Missing Publishable Key"
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
    <ClerkProvider publishableKey={clerkPubKey} afterSignOutUrl="./">
        <App />
    </ClerkProvider>
  </StrictMode>
)

