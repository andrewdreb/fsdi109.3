import React from 'react';

const ShoppingCart = ({ cartItems }) => {
  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      <ul className="list-group">
        {cartItems.map((item, index) => (
          <li key={index} className="list-group-item">
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
