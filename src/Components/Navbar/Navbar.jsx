import React, { useEffect, useState } from 'react'

import './Navbar.css'
import logo from '../../assets/logoNav.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link as ScrollLink} from 'react-scroll';
import { Link, Navigate } from 'react-router-dom';


const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[]);


    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    const handleOnClick = (path) => {
      Navigate(path);
    };


  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <Link onClick={handleOnClick('/')}>
        <img src={logo} alt="" className='logo' />
      </Link>
      
      <ul className={mobileMenu? '':'hide-mobile-menu'}>
        <li><ScrollLink to='hero' smooth={true} offset={0} duration={500}>首页</ScrollLink></li>
        <li><ScrollLink to='about' smooth={true} offset={0} duration={500}>关于我们</ScrollLink></li>
        <li><ScrollLink to='testimonials' smooth={true} offset={-260} duration={500}>科研成果</ScrollLink></li>
        <li><Link to='/publication' onClick={handleOnClick('/publication')}>研究发表</Link></li>
        <li><ScrollLink to='campus' smooth={true} offset={-260} duration={500}>团队成员</ScrollLink></li>
        <li><ScrollLink to='contact' smooth={true} offset={-260} duration={500} className='btn'>联系合作</ScrollLink></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
