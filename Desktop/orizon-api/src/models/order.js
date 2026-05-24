const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    products: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product', 
        required: true 
    }],
    orderDate: { 
        type: Date, 
        default: Date.now 
    },
    numberOfParticipants: {
        type: Number,
        default: 1
    },
    travelNotes: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);