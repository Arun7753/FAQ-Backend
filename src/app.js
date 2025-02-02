// Load environment variables from .env file
require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const faqRoutes = require('./routes/faqRoutes');

// Get the MongoDB connection URL from .env
const mongoURI = process.env.MONGO_URI; 

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");

    } catch (error) {
        console.error("Database Connection Failed", error.message);
        process.exit(1);
    }
};


const app = express();
app.use(express.json());

// Use FAQ routes
app.use('/faqs', faqRoutes);

connectDB().then(() => {
    const PORT = process.env.PORT || 8585;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
