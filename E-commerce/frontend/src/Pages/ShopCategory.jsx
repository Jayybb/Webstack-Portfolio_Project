import React, { useContext } from 'react'; // Import useContext
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext'; // Corrected context import
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => { // Props should be passed in
  const { all_product } = useContext(ShopContext); // Corrected useContext

  return (
    <div className="shopcategory">
      <img src={props.banner} alt={`${props.category} category banner`} />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of {all_product.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Sort dropdown" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item) => {
          // Filter products based on category passed via props
          if (props.category === item.category) {
            return (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          return null; // Ensure map returns null when condition isn't met
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
