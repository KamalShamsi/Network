// Importing necessary dependencies.
import axios from 'axios'
import React, { useState, useEffect } from 'react'

// ChatPage component for displaying chat messages.
const ChatPage = () => {
    // State to hold the chats fetched from the server.
    const [chats, setChats] = useState([]);

    // Function to fetch chats from the server using axios.
    const fetchChats = async() => {
        const {data} = await axios.get('/api/chat');
        setChats(data);
    };

    // Using useEffect to initiate the chat fetch when the component mounts.
    useEffect(() => {
        fetchChats();
    }, [])

    // Rendering the list of chats.
    return (
        <div>
            {chats.map((chat) => (
                <div key={chat._id}>{chats.chatName}</div>
            ))}
        </div>
    )
}

// Exporting ChatPage component for use in other parts of the app.
export default ChatPage;
