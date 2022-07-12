import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContexProvider } from "./context/AuthContex";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  
    <AuthContexProvider>
      <App />
    </AuthContexProvider>
  
  
);
