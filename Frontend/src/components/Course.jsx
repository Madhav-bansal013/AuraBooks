import React from 'react'
import list from "../../public/list.json"
import Cards from "./Cards"
import { Link } from 'react-router-dom'
function Course() {
  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
        <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
        <p className='mt-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda voluptatibus dignissimos, nesciunt tempore expedita laudantium similique, numquam dolore quasi perspiciatis debitis accusantium iste. Autem odit, magni sapiente molestiae est soluta!</p>
        
        <Link to="/">
          <button className='btn bg-pink-500 text-white px-4 py-2 mt-8 rounded-lg hover:scale-105 hover:text-black'>Back</button>
        </Link>
      </div>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          list.map((item)=>(

            <Cards key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Course
