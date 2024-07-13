import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

import Footer from '../Components/Footer/Footer'
import Testimonials from '../Components/Testimonials/Testimonials'



const ResearchScreen = () => {
  return (
    <div className='page'>
     <Navbar/>
     
     <div className="container">

        <Testimonials/>
        
     </div>
     <Footer/>
    </div>
  )
}

export default ResearchScreen