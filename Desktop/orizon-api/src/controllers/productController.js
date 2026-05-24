const Product = require('../models/product');

// Create a new product
const createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: "Error creating product", error: error.message });
    }
};

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get last minute deals
const getLastMinute = async (req, res) => {
    try {
        const deals = await Product.find({ lastMinute: true });
        res.status(200).json(deals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update product
const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: "Error updating product", error: error.message });
    }
};

// Delete product
const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ message: "Product not found" });
        res.status(200).json({ message: "Product successfully deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getLastMinute,
    updateProduct,
    deleteProduct
};