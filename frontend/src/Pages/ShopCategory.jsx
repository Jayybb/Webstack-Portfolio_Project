import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import { ShopContext } from '../Context/ShopContext'; // Import ShopContext
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { allProducts } = useContext(ShopContext); // Use allProducts from context

  // Filter products by category
  const filteredProducts = allProducts.filter((item) => item.category === props.category);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt='' />
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of {filteredProducts.length} products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt='' />
        </div>
      </div>
      <div className='shopcategory-products'>
        {filteredProducts.map((product, i) => (
          <Item 
            key={i} 
            img={product.image} 
            name={product.name}
            id={product.id}
            new_price={product.new_price}
            old_price={product.old_price} 
          />
        ))}
      </div>
      <div className='shopcategory-loadmore'>
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
