import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Products from './pages/Products';

const App = () => {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;