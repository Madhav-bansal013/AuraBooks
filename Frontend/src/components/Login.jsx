import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <dialog id="my_modal_3" className="modal">
  <div className="modal-box dark:bg-slate-800 dark:text-white">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none'/>
    </div>
    {/*password*/}
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br />
        <input type="password" placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none'/>
    </div>

    {/*buttons*/}

    <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-300'>Login</button>
        <p>Not registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
    </div>
  </div>
</dialog>
      
    </div>
  )
}

export default Login
