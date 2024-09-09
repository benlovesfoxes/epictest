import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/listings');
        setListings(response.data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchListings();
  }, []);

  return (
    <div>
      <h1>Marketplace</h1>
      {listings.map((listing) => (
        <div key={listing._id}>
          <h2>{listing.title}</h2>
          <p>{listing.description}</p>
          <p>${listing.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
