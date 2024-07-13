import React, { useEffect, useState } from 'react'

import './NavbarStatic.css'
import logo from '../../assets/logoNav.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link as ScrollLink} from 'react-scroll';
import { Link, Navigate } from 'react-router-dom';


const NavbarStatic = () => {

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

    const handleOnClick = (path, component) => {
      Navigate(path);
      setTimeout(() => {
        // 等待一段时间后执行滚动操作
        ScrollLink.scrollTo(component, {
          smooth: true,
          offset: 0,
          duration: 500
        });
      }, 50); 
    };


  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <Link to='/' onClick={handleOnClick('/')}>
        <img src={logo} alt="" className='logo' />
      </Link>
      
      <ul className={mobileMenu? '':'hide-mobile-menu'}>
        <li><Link to='/' onClick={handleOnClick('/', 'about')}>关于我们</Link></li>
        <li><Link to='/' onClick={handleOnClick('/', 'testimonials')}>科研成果</Link></li>
        <li><Link to='/publication' onClick={handleOnClick('/publication')}>研究发表</Link></li>
        <li><Link to='/team' onClick={handleOnClick('/', 'campus')}>团队成员</Link></li>
        <li><Link to='/' onClick={handleOnClick('/', 'contact')}>联系合作</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default NavbarStatic
