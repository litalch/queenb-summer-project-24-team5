const Item = require('../models/ItemModel');

// get all items
const getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json({items});
    } catch (err) {
        res.status(400).json({mssg: 'error getting items', err})
    }
}

// get all women items
const getAllWomenItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json({items});
    } catch (err) {
        res.status(400).json({mssg: 'error getting items', err})
    }
}

// get all men items
const getAllMenItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json({items});
    } catch (err) {
        res.status(400).json({mssg: 'error getting items', err})
    }
}


// get a single item
const getSingleItem = async (req, res) => {
    const {id} = req.params;

    try {
        const item = await Item.findById(id);
        res.status(200).json({item});
    } catch (err) {
        res.status(400).json({mssg: 'error getting item', err})
    }
}

// create a new item
const createItem = async (req, res) => {
    const {name, imageUrl, category, gender, condition, price, location, description} = req.body;

    try {
        const item = await Item.create({name, imageUrl, category, gender, condition, price, location, description});
        res.status(200).json({item});
    } catch (err) {
        res.status(400).json({mssg: 'error creating item', err})
    }
}

// delete item
const deleteItem = async (req, res) => {
    const {id} = req.params;

    try {
        const item = await Item.findByIdAndDelete(id);
        res.status(200).json({item});
    } catch (err) {
        res.status(400).json({mssg: 'error deleting item', err})
    }
}

// update item
const updateItem = async (req, res) => {
    const {id} = req.params;
    const {name, imageUrl, category, gender, condition, price, location, description} = req.body;

    try {
        const item = await Item.findByIdAndUpdate(id, {name, imageUrl, category, gender, condition, price, location, description}, {new: true});
        res.status(200).json({item});
    } catch (err) {
        res.status(400).json({mssg: 'error updating item', err})
    }
}

module.exports = {
    getAllItems,
    getAllWomenItems,
    getAllMenItems,
    getSingleItem,
    createItem,
    deleteItem,
    updateItem,
}