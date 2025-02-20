import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup' 
import CaptainLogin from './pages/CaptainLogin'
import Userlogout from './pages/Userlogout' 
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
const App = () => {

  return (
    <div>
      <Routes>
         <Route path='/' element={<Start/>} />
         <Route path='/login' element={<UserLogin/>} />
         <Route path='/signup' element={<UserSignup/>} />
         <Route path='/CaptainLogin' element={<CaptainLogin/>} />
         <Route path='/captain-signup' element={<CaptainSignup/>} />
        <Route path='/home' element={
          <UserProtectWrapper>
            <Home />
          </UserProtectWrapper>
        } />
<Route path='user/logout' element={<UserProtectWrapper>
    <Userlogout/>
  </UserProtectWrapper>
  } />


      </Routes>
       </div>
  )
}

export default App
