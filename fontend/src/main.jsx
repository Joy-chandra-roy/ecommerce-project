import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import './index.css'
import router from "./routes/Router";
import { CartProvider } from "./context/CartContext";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <CartProvider>
    <RouterProvider router={router} />,
  </CartProvider>
  
);