import React, { useEffect, useState } from 'react'
// import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

function Freebook() {

    // const filterData = list.filter((data)=>data.category === "Free");
    const [book , setBook] = useState([])

    useEffect(()=>{
      const getbook = async () =>{
        // const res = await axios.get("http://localhost:4000/book/")
        const res = await axios.get("https://aurabooks.onrender.com/book");
        console.log(res);
        setBook(res.data.filter((data) => data.category=="Free"))
      }
      getbook();
    } , [])
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
            <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
            <p>Explore our free courses at AuraBooks, designed to enhance your literary journey. Dive into a variety of topics and sharpen your reading and writing skills, all at no cost!
            </p>
        </div>
    
    <div>
      <Slider {...settings}>
        {book.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook
//props are used to pass data from parent component  to child component