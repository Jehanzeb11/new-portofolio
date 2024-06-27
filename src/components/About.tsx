import React from 'react'
import aboutAnimation from "../assets/animations/about.json"
import Lottie from 'lottie-react'

const About = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
    <h4 className='uppercase text-gray-400 md:text-3xl text-2xl font-medium text-center'>My Bio</h4>
    <h1 className='text-gray-200 md:text-6xl text-4xl font-semibold mt-4 text-center'>About <span className='text-primary'>Me</span></h1>

<div className="container">

<div className="mt-4 flex justify-center items-center max-md:flex-wrap gap-6 h-full">

<div className="">
<Lottie animationData={aboutAnimation} className='max-w-full'/>
</div>

<div className=" text-gray-400 flex items-stretch flex-col">

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta possimus optio reprehenderit voluptatem in iste architecto ex, porro commodi ea cumque, quia illum repellat eum aut consectetur nam quae at!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta possimus optio reprehenderit voluptatem in iste architecto ex, porro commodi ea cumque, quia illum repellat eum aut consectetur nam quae at!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta possimus optio reprehenderit voluptatem in iste architecto ex, porro commodi ea cumque, quia illum repellat eum aut consectetur nam quae at!</p>

</div>

</div>

</div>

    
    </div>
  )
}

export default About