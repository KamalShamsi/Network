// Importing the mongoose library
const mongoose = require('mongoose');

// Creating a new schema for users
const userSchema = mongoose.Schema({
    // Name of the user, which is a required field
    name: { type: String, required: true },

    // Email of the user, which is a required field
    email: { type: String, required: true },

    // Password of the user, which is a required field
    password: { type: String, required: true },

    // Profile picture URL of the user. If not provided, a default anonymous avatar is used
    pic: { 
        type: String,
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    },
},
{
    // Enable timestamps (createdAt and updatedAt fields)
    timestamps: true,
});

// Creating a new User model using the user schema
const User = mongoose.model("User", userSchema);

// Exporting the User model for use in other parts of the application
module.exports = User;
