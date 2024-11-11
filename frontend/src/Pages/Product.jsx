import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext'; // Import context
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';


const Product = () => {
  const { all_product } = useContext(ShopContext); // Destructure allProducts from context
  const { productId } = useParams(); // Get productId from URL parameters
  
  // Find the product with the matching id
  const product = all_product.find((e) => e.id === Number(productId));

  // Handle case if product is not found
  if (!product) {
    return <p>Product not found!</p>;
  }

  // Filter related products (excluding the current product)
  const relatedProducts = all_product.filter((item) =>
    item.category === product.category && item.id !== product.id
  );

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox product={product} />
      <RelatedProducts relatedProducts={relatedProducts} />
    </div>
  );
};

export default Product;
