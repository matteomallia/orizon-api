require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// --- ROUTES IMPORT ---
const userRoutes = require('./src/routes/userRoutes');
const productRoutes = require('./src/routes/productRoutes');
const orderRoutes = require('./src/routes/orderRoutes');

const app = express();

// --- MIDDLEWARE ---
app.use(express.json());

// --- DATABASE CONNECTION ---
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Successfully connected to MongoDB Atlas'))
    .catch((err) => {
        console.error('❌ Database connection error:', err);
    });

// --- ROUTES ---
app.get('/', (req, res) => {
    res.json({ 
        message: "Welcome to Orizon API!", 
        status: "Server Online",
        endpoints: {
            users: "/api/users",
            products: "/api/products",
            orders: "/api/orders"
        }
    });
});

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// --- 404 ERROR HANDLING ---
app.use((req, res) => {
    res.status(404).json({ message: "Requested resource not found." });
});

// --- SERVER START ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Orizon Server running on http://localhost:${PORT}`);
    console.log(`👤 Users endpoint: http://localhost:${PORT}/api/users`);
    console.log(`🌍 Products endpoint: http://localhost:${PORT}/api/products`);
    console.log(`🛒 Orders endpoint: http://localhost:${PORT}/api/orders`);
});