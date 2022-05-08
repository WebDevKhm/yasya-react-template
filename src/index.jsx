import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import Profile from "./components/Profile";
import App from "./App";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Profile />
  </React.StrictMode>
);
