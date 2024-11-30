import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import ShoppingCart from './components/ShoppingCart';
import ShoppingList from './components/ShoppingList';
import Catalog from './components/Catalog';
import Header from './components/Header';
import './App.css';

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

const App = () => {
  const [items] = useState(initialItems);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPanel items={items} setItems={setCartItems} />} />
        <Route path="/cart" element={<ShoppingCart cartItems={cartItems} />} />
        <Route path="/catalog" element={<Catalog items={items} addItemToCart={addItemToCart} />} />
        <Route path="/" element={<ShoppingList addItemToCart={addItemToCart} />} />
      </Routes>
    </div>
  );
};

export default App;
