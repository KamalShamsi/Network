// Importing the main stylesheet for the app
import './App.css';

// Importing necessary components from react-router-dom for routing
import { Route } from "react-router-dom";

// Importing page components
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";

// Main App component
function App() {
  return (
    <div className="App">
      {/* Defining a route for the home page. "exact" ensures this route is matched only if the path is exactly "/". */}
      <Route path="/" component={HomePage} exact />
      
      {/* Defining a route for the chat page. */}
      <Route path="/chats" component={ChatPage} />
    </div>
  );
}

// Exporting the App component to be used in other parts of the app
export default App;
