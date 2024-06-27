import { PiGithubLogoFill } from "react-icons/pi";
import { BiLogoGmail } from "react-icons/bi";
import { TfiLinkedin } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";

const HeroSection = () => {
  //   const videoSrc = "https://www.famewheels.net/home-bg-video.mp4";

  return (
    <div className='relative text-gray-400 z-10 text-center md:h-[65vh] h-[60vh] px-2 w-full flex justify-center items-center flex-col'>
      <div className='absolute top-0 left-0 w-full h-full z-[10] opacity-30'>
        <video className=' w-full h-[100%] object-cover' autoPlay muted loop>
          <source
            src='https://www.famewheels.net/home-bg-video.mp4'
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className='max-w-[1200px] z-10'>
        <h1 className='md:text-5xl font-semibold text-[1.7rem] text-gray-200'>
          Hi, I am <span className='text-primary'> Jehanzeb Siddiqui</span>
        </h1>
        <p className='font-medium md:text-3xl text-lg mt-4'>
          I am a{" "}
          <span className='text-primary'> MERN Stack Web Developer </span>{" "}
          transforming ideas into reality and helping people build their dream
          with code and technologies I use.{" "}
        </p>

        <div className='flex justify-center items-center py-10 gap-6'>
          <button className='bg-gray-200 p-3 rounded-full w-fit hover:bg-gray-400 transition-all ease-in-out duration-300 hover:scale-105'>
            <PiGithubLogoFill size={30} color='black' />
          </button>
          <button className='bg-gray-200 p-3 rounded-full w-fit hover:bg-gray-400 transition-all ease-in-out duration-300 hover:scale-105'>
            <BiLogoGmail size={30} color='black' />
          </button>
          <button className='bg-gray-200 p-3 rounded-full w-fit hover:bg-gray-400 transition-all ease-in-out duration-300 hover:scale-105'>
            <TfiLinkedin size={30} color='black' />
          </button>
          <button className='bg-gray-200 p-3 rounded-full w-fit hover:bg-gray-400 transition-all ease-in-out duration-300 hover:scale-105'>
            <FaXTwitter size={30} color='black' />
          </button>
        </div>
      </div>

      {/* <p className='md:text-2xl text-lg mt-4'>I am a <span className='text-primary'> Full Stack Web Developer </span> based in Dubai, UAE Dubai and I love to build things that live on the internet and help people build their dreams with code and technologies I use. I am always looking to improve my skills and learn new things every day to stay up-to-date with the latest technologies and trends in the industry. </p> */}
    </div>
  );
};

export default HeroSection;
