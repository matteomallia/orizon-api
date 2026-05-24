const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    destination: { type: String, required: true },
    price: { type: Number, required: true },
    departureDate: { type: Date, required: true },
    travelType: { 
        type: String, 
        enum: ['single', 'group'], 
        default: 'single' 
    },
    lastMinute: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);