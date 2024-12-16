import React from 'react'
import '../styles/Footer.css'
import Image from 'next/image'
import USAImg from '../assets/icons/USA.png'
import StarImg from '../assets/icons/Star.png'
import CardsImg from '../assets/cards.png'
import { Instagram, LinkedIn } from '@mui/icons-material'

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-container'>
        <div className="footer-section subscribe">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettä muse.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your e-mail..." />
            <button type="button">SUBSCRIBE</button>
          </div>
        </div>
        <div className="footer-section contact">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3>CURRENCY</h3>
          <p><span className="currency-icon"><Image className='usa-img' src={USAImg} alt='usa icon'/><Image className='star-img' src={StarImg} alt='star icon'/>USD</span></p>
          <small>Transactions will be completed in Euros and a currency reference is</small>
        </div>
      </div>

      <hr />


      <div className="footer-links">
        <div className="footer-column">
          <h3>mettā muse</h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>FOLLOW US</h3>
          <div className='social-section'>
            <div className='social-icon-bg'>
            <span><Instagram fontSize='small' className='social-icons'/></span>
            </div>
            <div className='social-icon-bg'>
              <span><LinkedIn fontSize='small' className='social-icons'/></span>
            </div>
          </div>
          <h3>mettā muse ACCEPTS</h3>
          <Image className='cards-img' src={CardsImg} alt='usa icon'/>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
</footer>

  )
}

export default Footer