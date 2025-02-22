import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import  {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../Context/captainContext';
const CaptainLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const SubmitHandler = async(e) => {
      e.preventDefault();
       const captain =  {
        email: email,
         password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);
        if (response.status === 200) {
          const data = response.data;
          setCaptain(data.captain);
          localStorage.setItem('token', data.token);
          navigate('/captain-home');  
        }
      setEmail('');
      setPassword('');
    
  }           
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
      <img
        className="w-20 mb-2"
        src="https://www.svgrepo.com/show/505031/uber-driver.svg"
        alt=""
      />

      <form onSubmit={(e)=> {SubmitHandler(e)}} action="">
        <h3 className="text-lg font-medium">What's your email</h3>
        <input
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-gray-400"
          type="email"
          placeholder="email@example.com"
        />
        <h3 className="text-lg mb-2">Enter password</h3>
        <input
          required 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-gray-400"
          type="password"
          placeholder="password"
        />
        <button className=" bg-[#111] font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base text-white">
          Login
        </button>
      </form>
        <p className="text-center"> Join a fleer?<Link to='/captain-signup' className="text-blue-600">Register as a Captain</Link></p>
      </div>
      <div>
        <Link to='/login' className=" bg-[#d5622d] flex items-center justify-center  font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base text-white">Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin
