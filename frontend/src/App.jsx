import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup' 
import CaptainLogin from './pages/CaptainLogin'
import { UserDataContext } from './context/userContext'
const App = () => {

  return (
    <div>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/login' element={<UserLogin/>} />
         <Route path='/signup' element={<UserSignup/>} />
         <Route path='/CaptainLogin' element={<CaptainLogin/>} />
         <Route path='/captain-signup' element={<CaptainSignup/>} />
      </Routes>
       </div>
  )
}

export default App
