import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css'; 
import App from './App';
import { DuckProvider } from './context/DuckContext'; // This is from the rubber duck example. should probably delete this

import { AuthContextProvider } from './context/AuthContext';


// This is from the rubber duck example. We should probably adjust this...
// The new bit is that '<AuthContextProvider>' wraps the content (duck) provider thing
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DuckProvider>
        <App /> 
      </DuckProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
