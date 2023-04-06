import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import { Provider } from 'react-redux';
import { Navigate, Route, Routes } from "react-router-dom";
import store from "./rdux/store";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Products from "./components/Products";
const App = () => {
  return (
    
      <Provider store={store}>
            <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/products/:id" element={<Product />} />
             <Route path="/cart" element={<Cart />} />
             <Route path="/allproducts" element={<Products />} />
             <Route path="*" element={<Navigate to="/" />} />
            </Routes>
      </Provider>
      
  );
}

export default App;
