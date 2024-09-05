
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/LoginSignup/HomePage';
import LoginPage from './Components/LoginSignup/LoginPage';
import ForgotID from './Components/LoginSignup/ForgotID';
import ForgotPW from './Components/LoginSignup/ForgotPW';
import Signup from './Components/LoginSignup/Signup';
import Recommend from './Components/LoginSignup/Recommend';
import InfoModal from './Components/InfoModal'
import Main from './Components/LoginSignup/Main';
import FeedbackMain from './Components/Feedback&Review/FeedbackMain';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/forgot-id" element={<ForgotID />} />
      <Route path="/forgot-password" element={<ForgotPW />} />
      <Route path="/Recommend" element={<Recommend/>} />
      <Route path="/InfoModal" element={<InfoModal/>} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/FeedbackMain" element={<FeedbackMain />} />
    </Routes>
  );
}

export default App;
