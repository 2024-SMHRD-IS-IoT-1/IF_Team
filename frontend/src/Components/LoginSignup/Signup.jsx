import React, {  useRef } from 'react';
import axios from 'axios';
// icon 이미지
import { IoIosMail} from "react-icons/io";
import { RiLockPasswordFill} from "react-icons/ri";
import { FaUser } from "react-icons/fa";
//import { FaBirthdayCake } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { TiUserDelete } from "react-icons/ti";
import {navigate, useNavigate} from "react-router-dom";



function Signup() {
  const user_id = useRef('');
  const user_pw = useRef('');
  const user_name = useRef('');
  const user_email = useRef('');
  
  // const [formData, setFormData] = useState({
  //   user_id: '',
  //   user_pw: '',
  //   user_name: '',
  //   user_email: '',
  //   joined_at: ''
  // });

  // const handleChange = (e) => {
  //   console.log(formData)
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      user_id : user_id.current.value,
      user_pw : user_pw.current.value,
      user_name : user_name.current.value,
      user_email : user_email.current.value
    }
    console.log(formData)
    axios.post('http://localhost:5000/user/Signup', formData)
      .then(response => {
        console.log('Signup successful:', response.data);
      })
      .catch(error => {
        console.error('There was an error signing up!', error);
      });
  };

  const navigate = useNavigate();
  const handleHomePageClick = ()=>{
    navigate('/homepage') }
  return (
    
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className='header'>
            <div className='text'>Sign Up</div>
            <div className='underline'></div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className='input-container'>
            
            <div className='userid' >
                <TiUserDelete size={24}/>
                {/* <input type="text" placeholder='  id' id = 'InputID' onChange={handleChange} /> */}
                <input type="text" placeholder='  id' id = 'InputID' ref={user_id}/>
            </div>
            <div className='password'>
                <RiLockPasswordFill size={24}/>
                {/* <input type="password" placeholder='  password' id='InputPW' onChange={handleChange}  /> */}
                <input type="password" placeholder='  password' id='InputPW' ref={user_pw}  />
            </div>
            <div className='passwordcheck'>
                <MdPassword size={24}/>
                <input type="password" placeholder='  password check'/>
            </div>
            <div className='name'>
                <FaUser size={24}/>
                {/* <input type="text" placeholder='  name' id = 'InputName' onChange={handleChange} /> */}
                <input type="text" placeholder='  name' id = 'InputName' ref={user_name} />
            </div>
            <div className='inputs'>
                <IoIosMail size={24} />
                {/* <input type="email" placeholder='  email' id = 'InputEmail' onChange={handleChange} /> */}
                <input type="email" placeholder='  email' id = 'InputEmail' ref={user_email} />
            </div>
            {/* <div className='birth'>
                <FaBirthdayCake size={24}/>
                <input type="date" placeholder='  bithday' id ='Inputbirth' onChange={handleChange} />
            </div> */}
        </div>


        <div className='submit-container'>
            <button className="submit" >Sign UP</button> 
        <div className='underline'></div>
            <button id='signup-homesubmit' onClick={handleHomePageClick}>홈으로 가기</button>
        </div> 


        </form>
    </div>
  
  )
}

export default Signup;