
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/LoginSignup/HomePage';
import LoginPage from './Components/LoginSignup/LoginPage';
import ForgotID from './Components/LoginSignup/ForgotID';
import ForgotPW from './Components/LoginSignup/ForgotPW';
import Signup from './Components/LoginSignup/Signup';
import Recommend from './Components/LoginSignup/Recommend';
<<<<<<< HEAD
import Product from './Components/LoginSignup/Product';

=======
import Main from './Components/LoginSignup/Main';
>>>>>>> 0c13fefc22e9514947ea190dfc40931b98ae2e15


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/forgot-id" element={<ForgotID />} />
      <Route path="/forgot-password" element={<ForgotPW />} />
<<<<<<< HEAD
      <Route path="/Recommend" element={<Recommend/>} />
      <Route path="/Product" element={<Product/>} />
=======
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Recommend" element={<Recommend />} />
 
>>>>>>> 0c13fefc22e9514947ea190dfc40931b98ae2e15
    </Routes>
  );
}

export default App;
