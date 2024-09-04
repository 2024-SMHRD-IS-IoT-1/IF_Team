
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/LoginSignup/HomePage';
import LoginPage from './Components/LoginSignup/LoginPage';
import SignupPage from './Components/LoginSignup/Signup';
import ForgotID from './Components/LoginSignup/ForgotID';
import ForgotPW from './Components/LoginSignup/ForgotPW';



function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Signup" element={<SignupPage />} />
      <Route path="/forgot-id" element={<ForgotID />} />
      <Route path="/forgot-password" element={<ForgotPW />} />
    </Routes>
  );
}

export default App;
