import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

export default function () {
  return (
      <div>
        <Navbar />
        <Outlet />
    </div>
  )
}
