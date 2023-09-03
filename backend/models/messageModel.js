// Importing the mongoose library
const mongoose = require('mongoose');

// Creating a new schema for message
const messageModel = mongoose.Schema({
    // Reference to the sender's ID from the User model
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    // Content of the message with leading and trailing whitespace removed
    content: { type: String, trim: true },

    // Reference to the chat's ID the message belongs to from the Chat model
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
},
{
    // Enable timestamps (createdAt and updatedAt fields)
    timestamps: true,
});

// Creating a new Message model using the message schema
const Message = mongoose.model("Message", messageModel);

// Exporting the Message model for use in other parts of the application
module.exports = Message;
