import React from 'react';

const Item = ({ item, addItemToCart }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">${item.price}</p>
        <button className="btn btn-primary" onClick={() => addItemToCart(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Item;
