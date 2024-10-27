// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './component/Hero';
import Solutions from './pages/Solutions';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import { AuthProvider } from './context/AuthContext';




const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

