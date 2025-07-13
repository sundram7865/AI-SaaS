import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import Sidebar from '../components/Sidebar' // ✅ Make sure this path is correct
import { SignIn, useUser } from '@clerk/clerk-react'

const Layout = () => {
  const navigate = useNavigate()
  const [sidebar, setSidebar] = useState(false)
  const {user}=useUser()

  return user ? (
    <div className='flex flex-col items-start justify-start min-h-screen'>
      {/* Navbar */}
      <nav className='w-full px-8 py-3 min-h-14 flex items-center justify-between border-b border-gray-200'>
        <img
          src={assets.logo}
          alt="logo"
          className="h-10 w-auto cursor-pointer"
          onClick={() => navigate('/')}
        />
        {
          sidebar
            ? <X onClick={() => setSidebar(false)} className='w-6 h-6 text-gray-600 sm:hidden cursor-pointer' />
            : <Menu onClick={() => setSidebar(true)} className='w-6 h-6 text-gray-600 sm:hidden cursor-pointer' />
        }
      </nav>

      {/* Main content */}
      <div className='flex flex-1 w-full h-[calc(100vh-56px)]'>
        {/* Sidebar */}
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
                                          
        {/* Main Page Outlet */}
        <div className='flex-1 bg-[#F4F7FB] p-4 overflow-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  ):
  (
    <div className='flex items-center justify-center h-screen'>
       <SignIn/>
    </div>
  )
}

export default Layout
