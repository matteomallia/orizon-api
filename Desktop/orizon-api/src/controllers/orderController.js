const Order = require('../models/order');

// Create a new order
const createOrder = async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(400).json({ message: "Error creating order", error: error.message });
    }
};

// Get all orders with filters (by date or productId)
const getAllOrders = async (req, res) => {
    try {
        let query = {};

        if (req.query.productId) {
            query.products = req.query.productId;
        }

        if (req.query.date) {
            const start = new Date(req.query.date);
            const end = new Date(req.query.date);
            end.setHours(23, 59, 59, 999);
            query.orderDate = { $gte: start, $lte: end };
        }

        const orders = await Order.find(query)
            .populate('user', 'firstName lastName email')
            .populate('products', 'name destination price');

        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update order
const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrder) return res.status(404).json({ message: "Order not found" });
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(400).json({ message: "Error updating order", error: error.message });
    }
};

// Delete order
const deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);
        if (!deletedOrder) return res.status(404).json({ message: "Order not found" });
        res.status(200).json({ message: "Order successfully canceled" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createOrder,
    getAllOrders,
    updateOrder,
    deleteOrder
};