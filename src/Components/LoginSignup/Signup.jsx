import React, {useState, useEffect} from 'react';
import '../../css/signup.css';
import axios from 'axios';


// icon 이미지
import { IoIosMail} from "react-icons/io";
import { RiLockPasswordFill} from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { ImManWoman } from "react-icons/im";
import { TiUserDelete } from "react-icons/ti";



export const Signup = () => {
    const [action, setAction] = useState("Sign UP");
    const [gender, setGender] = useState('');
    
      
// 성별 radio 박스
const handleGenderChange = (event) => {
  setGender(event.target.value);
};


  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>Sign Up</div>
            <div className='underline'></div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className='input-container'>
            <div className='name'>
                <FaUser size={24}/>
                <input type="text" placeholder='  name' />
            </div>
            <div className='userid'>
                <TiUserDelete size={24}/>
                <input type="text" placeholder='  id' />
            </div>
            <div className='password'>
                <RiLockPasswordFill size={24}/>
                <input type="password" placeholder='  password' />
            </div>
            <div className='passwordcheck'>
                <MdPassword size={24}/>
                <input type="password" placeholder='  password check'/>
            </div>
            <div className='inputs'>
                <IoIosMail size={24} />
                <input type="email" placeholder='  email'/>
            </div>
            <div className='birth'>
                <FaBirthdayCake size={24}/>
                <input type="date" placeholder='  bithday'/>
            </div>
            <div className='gender'>
                < ImManWoman size={24}/>
                <label className='male_female'>
                   <input
                      type='radio'
                      value='male'
                      checked={gender === 'male'}
                      onChange={handleGenderChange}
                    />남자
                </label>
                <label>
                  <input
                   type='radio'
                   value='female'
                   checked={gender === 'female'}
                   onChange={handleGenderChange}
                  />여자
                </label>
            </div>
        </div>


        <div className='submit-container'>
            <button className="submit" onClick={()=>{setAction("Sign Up")}}>Sign UP</button> 
        </div>
    </div>
   
  )
}

export default Signup;