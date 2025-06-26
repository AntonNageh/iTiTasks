import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import { useLocation } from 'react-router-dom';

export default function () {
    const location = useLocation();
  return (
   <div>
      {location.pathname !== '/signin' && location.pathname !== '/signup' && location.pathname !== '/' && (
        <Navbar />
      )}
      <Outlet />
    </div>
  )
}
