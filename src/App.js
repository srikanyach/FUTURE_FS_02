import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Orders from './pages/Orders';

export default function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </React.Fragment>
  );
}
