import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users.jsx'
import Signup from './user/Signup.jsx'
import Signin from './auth/Signin.jsx'

const MainRouter = () => {
        return (<div>
                
                <Routes>
                        
                        <Route exact path="/" element={<Home />} />
                        <Route path="/Users" element={<Users />} />
                        <Route path="/Signup" element={<Signup />} />
                        <Route path="/Signin" element={<Signin />} />
                </Routes>
        </div>
        )
}
export default MainRouter
