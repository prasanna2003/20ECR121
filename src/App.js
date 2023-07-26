import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import Productscard from './components/Productscard';

function App() {
  return (
    <BrowserRouter> {/* Move the BrowserRouter to wrap around the components that use Link */}
      <div>
        <Header/>
      </div>
      <Routes>
        <Route path='/products/:data' element={<ProductListing />} />
        <Route path='/product' element={<Productscard/>} />
        <Route path='/' element={<Header/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
