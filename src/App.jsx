import React, { useState } from 'react'
import Hero from './Components/Hero/Hero'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'

import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import { Outlet, Link } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

const App = () => {

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App