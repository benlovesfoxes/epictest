import React, { useState } from 'react';
import axios from 'axios';

const CreateListing = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post('http://localhost:5000/api/listings', { title, description, price }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Listing created');
    } catch (error) {
      alert('Error creating listing');
    }
  };

  return (
    <div>
      <h2>Create Listing</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateListing;
