import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext';
import { SocketContextProvider } from './context/SocketContext';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <SocketContextProvider>
        <App />
      </SocketContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

