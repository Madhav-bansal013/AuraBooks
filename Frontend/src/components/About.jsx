import React from 'react'
import about from "../../public/about.png"
import Navbar from './Navbar'
import Footer from './Footer'
function About() {
  return (
    <>
    <Navbar/>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
        <div className='order-1 w-full md:w-1/2'>
            <img src={about} className='w-92 h-[500px] m-auto mt-20' alt="" />
        </div>

        <div className='order-2 md:order-1 w-full md:w-1/2  mt-12 md:mt-32'>
            <div className='space-y-12'>
                <h1 className='text-4xl font-bold'>Welcome to<span className='text-pink-500'> AuraBooks Reader!</span>
                </h1>
                <p className='text-xl'>A sanctuary for book lovers where the magic of reading comes to life. Our journey began with a passion for literature, aiming to create a haven where readers can explore diverse worlds. Our thoughtfully curated collection spans from timeless classics to contemporary gems, including works by independent and local authors. Designed with cozy reading nooks and a serene ambiance, our bookstore offers an escape from the everyday hustle. Beyond books, we serve as a community hub, hosting author readings, workshops, and book clubs to connect and inspire. Our mission is to foster a love of reading and enrich our community.
                <br />
                <span className='text-pink-500 font-bold'x>Happy reading!</span>
                </p>
            </div>
            <a href="/"><button className="btn bg-pink-500 text-white dark:border-none mt-6 mb-5 hover:scale-105 hover:text-black duration-300">Back</button></a>
        </div>
        
      
    </div>
    <Footer/>
    </>
  )
}

export default About
