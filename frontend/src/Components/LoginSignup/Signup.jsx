import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [formData, setFormData] = useState({
    user_id: '',
    user_pw: '',
    user_name: '',
    user_email: '',
    joined_at: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/user/signup', formData)
      .then(response => {
        console.log('Signup successful:', response.data);
      })
      .catch(error => {
        console.error('There was an error signing up!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="user_id"
        value={formData.user_id}
        onChange={handleChange}

      />
      <input
        type="password"
        name="user_pw"
        value={formData.user_pw}
        onChange={handleChange}

      />
      <input
        type = "text"
        name='user_name'
        value={formData.user_name}
        onChange ={handleChange}
      />
      <input
        type="email"
        name="user_email"
        value={formData.user_email}
        onChange={handleChange}
 
      />
        
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;