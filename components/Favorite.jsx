'use client';
import React, { useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';

const HeartIcon = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleHeart = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <span onClick={toggleHeart} style={{ cursor: 'pointer' }}>
      {isFavorite ? <FaHeart size={20} color="red" /> : <CiHeart size={20} />}
    </span>
  );
};

export default HeartIcon;
