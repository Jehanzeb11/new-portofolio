import React from 'react'
import { HiCode } from "react-icons/hi";

const Services = () => {

const services = [{service:"Front-End Development",num:"01",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet."},{service:"Backend-Development",num:"02",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet."},{service:"Mobile App Development",num:"03",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet."},{service:"Web Development",num:"04",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet."}]

  return (

    <>
    <h4 className='uppercase text-gray-400 md:text-3xl text-2xl mt-4 font-medium'>Services</h4>
    <h1 className='text-gray-200 md:text-6xl text-4xl font-semibold mt-4'>What <span className='text-primary'> I do</span></h1>
<div className="flex justify-center items-center w-full mb-8">

<div className="container p-6 mt-6">

    <div className='grid grid-cols-12 md:px-6  w-full gap-4'>
        
      {services?.map((service)=>(
        <div className="card bg-[#141b22] lg:col-span-3 col-span md:col-span-6 col-span-12">
        <div className="card-content px-4 py-8">


<p className='absolute serviceNum top-6 opacity-25 z-10 text-primary w-full text-8xl font-extrabold text-center'>{service.num}</p>

<div className='relative z-30'>
            <h3 className="card-title text-gray-200 mt-10 mb-6 text-center lg:text-[1.6rem] text-2xl font-bold"> {service.service}</h3>

<p className='text-center text-gray-400 md:text-xl txt-lg'>{service.desc}</p>
</div>

        </div>
        <span className="border_btm"></span>
    </div>
      ))}

    
</div>

</div>


    </div>
    </>
  )
}

export default Services