import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

// Getting root HTML element for React app.
const root = document.getElementById("root");

// Initializing React concurrent mode.
const reactRoot = createRoot(root);

// Rendering the main App with routing and Chakra UI support.
reactRoot.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
