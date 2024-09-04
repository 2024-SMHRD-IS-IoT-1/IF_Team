
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/LoginSignup/HomePage';
import LoginPage from './Components/LoginSignup/LoginPage';
import ForgotID from './Components/LoginSignup/ForgotID';
import ForgotPW from './Components/LoginSignup/ForgotPW';
import Signup from './Components/LoginSignup/Signup';




function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/forgot-id" element={<ForgotID />} />
      <Route path="/forgot-password" element={<ForgotPW />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
