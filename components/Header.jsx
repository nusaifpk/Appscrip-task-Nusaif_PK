'use client'

import '../styles/Header.css'
import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { CiHeart, CiSearch, CiMenuBurger  } from "react-icons/ci";
import { IoBagHandleOutline  } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='header-container'>
        <nav>

          <div>
            <CiMenuBurger size={25} className='menu-icon'/>
            <Link href='/'>
              <Image src={Logo} className='logoImg' alt="logo"/>
            </Link>
           </div>

          <div>
            <h1>LOGO</h1>
          </div>

          <div className='icons-div'>
            <CiSearch className='header-icons'/>
            <CiHeart className='header-icons'/>
            <IoBagHandleOutline className='header-icons'/>
            <span>ENG <IoIosArrowDown/></span>
          </div>
        </nav>
          <br />
          <div className='options-nav'>
            <ul>
              <li>SHOP</li>
              <li>SKILLS</li>
              <li>STORIES</li>
              <li>ABOUT</li>
              <li>CONTACT US</li>
            </ul>
          </div>
    </header>
  )
}

export default Header