import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Product from "./components/Product";
import ContextProductsProvider  from "./context/ContextProductsProvider";
import { Navigate, Route, Routes } from "react-router-dom";
import CartContextProvider from "./context/CartContextProvider";
import Cart from "./components/Cart";
import Products from "./components/Products";
const App = () => {
  return (
      <ContextProductsProvider>
          <CartContextProvider>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products/:id" element={<Product />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/allproducts" element={<Products />} />
                  <Route path="*" element={<Navigate to="/" />} />
              </Routes>
          </CartContextProvider>
      </ContextProductsProvider>
  );
}

export default App;
