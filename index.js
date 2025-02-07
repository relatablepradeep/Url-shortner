const express = require("express");
const dotenv = require("dotenv");
const urlRoute = require('./routes/url');
const connecttomongo = require('./connect');

// Load environment variables at the top
dotenv.config();

const app = express();

// Connect to MongoDB with error handling
connecttomongo('mongodb://localhost:27017/Short-Url')
    .then(() => {
        console.log("MongoDB is connected");
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err);
    });


    app.use(express.json())

// Fix incorrect route path
app.use('/url', urlRoute);

app.get('/', (req, res) => {
    res.send("Short URL service is running!");
});

// Use a default port if process.env.Port is undefined
const Port = process.env.Port || 5000;

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
