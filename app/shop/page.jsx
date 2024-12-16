
import CategorySidebar from '../../components/CategorySidebar';
import ProductLayout from '../../components/ProductLayout';
import '../../styles/Shop.css';
import ProductHeader from '../../components/ProductHeader';
import Image from 'next/image';


const ProductsPage = async () => {

  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) throw new Error('failed to fetch data');
  const albums = await response.json();
  console.log(albums);



  return (
    <>
      <div className='products-container'>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <h4>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br /> scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</h4>
      </div>
      <ProductHeader/>
      <ProductLayout sidebar={<CategorySidebar />}>

      <div className="products-list">
        {albums.map((album) => (
          <div key={album.id} className="product-item">
            <Image
              src={album.image}
              alt={album.title}
              width={300}
              height={200}
              layout="intrinsic"
              objectFit="cover"
            />
            <h3>{album.title}</h3>
          </div>
        ))}
      </div>

      </ProductLayout>
    </>
  );
};

export default ProductsPage;
 