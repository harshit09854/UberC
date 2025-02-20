import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {CaptainDataContext} from '../Context/CaptainContext'
const CaptainSignup = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [userData ,setUserData] = useState({});
  const {user,setUser} = useContext(UserDataContext);
  
const {captain , setCaptain} = React.useContext(CaptainDataContext);

   const SubmitHandler = (e) => {
    e.preventDefault();
   setUserData({
    fullName :{
    firstName : firstName,
    lastName : lastName,
    },
    email : email,
    password : password
   })
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
   
   }


  return (
   
      <div>
      <div className="py-5 px-5 flex flex-col justify-between h-screen">
        <div>
          <img
            className="w-16 mb-10"
            src="https://www.svgrepo.com/show/505031/uber-driver.svg"
            alt=""
          />

          <form
                onSubmit={(e) => {
              SubmitHandler(e);
            }}
          >
            <h3 className="text-lg   w-full font-medium mb-2">What's Our Captain's name</h3>
            <div className="flex gap-4 mb-6">
              <input
                required
                className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-base placeholder:text-base"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                required
                className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-base placeholder:text-base"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <h3 className="text-lg font-medium mb-2">What's our Captain's email</h3>
            <input
              required
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}  
            />
            <h3 className="text-lg mb-2">Enter password</h3>
            <input
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="password"
              required
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className=" bg-[#111] font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-sm text-white">
              Login
            </button>
          </form>
          <p className="text-center">
            {" "}
            Already have an account?
            <Link to="/CaptainLogin" className="text-blue-600">
              Login here
            </Link>
          </p>
        </div>
        <div>
          <p className="text-[10px] leading-tight">
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline">Google Privacy Policy</span> and{" "}  
            <span className="underline">Terms of Service apply</span>.
          </p>
        </div>
      </div>
    </div>
   
  )
}

export default CaptainSignup
