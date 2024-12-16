import React from 'react';
import '../styles/CategorySidebar.css'
import { IoIosArrowDown } from "react-icons/io";
import { sidebarCategories } from '../assets/data/categories';

const CategorySidebar = () => {

  return (
    <div className="category-sidebar">
      <span><input type='checkbox'/>CUSOMIZABLE</span>
      {sidebarCategories.map((item) => (
        <div key={item.id} className='categories-text'>
          <span>
            <h1>{item.name.toUpperCase()}</h1>
            <IoIosArrowDown style={{cursor:'pointer'}}/>
          </span>
          <h1>All</h1>
        </div>
      ))}
    </div>
  );
};

export default CategorySidebar;
