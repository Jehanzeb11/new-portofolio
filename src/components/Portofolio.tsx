import React from 'react'
import sondoqi from '../assets/sondoqi.png'
import Slider from "react-slick";

const Portofolio = () => {

  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    slidesToShow: 5,
    height: "auto",
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1444,
        settings: {
          slidesToShow:4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        },
        
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        },
        
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow:2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        },
        
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
 };

  return (
    <>
    <h4 className='uppercase text-gray-400 md:text-3xl text-2xl mt-4 font-medium'>Portfolio</h4>
    <h1 className='text-gray-200 md:text-6xl text-4xl font-semibold mt-4'>Featured <span className='text-primary'> Projects</span></h1>

<div className='w-full flex justify-center items-center mb-8 '>

<div className="w-full py-12 h-fit">

    <Slider {...settings} className='h-[28rem]'>
      <div className="portfolio-card bg-[#141b22] px-4 pt-4 pb-3 mx-2">
        <div className="portfolio-card-content">
          <div className="overflow-hidden">
            <img src={sondoqi} alt="sondoqi" className='w-full h-60 porfolio-image'/>
          </div>
          <h4 className="text-2xl mt-3 font-semibold text-gray-200">Sondoqi <span className='text-primary'> #React</span></h4>
          <p className='text-gray-400 md:text-xl text-lg mt-3'>Lorem ipsum dolor sit amet elit consectetur adipisicing elit. </p>
        </div>
        <span className="border_btm"></span>
      </div>
      <div className="portfolio-card bg-[#141b22] px-4 pt-4 pb-3 mx-2">
        <div className="portfolio-card-content">
          <div className="overflow-hidden">
            <img src={sondoqi} alt="sondoqi" className='w-full h-60 porfolio-image'/>
          </div>
          <h4 className="text-2xl mt-3 font-semibold text-gray-200">Sondoqi <span className='text-primary'> #React</span></h4>
          <p className='text-gray-400 md:text-xl text-lg mt-3'>Lorem ipsum dolor sit amet elit consectetur adipisicing elit. </p>
        </div>
        <span className="border_btm"></span>
      </div>
      <div className="portfolio-card bg-[#141b22] px-4 pt-4 pb-3 mx-2">
        <div className="portfolio-card-content">
          <div className="overflow-hidden">
            <img src={sondoqi} alt="sondoqi" className='w-full h-60 porfolio-image'/>
          </div>
          <h4 className="text-2xl mt-3 font-semibold text-gray-200">Sondoqi <span className='text-primary'> #React</span></h4>
          <p className='text-gray-400 md:text-xl text-lg mt-3'>Lorem ipsum dolor sit amet elit consectetur adipisicing elit. </p>
        </div>
        <span className="border_btm"></span>
      </div>
      <div className="portfolio-card bg-[#141b22] px-4 pt-4 pb-3 mx-2">
        <div className="portfolio-card-content">
          <div className="overflow-hidden">
            <img src={sondoqi} alt="sondoqi" className='w-full h-60 porfolio-image'/>
          </div>
          <h4 className="text-2xl mt-3 font-semibold text-gray-200">Sondoqi <span className='text-primary'> #React</span></h4>
          <p className='text-gray-400 md:text-xl text-lg mt-3'>Lorem ipsum dolor sit amet elit consectetur adipisicing elit. </p>
        </div>
        <span className="border_btm"></span>
      </div>
      <div className="portfolio-card bg-[#141b22] px-4 pt-4 pb-3 mx-2">
        <div className="portfolio-card-content">
          <div className="overflow-hidden">
            <img src={sondoqi} alt="sondoqi" className='w-full h-60 porfolio-image'/>
          </div>
          <h4 className="text-2xl mt-3 font-semibold text-gray-200">Sondoqi <span className='text-primary'> #React</span></h4>
          <p className='text-gray-400 md:text-xl text-lg mt-3'>Lorem ipsum dolor sit amet elit consectetur adipisicing elit. </p>
        </div>
        <span className="border_btm"></span>
      </div>
    </Slider>
        

</div>

</div>


    </>
  )
}

export default Portofolio