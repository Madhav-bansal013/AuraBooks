import React, { useEffect, useState } from 'react'
import Cards from "./Cards"
import { Link } from 'react-router-dom'
import axios from "axios"
function Course() {
  //below 6-20 is used to connect to backend using axios 
  const [book , setBook] = useState([]);
  useEffect(()=>{
    const getBook = async ()=>{
      try {
        // const res = await axios.get("http://localhost:4000/book");
        const res = await axios.get("https://aurabooks.onrender.com/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  } , [])

  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
        <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
        <p className='mt-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda voluptatibus dignissimos, nesciunt tempore expedita laudantium similique, numquam dolore quasi perspiciatis debitis accusantium iste. Autem odit, magni sapiente molestiae est soluta!</p>
        
        <Link to="/">
          <button className='btn bg-pink-500 text-white px-4 py-2 mt-8 rounded-lg hover:scale-105 hover:text-black hover:bg-pink-300 dark:border-none'>Back</button>
        </Link>
      </div>

      <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {
          book.map((item)=>(

            <Cards key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Course
