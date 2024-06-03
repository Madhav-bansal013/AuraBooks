import React from 'react'
import Home from './Home/Home'
import {Navigate, Route, Routes} from "react-router-dom"
import Courses from './Courses/Courses'
import Signup from './components/Signup'
import About from './components/About'
import Contactus from './components/Contactus'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/Authprovider'


function App() {
  const [authUser , setAuthUSer] =useAuth();
    console.log(authUser);
  return (
    <>
    <div className='dark:bg-slate-800 dark:text-white'>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/course' element= {authUser?<Courses/>:<Navigate to="/signup" />}/>
        <Route path='/signup' element= {<Signup/>}/>
        <Route path='/about' element= {<About/>}/>
        <Route path='/contactus' element= {<Contactus/>}/>
      </Routes>
      <Toaster/>
      </div>
    </>
    
  )
}

export default App
