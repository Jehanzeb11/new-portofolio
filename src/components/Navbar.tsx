import { useState } from "react";
import Logo from "../assets/jehanzeb-logo.png";
import { FaFilePdf } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <header className='sticky top-0 flex justify-center items-center p-4 w-full z-50'>
        <nav className='container flex gap-4 justify-between items-center'>
          <h4 className='text-primary text-2xl font-bold flex gap-2'>
            JEHANZEB <FaComputer size={35} color='white' />{" "}
          </h4>

          <ul className='text-white hidden gap-8 md:text-lg items-center font-semibold md:flex'>
            <li className='hover:text-primary transition-all ease-in-out cursor-pointer duration-500'>
              Home
            </li>
            <li className='hover:text-primary transition-all ease-in-out cursor-pointer duration-500'>
              Service
            </li>
            <li className='hover:text-primary transition-all ease-in-out cursor-pointer duration-500'>
              About
            </li>
            <li className='hover:text-primary transition-all ease-in-out cursor-pointer duration-500'>
              Projects
            </li>
            <li className='hover:text-primary transition-all ease-in-out cursor-pointer duration-500'>
              Contact
            </li>

            <button className='bg-primary flex items-center justify-center gap-2 py-2 px-3 rounded text-black hover:bg-white transition-all ease-in-out duration-500'>
              View Resume <FaFilePdf size={25} color='black' />
            </button>
          </ul>

          {!show ? (
            <button className='md:hidden block bg-primary rounded-full p-1.5 z-50'>
              <FiMenu
                size={25}
                color='white'
                onClick={() => setShow(!show)}
                className={show ? "hidden" : "block"}
              />
            </button>
          ) : (
            <button className='md:hidden block bg-primary rounded-full p-1.5 z-[99999999]'>
              <IoCloseSharp
                size={25}
                color='white'
                onClick={() => setShow(!show)}
                className={show ? "block" : "hidden"}
              />
            </button>
          )}
        </nav>
      </header>

      {show && (
        <div className=''>
          <div className='fixed z-40 bg-gray-900 top-0 left-0 w-full h-screen opacity-35'></div>
          <div
            className={`fixed z-50 right-0 top-0 ${
              show ? "swipeToLeft" : "swipeToRight"
            } w-3/4 h-screen bg-gray-900 p-3`}
          >
            <div className='flex justify-end'>
              <button
                className='md:hidden block bg-primary rounded-full p-1.5'
                onClick={() => setShow(!show)}
              >
                <IoCloseSharp
                  size={25}
                  color='white'
                  className={show ? "block" : "hidden"}
                />
              </button>
            </div>
            <div className='overflow-y-scroll h-full'>
              <ul className='text-white text-center mt-12 gap-8 text-3xl flex justify-center flex-col items-center font-semibold'>
                <li className='hover:text-primary transition-all ease-in-out cursor-pointer duration-500'>
                  Home
                </li>
                <li className='hover:text-primary transition-all ease-in-out cursor-pointer duration-500'>
                  Service
                </li>
                <li className='hover:text-primary transition-all ease-in-out cursor-pointer duration-500'>
                  About
                </li>
                <li className='hover:text-primary transition-all ease-in-out cursor-pointer duration-500'>
                  Projects
                </li>
                <li className='hover:text-primary transition-all ease-in-out cursor-pointer duration-500'>
                  Contact
                </li>
              </ul>
              <div className='w-full flex justify-center'>
                <button className='font-semibold bg-primary flex justify-center items-center gap-2 py-2 px-3 rounded text-black hover:bg-white mt-8  text-center transition-all ease-in-out duration-500 text-2xl'>
                  View Resume <FaFilePdf size={25} color='black' />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
