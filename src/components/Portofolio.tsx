import React from 'react';
import sondoqi from '../assets/sondoqi.png';
import Slider from "react-slick";

const Portfolio = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true, // Set to false to prevent cloning
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    pauseOnHover: false,
    autoplaySpeed: 2000,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1444,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const projects = [
    {
      title: 'Sondoqi',
      tech: '#React',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      image: sondoqi,
    },
    {
      title: 'Project 2',
      tech: '#NodeJS',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: sondoqi,
    },
    {
      title: 'Project 3',
      tech: '#Express',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      image: sondoqi,
    },
    {
      title: 'Project 4',
      tech: '#MongoDB',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
      image: sondoqi,
    },
    {
      title: 'Project 5',
      tech: '#ReactNative',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
      image: sondoqi,
    },
    {
      title: 'Project 6',
      tech: '#VueJS',
      description: 'Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
      image: sondoqi,
    },
    {
      title: 'Project 7',
      tech: '#Angular',
      description: 'Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: sondoqi,
    },
    {
      title: 'Project 8',
      tech: '#Bootstrap',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
      image: sondoqi,
    },
  ];

  return (
    <>
      <h4 className='uppercase text-gray-400 md:text-3xl text-2xl mt-4 font-medium'>Portfolio</h4>
      <h1 className='text-gray-200 md:text-6xl text-4xl font-semibold mt-4'>
        Featured <span className='text-primary'>Projects</span>
      </h1>

      <div className='w-full flex justify-center items-center '>
        <div className="w-full py-12 h-fit ">
          <Slider {...settings} className='h-[28rem]'>
            {projects.map((project, index) => (
              <div key={index} className="portfolio-card h-[26rem] bg-[#141b22] px-4 pt-4 pb-3 mx-2">
                <div className="portfolio-card-content">
                  <div className="overflow-hidden">
                    <img src={project.image} alt={project.title} className='w-full h-60 portfolio-image' />
                  </div>
                  <h4 className="text-2xl mt-3 font-semibold text-gray-200">
                    {project.title} <span className='text-primary'>{project.tech}</span>
                  </h4>
                  <p className='text-gray-400 md:text-xl text-lg mt-3'>{project.description}</p>
                </div>
                <span className="border_btm"></span>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
