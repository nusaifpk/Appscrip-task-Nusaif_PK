'use client'

import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import { recommendedCategories } from '../assets/data/recommended';
import '../styles/Shop.css'

const ProductHeader = () => {
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(recommendedCategories[0].id);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleCategorySelect = (id) => {
    setSelectedCategory(id);
    setIsDropdownOpen(false); 
  };

  return (
    <div className='products-header'>
        <div className='products-header-text'>
          <h3 className='filter-text'>FILTER</h3>
          <h1>{'3425'} ITEMS</h1>
          <h2>
            <IoIosArrowBack style={{ color: '#888792' }} /> HIDE FILTER
          </h2>
        </div>
        <div className="dropdown-container">
          <h1 onClick={toggleDropdown} style={{ cursor: 'pointer' }} className='rec-text'>
            {recommendedCategories.find((cat) => cat.id === selectedCategory)?.name.toUpperCase()} <IoIosArrowDown style={{ color: '#292D32' }} />
          </h1>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              {recommendedCategories.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleCategorySelect(item.id)}
                  className={`rec-items ${selectedCategory === item.id ? 'selected' : ''}`}
                >
                  {selectedCategory === item.id && (
                    <span style={{ color: '#292D32' }}>✔</span>
                  )}
                  <p style={{ margin: 0 }}>{item.name.toUpperCase()}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
  )
}

export default ProductHeader