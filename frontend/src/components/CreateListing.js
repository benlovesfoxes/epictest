// src/components/CreateListing.js
import React from 'react';
import './styles.css';

const CreateListing = () => {
  const handleFileChange = (event) => {
    const files = event.target.files;
    // Handle the files as needed (e.g., preview images, validate file types)
  };

  return (
    <div className="container">
      <h1>Create Listing</h1>
      <form id="listing-form">
        <label htmlFor="name">Item Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" required />
        
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" rows="4" required></textarea>
        
        <label htmlFor="photos">Photos:</label>
        <input type="file" id="photos" name="photos" accept="image/*" multiple onChange={handleFileChange} />
        
        <button type="submit">Create Listing</button>
      </form>
    </div>
  );
};

export default CreateListing;
