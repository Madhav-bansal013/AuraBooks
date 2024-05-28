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
      <button className='px-3 py-2 cursor-pointer bg-red-600 rounded-md text-white' onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Logout
