const express = require('express');
const { getAllItems,
    getAllWomenItems,
    getAllMenItems,
    getSingleItem,
    createItem,
    deleteItem,
    updateItem,
 } = require('../controllers/itemController')

const router = express.Router()

/**
 * Read Only Permission Routes
 */
// GET all items
router.get('/', getAllItems)

// GET all women items
router.get('/women', getAllWomenItems);

// GET all men items
router.get('/men', getAllMenItems);

// GET a single item
router.get('/:id', getSingleItem)

/**
 * Read and Write Permission Routes
 */
// POST a new item
router.post('/', createItem)

// DELETE item
router.delete('/:id', deleteItem)

// UPDATE item
router.patch('/:id', updateItem)

module.exports = router