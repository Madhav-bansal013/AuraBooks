import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from "axios" //it is use to send req to db
import toast from 'react-hot-toast';

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname  || "/"; //it is used to redirect signup page to home page after success signup


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo = {
      fullname : data.fullname ,
      email: data.email,
      password: data.password
    }
    // await axios.post("http://localhost:4000/user/signup" ,userInfo)
    await axios.post("https://aurabooks.onrender.com/user/signup" ,userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success("Signup Successfully")
        navigate(from , {replace:true});
        setTimeout(()=>{
          window.location.reload()
        } , 500)
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user)) //converts a JavaScript object to a JSON string because from backend it was coming in object form

    }).catch((err)=>{
      if(err.response){
        console.log(err);
        toast.error("Error: " + err.response.data.message)
      }
    })
  }

  return (
    <>
     <div className='flex h-screen items-center justify-center dark:bg-slate-900 dark:text-white'>
     <div className="w-[600px]">
  <div className="modal-box dark:bg-slate-800   dark:text-white">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

    <h3 className="font-bold text-lg">Signup</h3>
    {/* email */}

    <label className="input input-bordered flex items-center gap-2 mt-4 space-y-2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
    
    <input type="email" className="grow w-10" placeholder="Email"
    {...register("email", { required: true })}/>
    {errors.email && <span className='text-[12px] text-red-600'>*Required</span>}
    </label>

    {/* usename */}

    <label className="input input-bordered flex items-center gap-2 mt-4 space-y-2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
    <input type="text" className="grow w-10" placeholder="Fullname"
    {...register("fullname", { required: true })}/>
    {errors.fullname && <span className='text-[12px] text-red-600'>*Required</span>}
    </label>

    {/* password */}

    <label className="input input-bordered flex items-center gap-2 mt-4 space-y-2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>

    <input type="password" className="grow w-10" placeholder='Password' 
    {...register("password", { required: true })}/>
    {errors.password && <span className='text-[12px] text-red-600'>*Required</span>}
    </label>

    
    {/* <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br />
        <input type="text" placeholder='Enter your fullname' className='w-80 px-3 py-1 border rounded-md outline-none'/>
    </div>

    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none'/>
    </div> */}
    {/*password*/}
    {/* <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br />
        <input type="password" placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none'/>
    </div> */}

    {/*buttons*/}

    <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 w-15 h-10 text-white px-3 py-1 mx-5 md:mx-0 rounded-md hover:bg-pink-700 duration-300'>Signup</button>
        <p className='text-xl'>Already registered? <button className='underline text-blue-800 cursor-pointer' onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</button></p>
        <Login/>
    </div>
    </form>
  </div>
</div>
        </div> 
    </>
  )
}

export default Signup
