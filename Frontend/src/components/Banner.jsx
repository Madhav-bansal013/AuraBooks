import React from 'react'
import banner from "../../public/bookf.png"
function Banner() {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
        <div className='order-2 md:order-1 w-full md:w-1/2  mt-12 md:mt-32'>
            <div className='space-y-12'>
                <h1 className='text-4xl font-bold'>Hello, welcomes here to learn something<span className='text-pink-500'> new everday!!!</span>
                </h1>
                <p className='text-xl'>Your ultimate destination for all things literary. At AuraBooks, we combine a love for reading with a seamless shopping experience, offering a wide range of books across various genres for purchase. Whether you're looking for the latest bestsellers, timeless classics, or unique finds, our carefully curated collection ensures there's something for every reader. Our user-friendly platform makes it easy to browse, discover, and buy your next great read. Join our community of book enthusiasts and let AuraBooks be your go-to source for enriching your bookshelf and your mind.
                </p>
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input type="text" className="grow" placeholder="Email" />
                </label>
            </div>
            <button className="btn bg-pink-500 text-white dark:border-none mt-6 mb-5 hover:scale-105 hover:text-black hover:bg-pink-300">Get Started</button>
        </div>
        <div className='order-1 w-full md:w-1/2'>
            <img src={banner} className='w-92 h-[500px] m-auto mt-20' alt="" />
        </div>
      
    </div>
  )
}

export default Banner
