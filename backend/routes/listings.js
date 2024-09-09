const express = require('express');
const Listing = require('../models/Listing');
const router = express.Router();

// Create a listing
router.post('/', async (req, res) => {
  const { title, description, price, image, user } = req.body;
  try {
    const listing = new Listing({ title, description, price, image, user });
    await listing.save();
    res.status(201).json(listing);
  } catch (error) {
    res.status(500).json({ error: 'Error creating listing' });
  }
});

// Fetch all listings
router.get('/', async (req, res) => {
  try {
    const listings = await Listing.find().populate('user', 'username email');
    res.json(listings);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching listings' });
  }
});

module.exports = router;
