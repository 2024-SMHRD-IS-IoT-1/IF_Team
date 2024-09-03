import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ForgotID from './components/ForgotID';
import ForgotPW from './components/ForgotPW';
import HomePage from './components/HomePage';



function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/forgot-id" element={<ForgotID />} />
      <Route path="/forgot-password" element={<ForgotPW />} />
      <Route path="/HomePage" element={<HomePage />} />
    </Routes>
  );
}

export default App;