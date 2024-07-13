import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link, Navigate } from 'react-router-dom';

const Hero = () => {

  const handleOnClick = (path) => {
    Navigate(path);
  };

  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>疼痛调控与认知实验室</h1>
        <h3>The Pain Cognition and Modulation Laboratory</h3>
        <Link to='/about'onClick={handleOnClick('/about')} >
          <button className='btn'>了解我们 <img src={dark_arrow} alt="" /></button>
        </Link>
        
      </div>
    </div>
  )
}

export default Hero
