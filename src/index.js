import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",

      height: "100vh"
    }}>
      <App />
    </div>
  </React.StrictMode>
);
