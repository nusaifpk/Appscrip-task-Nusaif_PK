'use client'

import '../styles/Header.css'
import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { CiHeart, CiSearch, CiMenuBurger } from 'react-icons/ci'
import { IoBagHandleOutline } from 'react-icons/io5'
import { IoIosArrowDown } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header-container">
      <nav className="nav">
        <div className="menu-logo">
          <CiMenuBurger size={25} className="menu-icon" onClick={toggleMenu} />
          <Link href="/">
            <Image src={Logo} className="logoImg" alt="logo" />
          </Link>
        </div>

        <div>
          <h1>LOGO</h1>
        </div>

        <div className="icons-div">
          <CiSearch className="header-icons" />
          <CiHeart className="header-icons" />
          <IoBagHandleOutline className="header-icons" />
          <span>
            ENG <IoIosArrowDown />
          </span>
        </div>
      </nav>

{/* MobileSidebar View */}
      <div className={`mobile-sidebar ${isMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Menu</h2>
          <IoClose size={25} onClick={toggleMenu} />
        </div>
        <ul className="sidebar-menu">
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </div>

      <div className="options-nav">
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
