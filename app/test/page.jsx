import Image from 'next/image';
import React from 'react';

const Page = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) throw new Error('failed to fetch data');
  const albums = await response.json();
  console.log(albums);

  return (
    <div>
      {albums.map((album) => (
        <div key={album.id}>
          <h3>{album.title}</h3>
          <Image
            src={album.image}
            alt={album.title}
            width={300}
            height={300} 
            layout="intrinsic" 
          />
        </div>
      ))}
    </div>
  );
};

export default Page;
