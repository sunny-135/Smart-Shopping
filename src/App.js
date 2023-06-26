import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListingPage from './Components/ProductListingPage';

import { Provider } from 'react-redux';
import store from './Redux/Store';
import ProductDetail from './Components/ProductDetail';
import CartPage from './Components/CartPage';
import LoginPage from './Components/LoginPage'

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LoginPage/>}/>
        <Route path="/product-listing" element={<ProductListingPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
    
  );
};

export default App;
