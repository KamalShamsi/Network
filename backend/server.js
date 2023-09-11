// Importing required modules
const express = require("express");       // Express.js framework for server
const { chats } = require("./data/data"); // Mock chat data
const dotenv = require("dotenv");         // To handle environment variables
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

// Loading environment variables
dotenv.config();

connectDB();

// Initializing the express app
const app = express();

app.use(express.json()); // To acceept JSON data


// Basic route to check if API is running
app.get("/", (req, res) => {
    res.send("API is Running");
});

app.use('/api/user',userRoutes);

app.use(notFound);
app.use(errorHandler);


// Defining the port the server will run on
const PORT = process.env.PORT || 5000;

// Starting the server on the defined port
app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`.yellow.bold));
