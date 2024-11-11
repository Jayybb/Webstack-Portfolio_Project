import React, { useState, useEffect } from 'react';
import './NewCollections.css';

const NewCollections = () => {
  const [newCollection, setNewCollection] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/newcollections')
      .then((response) => response.json())
      .then((data) => setNewCollection(data.newcollections || [])); // Adjusted to match response structure
  }, []);

  return (
    <div className='new_collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className='collections'>
        {newCollection.map((item, i) => {
          return (
            <div key={i} className="collection-item">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>New Price: ${item.new_price}</p>
              <p>Old Price: ${item.old_price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
