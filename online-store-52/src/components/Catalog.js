import React from 'react';
import Item from './Item';

const Catalog = ({ items, addItemToCart }) => {
  return (
    <div className="container">
      <h2>Product Catalog</h2>
      <div className="row">
        {items.map((item) => (
          <div className="col-md-4" key={item.id}>
            <Item item={item} addItemToCart={addItemToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
