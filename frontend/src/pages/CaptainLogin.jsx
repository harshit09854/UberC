import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainLogin = () => {

  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   const [captainData, setCaptainData] = useState({});
    const SubmitHandler = (e) => {
      e.preventDefault();
      setCaptainData({
        email: email,
         password: password
        })
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
