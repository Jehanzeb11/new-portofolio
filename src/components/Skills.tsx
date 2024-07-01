import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {

  const htmlRef = useRef(null);
  const cssRef = useRef(null);
  const jsRef = useRef(null);
  const reactRef = useRef(null);
  const reactNativeRef = useRef(null);
  const nodeRef = useRef(null);
  const expRef = useRef(null);
  const mongoRef = useRef(null);

  useEffect(() => {
    const observers:any = [];

    const createObserver = (target:any, className:any) => {
      const progressBar = target.querySelector('.progress-bar');

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            progressBar.classList.add(className);
            observer.unobserve(target); // Remove observer after animation starts
          }
        });
      }, { threshold: 0.5 }); // Adjust the threshold as needed

      observer.observe(target);
      observers.push(observer);
    };

    if (htmlRef.current) {
      createObserver(htmlRef.current, 'html-progress');
    }
    if (cssRef.current) {
      createObserver(cssRef.current, 'css-progress');
    }
    if (jsRef.current) {
      createObserver(jsRef.current, 'js-progress');
    }
    if (reactRef.current) {
      createObserver(reactRef.current, 'react-progress');
    }
    if (reactNativeRef.current) {
      createObserver(reactNativeRef.current, 'ts-progress');
    }
    if (nodeRef.current) {
      createObserver(nodeRef.current, 'node-progress');
    }
    if (expRef.current) {
      createObserver(expRef.current, 'express-progress');
    }
    if (mongoRef.current) {
      createObserver(mongoRef.current, 'mongo-progress');
    }

    return () => {
      observers.forEach((observer:any) => observer.disconnect());
    };
  }, []);

  return (
    <div className='flex justify-center items-center flex-col max-lg:mt-16 max-lg:px-4'>
      <h4 className='uppercase text-gray-400 md:text-3xl text-2xl font-medium text-center'>Skills & Experience</h4>
      <h1 className='text-gray-200 md:text-6xl text-4xl font-semibold mt-4 text-center'>
        Technical <span className='text-primary'>Experience</span>
      </h1>

      <div className="container ">
        
        <div className="grid grid-cols-12 gap-8 md:mt-16 mt-8">
          <div className="md:col-span-6 col-span-12">
            <button className="text-primary lg:text-2xl text-xl font-medium border-[4px] border-primary lg:p-3.5 p-2.5 text-center">
              2023 - 2024
            </button>
            <h4 className="text-gray-200 lg:text-5xl text-4xl my-4 font-semibold">
              Internship Frontend Developer
            </h4>
            <p className="text-gray-400 capitalize text-xl">
              From September 1st, 2023, I started my internship as a Frontend Developer and completed it on December 31st, 2023.
            </p>
          </div>

          <div className="md:col-span-6 col-span-12">
            <button className="text-primary lg:text-2xl text-xl font-medium border-[4px] border-primary lg:p-3.5 p-2.5 text-center">
              2024 - 2024
            </button>
            <h4 className="text-gray-200 text-4xl my-4 font-semibold">
              Jr Frontend Developer
            </h4>
            <p className="text-gray-400 capitalize text-xl">
              From January 1st, 2024, I got promoted as a Junior Frontend Developer and it is still continue.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-12 gap-5 mb-10 mt-8 uppercase'>


<div className="md:col-span-6 col-span-12 bg-gray-800 relative" ref={htmlRef}>
        <p className="md:p-5 p-3 md:text-2xl text-xl font-semibold text-gray-200">html</p>
        <div className="absolute bg-primary p-1 progress-bar bottom-0 left-0"></div>
      </div>

      <div className="md:col-span-6 col-span-12 bg-gray-800 relative" ref={cssRef}>
        <p className="md:p-5 p-3 md:text-2xl text-xl font-semibold text-gray-200">css</p>
        <div className="absolute bg-primary p-1 progress-bar bottom-0 left-0"></div>
      </div>

      <div className="md:col-span-6 col-span-12 bg-gray-800 relative" ref={jsRef}>
        <p className="md:p-5 p-3 md:text-2xl text-xl font-semibold text-gray-200">javascript</p>
        <div className="absolute bg-primary p-1 progress-bar bottom-0 left-0"></div>
      </div>

      <div className="md:col-span-6 col-span-12 bg-gray-800 relative" ref={reactRef}>
        <p className="md:p-5 p-3 md:text-2xl text-xl font-semibold text-gray-200">React Js</p>
        <div className="absolute bg-primary p-1 progress-bar bottom-0 left-0"></div>
      </div>

      <div className="md:col-span-6 col-span-12 bg-gray-800 relative" ref={reactNativeRef}>
        <p className="md:p-5 p-3 md:text-2xl text-xl font-semibold text-gray-200">React Native</p>
        <div className="absolute bg-primary p-1 progress-bar bottom-0 left-0"></div>
      </div>

      <div className="md:col-span-6 col-span-12 bg-gray-800 relative" ref={nodeRef}>
        <p className="md:p-5 p-3 md:text-2xl text-xl font-semibold text-gray-200">node js</p>
        <div className="absolute bg-primary p-1 progress-bar bottom-0 left-0"></div>
      </div>

      <div className="md:col-span-6 col-span-12 bg-gray-800 relative" ref={expRef}>
        <p className="md:p-5 p-3 md:text-2xl text-xl font-semibold text-gray-200">Express js</p>
        <div className="absolute bg-primary p-1 progress-bar bottom-0 left-0"></div>
      </div>

      <div className="md:col-span-6 col-span-12 bg-gray-800 relative" ref={mongoRef}>
        <p className="md:p-5 p-3 md:text-2xl text-xll font-semibold text-gray-200">Mongo db</p>
        <div className="absolute bg-primary p-1 progress-bar bottom-0 left-0"></div>
      </div>

        </div>

      </div>
    </div>
  );
};

export default Skills;
