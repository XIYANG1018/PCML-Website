import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>疼痛调控与认知实验室</h1>
        <h3>The Pain Cognition and Modulation Laboratory</h3>
        <ScrollLink to='about' spy={true} smooth={true} offset={50} duration={500} >
          <button className='btn'>了解我们 <img src={dark_arrow} alt="" /></button>
        </ScrollLink>
        
      </div>
    </div>
  )
}

export default Hero
