import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer'



const AboutScreen = () => {
  return (
    <div className='page'>
     <Navbar/>
     
     <div className="container">

        <About/>
        
     </div>
     <Footer/>
    </div>
  )
}

export default AboutScreen