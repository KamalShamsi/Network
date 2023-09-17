// Importing the main stylesheet for the app
import './App.css';

// Importing necessary components from react-router-dom for routing
import { Route, Routes } from "react-router-dom";

// Importing page components
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";
import { ChakraProvider } from "@chakra-ui/react";

// Main App component
function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Routes>
          {/* Defining a route for the home page. "path" ensures this route is matched only if the path is exactly "/". */}
          <Route path="/" element={<HomePage />} />
          
          {/* Defining a route for the chat page. */}
          <Route path="/chats" element={<ChatPage />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

// Exporting the App component to be used in other parts of the app
export default App;
