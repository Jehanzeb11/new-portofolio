import React from "react";
import aboutAnimation from "../assets/animations/about.json";
import Lottie from "lottie-react";
import { FaFilePdf } from "react-icons/fa";

const About = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <h4 className='uppercase text-gray-400 md:text-3xl text-2xl font-medium text-center'>
        My Bio
      </h4>
      <h1 className='text-gray-200 md:text-6xl text-4xl font-semibold mt-4 text-center'>
        About <span className='text-primary'>Me</span>
      </h1>

      <div className='container'>
        <div className='mt-4 flex justify-center items-center max-md:flex-col gap-6 h-full'>
          <div className='md:w-1/2 w-full'>
            <Lottie
              animationData={aboutAnimation}
              className='max-w-full'
              height={500}
            />
          </div>

          <div className='md:w-1/2 w-full max-md:px-4 text-gray-400 flex justify-between items-start space-y-6 flex-col h-full text-lg'>
            <p>
              I am a passionate and experienced developer specializing in
              front-end, back-end, and mobile app development. With a strong
              foundation in the MERN stack (MongoDB, Express.js, React.js, React
              Native and Node.js), I offer comprehensive development services
              that cover the entire spectrum of web and mobile applications.
            </p>

            <p>
              I am committed to delivering high-quality code and maintaining
              best practices in development to ensure reliable and maintainable
              solutions.
            </p>

            <p>
              I work closely with clients to understand their needs and provide
              tailored solutions that align with their business goals.
            </p>

            <p>
              I stay updated with the latest industry trends and technologies to
              deliver innovative and cutting-edge solutions.
            </p>

            <button className='bg-primary flex items-center justify-center gap-2 py-2 font-semibold px-3 rounded text-black hover:bg-white transition-all ease-in-out duration-500'>
              View Resume <FaFilePdf size={25} color='black' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
