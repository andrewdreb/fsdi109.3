import React, { useState } from 'react';

const AdminPanel = ({ items, setItems }) => {
  const [newItem, setNewItem] = useState({ name: '', price: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const addItem = () => {
    setItems([...items, { ...newItem, id: items.length + 1 }]);
    setNewItem({ name: '', price: '' });
  };

  return (
    <div className="container">
      <h2>Admin Panel</h2>
      <div className="mb-4">
        <h5>Add New Item</h5>
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={newItem.name}
          onChange={handleInputChange}
          className="form-control mb-2"
        />
        <input
          type="number"
          name="price"
          placeholder="Item Price"
          value={newItem.price}
          onChange={handleInputChange}
          className="form-control mb-2"
        />
        <button onClick={addItem} className="btn btn-success">Add Item</button>
      </div>
      <h5>Item List</h5>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
