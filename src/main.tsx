
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.tsx'
import './index.css'

console.log("main.tsx executing - initializing application");

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

console.log("Root element found, rendering application");

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

console.log("Application rendered");
