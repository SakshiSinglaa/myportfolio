import React from 'react'
import photo from '../../src/assets/photo.png'
import Sakshi_Singla from '../assets/Sakshi_Singla.pdf'
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-0">

    <img className='rounded-full h-[250px] w-[250px]' src={photo} alt='profile' />

      <h1 className="text-4xl font-bold mt-4">Hi, I'm <span className='text-blue-500'> Sakshi Singla</span></h1>

      <h6 className="text-2xl font-semibold mt-4">
        <Typewriter
          words={[
            "Software Developer",
            "MERN Stack Developer",
            "Frontend Enthusiast",
            "Passionate Coder",
          ]}
          loop={0} 
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={1000} 
        />
      </h6>

      <p className='mt-6 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-50 text-lg'>
        Hi, I'm Sakshi Singla, a passionate software developer with expertise in MERN stack, frontend development, and database management. I love building scalable, efficient, and user-friendly web applications that solve real-world problems. Currently, I'm in my final year of B.Tech. in Computer Science, sharpening my skills in C++, Java, Data Structures & Algorithms (DSA), and full-stack development. 
      </p>

      <div className="mt-8 flex gap-10">
      <a href="https://bio.link/sakshisingla" className="text-lg px-4 py-2 border border-gray-800 rounded-lg" target="_blank" rel="noopener noreferrer">Connect with me!</a>
        <a href={Sakshi_Singla} className="text-lg px-4 py-2 bg-blue-500 text-white rounded-lg">View Resume</a>
      </div>
    </div>
  )
}

export default Home
