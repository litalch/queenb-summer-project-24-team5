const express = require('express');
const router = express.Router();
const Item = require('../models/ItemModel');

// Get unique categories
router.get('/categories', async (req, res) => {
  try {
    const categories = await Item.distinct('category');
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
