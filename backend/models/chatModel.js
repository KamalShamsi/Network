// Importing the mongoose library
const mongoose = require('mongoose');

// Creating a new schema for chat
const chatModel = mongoose.Schema(
    {
        // Name of the chat (can be a group name or individual's name)
        chatName: { type: String, trim: true },

        // Boolean to check if the chat is a group chat. Default is set to false.
        isGroupChat: { type: Boolean, default: false },

        // Array of user IDs associated with the chat
        users: [
            {
                type: mongoose.Schema.Types.ObjectId, // Reference to User's ObjectId
                ref: "User",                          // Reference to the User model
            },
        ],

        // Reference to the latest message in the chat
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,   // Reference to Message's ObjectId
            ref: "Message",                         // Reference to the Message model
        },

        // In case of a group chat, reference to the admin of the group
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,   // Reference to User's ObjectId
            ref: "User",                           // Reference to the User model
        },
    }, 
    {
        // Enable timestamps (createdAt and updatedAt fields)
        timestamps: true,
    }
);

// Creating a new Chat model using the chat schema
const Chat = mongoose.model("Chat", chatModel);

// Exporting the Chat model for use in other parts of the application
module.exports = Chat;
