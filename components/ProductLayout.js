'use client'

import { useState } from "react";
import '../styles/ProductLayout.css'

const ProductLayout = ({ children, sidebar }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="product-layout">
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>{sidebar}</div>
      <div className="main-content">
        
        {children}
      </div>
    </div>
  );
};

export default ProductLayout;
