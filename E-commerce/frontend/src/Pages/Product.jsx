import React, { useContext } from 'react';
import { useParams } from 'react-router-dom'; 
import { ShopContext } from '../Context/ShopContext'; 
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';

const Product = () => {
  const { productId } = useParams(); 
  const { all_product} = useContext(ShopContext); 
  
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
       <Breadcrum product={product} />
       <ProductDisplay product={product} />
       <DescriptionBox/>

    </div>
  );
};

export default Product;
