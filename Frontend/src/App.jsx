import React from 'react'
import Home from './Home/Home'
import {Route, Routes} from "react-router-dom"
import Courses from './Courses/Courses'
import Signup from './components/Signup'
import About from './components/About'
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
    <div className='dark:bg-slate-800 dark:text-white'>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/course' element= {<Courses/>}/>
        <Route path='/signup' element= {<Signup/>}/>
        <Route path='/about' element= {<About/>}/>
      </Routes>
      <Toaster/>
      </div>
    </>
    
  )
}

export default App
