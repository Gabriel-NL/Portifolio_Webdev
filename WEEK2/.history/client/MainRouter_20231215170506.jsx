import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const MainRouter = () => {
        return (<div>
                
                <Routes>
                        
                        <Route exact path="/" element={<Home />} />
                        <Route path="/" element={< />} />
                        <Route path="/Signup" element={<Signup />} />
                        <Route path="/Signin" element={<Signin />} />
                </Routes>
        </div>
        )
}
export default MainRouter
