// Required Dependencies
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const jwt = require('jsonwebtoken'); // Import JWT

// Initialize Express App
const app = express();
const port = 4000;

// Middleware for parsing JSON and handling CORS
app.use(express.json());
app.use(cors());

// MongoDB Database Connection
mongoose.connect('mongodb+srv://Sassycart:Johnny199726@cluster0.s5mr9.mongodb.net/e-commerce')
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.log('MongoDB connection error:', error));

// API Base Route
app.get('/', (req, res) => {
    res.send('Express App is Running');
});

// Image Storage Engine for Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './upload/images'); // Define image upload folder
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Set unique file names with timestamps
    }
});

// Multer Middleware Setup for File Upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 } // Set file size limit to 5MB
});

// Serve Static Images from the "upload/images" directory
app.use('/images', express.static(path.join(__dirname, 'upload/images')));

// File Upload Route
app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: 0, message: "No file uploaded. Ensure the field name is 'image'." });
    }

    // Respond with the image URL if successful
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

// Product Schema Definition
const productSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    new_price: { type: Number, required: true },
    old_price: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    available: { type: Boolean, default: true },
});

// Product Model
const Product = mongoose.model('Product', productSchema);

// Add Product Route
app.post('/addproduct', async (req, res) => {
    try {
        let products = await Product.find({}).sort({ id: 1 });
        let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

        const newProduct = new Product({
            id: id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
            available: req.body.available || true,
        });

        await newProduct.save();
        console.log('Product saved:', newProduct);

        res.json({
            success: true,
            product: newProduct,
        });
    } catch (error) {
        console.error('Error saving product:', error);
        res.status(500).json({
            success: false,
            message: 'Error saving product',
        });
    }
});

// Remove Product Route
app.post('/removeproduct', async (req, res) => {
    try {
        const deletedProduct = await Product.findOneAndDelete({ id: req.body.id });

        if (!deletedProduct) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }

        console.log('Product Removed');
        res.json({
            success: true,
            message: `Product with name ${req.body.name} removed`
        });
    } catch (error) {
        console.error('Error removing product:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to remove product'
        });
    }
});

// Fetch All Products Route
app.get('/allproducts', async (req, res) => {
    try {
        const products = await Product.find({});

        if (products.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No products found'
            });
        }

        console.log('All Products Fetched');
        res.json({
            success: true,
            products: products
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch products'
        });
    }
});

// User Schema Definition
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    cartData: {
        type: Object,
        default: {},
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model('User', userSchema);

// User Signup Route
app.post('/signup', async (req, res) => {
    try {
        let check = await User.findOne({ email: req.body.email });
        if (check) {
            return res.status(400).json({
                success: false,
                errors: 'User with the same email already exists'
            });
        }

        let cart = {};
        for (let i = 0; i < 300; i++) cart[i] = 0;

        const user = new User({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password,
            cartData: cart,
        });

        await user.save();

        const data = { user: { id: user.id } };
        const token = jwt.sign(data, 'secret_ecom');

        res.json({ success: true, token });
    } catch (error) {
        console.error('Error signing up user:', error);
        res.status(500).json({
            success: false,
            message: 'Error signing up user',
        });
    }
});

// User Login Route
app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        
        if (user) {
            const passCompare = req.body.password === user.password;
            if (passCompare) {
                const data = { user: { id: user.id } };
                const token = jwt.sign(data, 'secret_ecom');
                return res.json({ success: true, token });
            } else {
                return res.json({ success: false, error: 'Wrong password' });
            }
        } else {
            return res.json({ success: false, errors: 'Wrong email id' });
        }
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({
            success: false,
            message: 'Error logging in user',
        });
    }
});

// Creating Endpoint for NewCollection data
app.get('/newcollections', async (req, res) => {
    try {
        const products = await Product.find({}).sort({ date: -1 }).limit(8);
        console.log('NewCollections Fetched');
        res.json({
            success: true,
            newcollections: products
        });
    } catch (error) {
        console.error('Error fetching new collections:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch new collections'
        });
    }
});

// Define the fetchUser middleware
const fetchUser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json({ error: 'Please authenticate using a valid token' });
    }
    try {
        const data = jwt.verify(token, 'secret_ecom');
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

// addtocart route
app.post('/addtocart', fetchUser, async (req, res) => {
    try {
        let userData = await User.findOne({ _id: req.user.id });
        if (!userData) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        userData.cartData[req.body.itemId] = (userData.cartData[req.body.itemId] || 0) + 1;
        await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
        res.json({ success: true, message: 'Item added to cart' });
    } catch (error) {
        console.error('Error adding to cart:', error);
        res.status(500).json({ success: false, message: 'Failed to add item to cart' });
    }
});

//Creating endpoint to get cartdata
app.post('/getcart', fetchUser, async (req, res) => {
    try {
        let userData = await User.findOne({ _id: req.user.id });
        if (!userData) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.json(userData.cartData);
    } catch (error) {
        console.error('Error fetching cart:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch cart data' });
    }
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
