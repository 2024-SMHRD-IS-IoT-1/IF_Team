import React, {useState, useEffect} from 'react';
import '../../css/signup.css';
import axios from 'axios';


// icon 이미지
import { IoIosMail} from "react-icons/io";
import { RiLockPasswordFill} from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
//import { ImManWoman } from "react-icons/im";
import { TiUserDelete } from "react-icons/ti";



export const Signup = () => {
    const [action, setAction] = useState("Sign UP");
    const [gender, setGender] = useState('');
    const [userName, setUserName] = useState("");
      
// 성별 radio 박스
const handleGenderChange = (event) => {
  setGender(event.target.value);
};

const SignupRequest = () => {
    axios.post("url/signup",{userName: userName})
}


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
                <input type="text" placeholder='  name' id = 'InputName' onChange={(e) => {
                    console.log(e.target.value)
                }} />
            </div>
            
            <div className='userid' >

                <TiUserDelete size={24}/>
                <input type="text" placeholder='  id' id = 'InputID'/>
            </div>
            <div className='password'>
                <RiLockPasswordFill size={24}/>
                <input type="password" placeholder='  password' id='InputPW' />
            </div>
            <div className='passwordcheck'>
                <MdPassword size={24}/>
                <input type="password" placeholder='  password check' />
            </div>
            <div className='inputs'>
                <IoIosMail size={24} />
                <input type="email" placeholder='  email' id = 'InputEmail'/>
            </div>
            <div className='birth'>
                <FaBirthdayCake size={24}/>
                <input type="date" placeholder='  bithday' id ='Inputbirth'/>
            </div>
            {/*<div className='gender'>
                < ImManWoman size={24}/>
                <label className='male_female'>
                   <input
                      type='radio'
                      value='male'
                      checked={gender === 'male'}
                      onChange={handleGenderChange}
                      id ='Inputmale'
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
            </div>*/}
        </div>


        <div className='submit-container'>
            <button className="submit" onClick={()=>{setAction("Sign Up")}}>Sign UP</button> 
        </div>
    </div>
   
  )
}
<<<<<<< HEAD
=======

>>>>>>> 96774bde577ffeaa3fcf0b86f8836157d9de0fd0
export default Signup;