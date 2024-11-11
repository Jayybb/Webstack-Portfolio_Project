import React from 'react';
import './Popular.css';
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>WOMEN POPULAR ARTICLE</h1>
      <hr/>
      <div className='popular-item'>
        
        {data_product.map((item, i)=>{
          return<item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.newPrice} oldPrice={item.oldPrice} />
        })}
      </div>
    </div>
  );
};

export default Popular;
