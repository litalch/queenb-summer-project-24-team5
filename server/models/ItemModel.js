const mongoose = require('mongoose');

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: [
            'Jackets & Coats', 
            'Dresses', 
            'Jumpers', 
            'Tops', 
            'Jumpsuits', 
            'ActiveWear', 
            'Accessories', 
            'Bags', 
            'Trousers', 
            'Jeans', 
            'Skirts', 
            'Shoes'
        ]
    },
    gender: {
        type: String,
        required: true,
        enum: ['Women', 'Men']
    },
    condition: {
        type: String,
        required: true,
        enum: ['Brand New', 'Like New', 'Used - Excellent', 'Used - Good', 'Used - Fair'] 
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);