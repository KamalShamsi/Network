// Importing required modules
const express = require("express");       // Express.js framework for server
const { chats } = require("./data/data"); // Mock chat data
const dotenv = require("dotenv");         // To handle environment variables

// Initializing the express app
const app = express();

// Loading environment variables
dotenv.config();

// Basic route to check if API is running
app.get("/", (req, res) => {
    res.send("API is Running");
});

// Route to get all chat data
app.get("/api/chat", (req,res) => {
    res.send(chats);
});

// Route to get specific chat based on the given ID
app.get("/api/chat/:id", (req,res) => {
    // Finding the chat that matches the ID from request parameters
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
});

// Defining the port the server will run on
const PORT = process.env.PORT || 5000;

// Starting the server on the defined port
app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
