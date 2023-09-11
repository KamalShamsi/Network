// Importing the mongoose library
const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

// Creating a new schema for users
const userSchema = mongoose.Schema({
    // Name of the user, which is a required field
    name: { type: String, required: true },

    // Email of the user, which is a required field
    email: { type: String, required: true, unique: true},

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

userSchema.methods.matchPassword=async function (enteredPassowrd) {
    return await bcrypt.compare(enteredPassowrd, this.password);
}

userSchema.pre('save',async function (next) {
    if (!this.isModified) {
        next();
    }
    
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Creating a new User model using the user schema
const User = mongoose.model("User", userSchema);

// Exporting the User model for use in other parts of the application
module.exports = User;
