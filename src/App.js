import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import { Provider } from 'react-redux';
import { Navigate, Route, Routes } from "react-router-dom";
import store from "./rdux/store";

const App = () => {
  return (
    
        <Provider store={store}>
              <Routes>
                  <Route path="/" element={<Home />} />
                 
                  <Route path="*" element={<Navigate to="/" />} />
              </Routes>
        </Provider>
      
  );
}

export default App;
