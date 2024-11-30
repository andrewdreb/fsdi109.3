import React, { useState } from 'react';
import Item from './Item';

const initialItems = [
  { id: 1, name: 'Item 1', price: 10 },
  { id: 2, name: 'Item 2', price: 20 },
  { id: 3, name: 'Item 3', price: 30 },
  { id: 4, name: 'Item 4', price: 40 },
  { id: 5, name: 'Item 5', price: 50 },
  { id: 6, name: 'Item 6', price: 60 },
  { id: 7, name: 'Item 7', price: 70 },
  { id: 8, name: 'Item 8', price: 80 },
  { id: 9, name: 'Item 9', price: 90 },
  { id: 10, name: 'Item 10', price: 100 },
  { id: 11, name: 'Item 11', price: 110 },
  { id: 12, name: 'Item 12', price: 120 },
];

const ShoppingList = ({ addItemToCart }) => {
  const [shoppingList] = useState(initialItems);

  return (
    <div className="container">
      <h2>Shopping List</h2>
      <div className="row">
        {shoppingList.map((item) => (
          <div className="col-md-4" key={item.id}>
            <Item item={item} addItemToCart={addItemToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};
adfdfg..gadfg

export default ShoppingList;
