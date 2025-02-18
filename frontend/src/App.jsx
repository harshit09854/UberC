import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup' 
import CaptainLogin from './pages/CaptainLogin'

import Home from './pages/Home'
const App = () => {

  return (
    <div>
      <Routes>
         <Route path='/' element={<Start/>} />
         <Route path='/login' element={<UserLogin/>} />
         <Route path='/signup' element={<UserSignup/>} />
         <Route path='/CaptainLogin' element={<CaptainLogin/>} />
         <Route path='/captain-signup' element={<CaptainSignup/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
       </div>
  )
}

export default App
