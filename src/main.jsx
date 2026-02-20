// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css'; // optional global styles

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);