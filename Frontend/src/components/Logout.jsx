import React from 'react'
import { useAuth } from '../context/Authprovider'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser , setAuthUSer] = useAuth()
    const handlelogout = () =>{
        try {
            setAuthUSer({
                ...authUser,
                user:null

            })
            localStorage.removeItem("Users")
            toast.success("Logout Successfully")
            setTimeout(()=> {
                window.location.reload()
            }, 500)
        } catch (error) {
            toast.error("Error: " + error)
            setTimeout(()=>{} , 2000)
        }
    }
  return (
    <div>
      <button className='btn px-3 py-2 cursor-pointer bg-red-600 rounded-lg text-white dark:border-none hover:scale-105  hover:text-black hover:bg-red-300' onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Logout
