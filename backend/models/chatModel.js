const mongoose = require('mongoose')

const chatModel = mongoose.Schema(
    {
        chatName: { type: String, trim: true},
        isGroupChat: {type: Boolean, default: false},
    users: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
    ],
    latestMessage: {
        type: moongoose.Schema.Types.ObjectId,
        ref: "Message",
    },
    groupAdmin: {
        type: moongoose.Schema.Types.ObjectId,
        ref: "User",
        },
    }, 
    {
        timestams: true,
    }
    );

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;
//chatName
//isGroupChat
//users
//latestMessage
//groupAdmin 