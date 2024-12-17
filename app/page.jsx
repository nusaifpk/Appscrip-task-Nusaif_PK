import '../styles/Shop.css';

import Image from 'next/image';
import ProductHeader from '../components/ProductHeader';
import ProductLayout from '../components/ProductLayout';
import CategorySidebar from '../components/CategorySidebar';
import HeartIcon from '../components/Favorite';

const ProductsPage = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) throw new Error('failed to fetch data');
  const albums = await response.json();

  return (
    <>
      <div className='products-container'>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <h4>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          <br />
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </h4>
      </div>
      <ProductHeader />
      <ProductLayout sidebar={<CategorySidebar />}>
        <div className="products-list">
          {albums.map((album) => {
            const truncatedTitle = album.title.split(' ').slice(0, 3).join(' ');
            const isTruncated = album.title.split(' ').length > 3;

            return (
              <div key={album.id} className="product-item">
                <Image
                  src={album.image}
                  alt={album.title}
                  width={300}
                  height={399}
                  layout="intrinsic"
                  objectFit="cover"
                />
                <h3>
                  {truncatedTitle} {isTruncated && '...'}
                </h3>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <p>
                    <u>Sign in</u> or Create an account to see pricing
                  </p>
                  <HeartIcon /> 
                </span>
              </div>
            );
          })}
        </div>
      </ProductLayout>
    </>
  );
};

export default ProductsPage;
