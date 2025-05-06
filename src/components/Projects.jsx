import React from 'react';
import OptiCode from '../assets/OptiCode.mp4'

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center p-0 mt-10">
      <h1 className="text-4xl text-center font-bold mb-6">My <span className="text-blue-500">Projects</span></h1>
      
      <div className="w-full max-w-2xl">
        {/* Project 1 */}
        <div className="mb-6 border-[2px] rounded-xl p-4 mt-8 bg-blue-100 hover:bg-blue-200 hover:text-black">
          <h2 className="text-2xl font-semibold text-black">OptiCode : AI-based Code Reviewer</h2>
          <p className='text-base text-black my-3'>Technologies Used: <span className='text-red-600'>React JS, Node JS, Express JS</span> </p>
          <div className="flex gap-2 mt-2 flex-col text-blue-800">
            <p className='text-base'>• Developed an intelligent code analysis tool that provides real-time suggestions and error detection.</p>
            <p className='text-base'>• Designed an intuitive UI for smooth user interaction and instant feedback.</p>
          </div>
          <div className='flex flex-wrap justify-between text-black mt-6 mx-20'>
            <a href={OptiCode} target="_blank" rel="noopener noreferrer">
              <button className='hover:border-b-2 hover:scale-120'>View Demo</button>
            </a>
            <a href="https://github.com/SakshiSinglaa/OptiCode-Code-Reviewer" target="_blank" rel="noopener noreferrer">
              <button className='hover:border-b-2 hover:scale-120'>View Project</button>
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="mb-6 border-[2px] rounded-xl p-4 mt-8 bg-blue-100 hover:bg-blue-200 hover:text-black">
          <h2 className="text-2xl font-semibold text-black">URL Shortener</h2>
          <p className='text-base text-black my-3'>Technologies Used: <span className='text-red-600'>React JS, Node JS, Express JS, MongoDB</span> </p>
          <div className="flex gap-2 mt-2 flex-col text-blue-800">
            <p className='text-base'>• Designed and developed a full-stack URL shortener for efficient link management.</p>
            <p className='text-base'>• Implemented RESTful API endpoints to create, retrieve, and manage shortened URLs.</p>
            <p className='text-base'>• Utilized MongoDB for optimized storage and retrieval of URL mappings.</p>
          </div>
          <div className='flex flex-wrap justify-between text-black mt-6 mx-20'>
            <a href={OptiCode} target="_blank" rel="noopener noreferrer">
              <button className='hover:border-b-2 hover:scale-120'>View Demo</button>
            </a>
            <a href="https://github.com/SakshiSinglaa/URL-Shortener" target="_blank" rel="noopener noreferrer">
              <button className='hover:border-b-2 hover:scale-120'>View Project</button>
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="mb-6 border-[2px] rounded-xl p-4 mt-8 bg-blue-100 hover:bg-blue-200 hover:text-black">
          <h2 className="text-2xl font-semibold text-black">OptiCode : AI-based Code Reviewer</h2>
          <p className='text-base text-black my-3'>Technologies Used: <span className='text-red-600'>React JS, Node JS, Express JS</span> </p>
          <div className="flex gap-2 mt-2 flex-col text-blue-800">
            <p className='text-base'>• Developed an intelligent code analysis tool that provides real-time suggestions and error detection.</p>
            <p className='text-base'>• Designed an intuitive UI for smooth user interaction and instant feedback.</p>
          </div>
          <div className='flex flex-wrap justify-between text-black mt-6 mx-20'>
            <a href={OptiCode} target="_blank" rel="noopener noreferrer">
              <button className='hover:border-b-2 hover:scale-120'>View Demo</button>
            </a>
            <a href="https://github.com/SakshiSinglaa/OptiCode-Code-Reviewer" target="_blank" rel="noopener noreferrer">
              <button className='hover:border-b-2 hover:scale-120'>View Project</button>
            </a>
          </div>
        </div>

        {/* Project 4 */}
        <div className="mb-6 border-[2px] rounded-xl p-4 mt-8 bg-blue-100 hover:bg-blue-200 hover:text-black">
          <h2 className="text-2xl font-semibold text-black">OptiCode : AI-based Code Reviewer</h2>
          <p className='text-base text-black my-3'>Technologies Used: <span className='text-red-600'>React JS, Node JS, Express JS</span> </p>
          <div className="flex gap-2 mt-2 flex-col text-blue-800">
            <p className='text-base'>• Developed an intelligent code analysis tool that provides real-time suggestions and error detection.</p>
            <p className='text-base'>• Designed an intuitive UI for smooth user interaction and instant feedback.</p>
          </div>
          <div className='flex flex-wrap justify-between text-black mt-6 mx-20'>
            <a href={OptiCode} target="_blank" rel="noopener noreferrer">
              <button className='hover:border-b-2 hover:scale-120'>View Demo</button>
            </a>
            <a href="https://github.com/SakshiSinglaa/OptiCode-Code-Reviewer" target="_blank" rel="noopener noreferrer">
              <button className='hover:border-b-2 hover:scale-120'>View Project</button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;