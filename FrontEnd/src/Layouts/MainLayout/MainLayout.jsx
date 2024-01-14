import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const MainLayout = () => {
  return (
    <div className='main-layout'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout