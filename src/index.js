import React from 'react';
import ReactDOM from 'react-dom/client'; // or 'react-dom' depending on your setup
import App from './App'; // Ensure there's an App.js file in the src directory
import './index.css'; // Optional: If you have global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

