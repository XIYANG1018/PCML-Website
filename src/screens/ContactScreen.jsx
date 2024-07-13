import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

import Title from '../Components/Title/Title'

import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import './ContactScreen.css'


const ContactScreen = () => {
  return (
    <div className='page'>
        <Navbar/>
        
        
        <div className="container">
            <Title subTitle='Contact Us' title='联系合作'/>
            <Contact/>
        </div>
            

        <Footer/>
    </div>
  )
}

export default ContactScreen