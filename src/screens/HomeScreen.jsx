import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Title from '../Components/Title/Title'
import About from '../Components/About/About'
import Campus from '../Components/Campus/Campus'
import Testimonials from '../Components/Testimonials/Testimonials'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'


const HomeScreen = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     {/* <div className="container">
      
      <About/>
        <Title subTitle='Our research' title='科研成果'/>
        <Testimonials/>

        <Title subTitle='Our team' title='团队成员'/>
        <Campus/>

        <Title subTitle='Contact Us' title='联系合作'/>
        <Contact/> */}
      {/* <Footer/> */}
     {/* </div> */}
    </div>
  )
}

export default HomeScreen
