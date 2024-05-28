import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast';

function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    }
    // await axios.post("http://localhost:4000/user/login" ,userInfo)
    await axios.post("https://aurabooks.onrender.com/user/login" ,userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success("Login Successfull")
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
    <div>
        <dialog id="my_modal_3" className="modal">
  <div className="modal-box dark:bg-slate-800 dark:text-white">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>
    
    <h3 className="font-bold text-lg">Login</h3>
    {/* email */}
    
    <label className="input input-bordered flex items-center gap-2 mt-4 space-y-2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
    
    <input type="email" className="grow w-10" placeholder="Email"
    {...register("email", { required: true })}/>
    {errors.email && <span className='text-[12px] text-red-600'>*Required</span>}
    </label>
    
    {/*password*/}
    
    <label className="input input-bordered flex items-center gap-2 mt-4 space-y-2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
    <input type="password" className="grow w-10" placeholder='Password' 
    {...register("password", { required: true })}/>
    {errors.password && <span className='text-[12px] text-red-600'>*Required</span>}
    </label>

    {/*buttons*/}

    <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-300'>Login</button>
        <p>Not registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
    </div>
    </form>
  </div>
</dialog>
      
    </div>
  )
}

export default Login
