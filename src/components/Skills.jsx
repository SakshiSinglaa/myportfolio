import React from 'react'

const Skills = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-0 m-10">

      <h1 className="text-4xl font-bold mb-6">My <span className="text-blue-500">Skills</span></h1>

      <div className="w-full max-w-2xl">

        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Frontend</h2>
          <div className="flex gap-2 mt-2 flex-wrap">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">HTML</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">CSS</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">JavaScript</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">React JS</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">Tailwind CSS</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">Bootstrap</span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Backend</h2>
          <div className="flex gap-2 mt-2 flex-wrap">
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-md hover:bg-green-200">Node JS</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-md hover:bg-green-200">Express JS</span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Databases</h2>
          <div className="flex gap-2 mt-2 flex-wrap">
            <span className="px-3 py-1 bg-gray-100 text-blue-800 rounded-md hover:bg-blue-200">MongoDB</span>
            <span className="px-3 py-1 bg-gray-100 text-blue-800 rounded-md hover:bg-blue-200">MySQL</span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Languages</h2>
          <div className="flex gap-2 mt-2 flex-wrap">
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-md hover:bg-green-200">C++</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-md hover:bg-green-200">Java</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-md hover:bg-green-200">Python</span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Core Concepts</h2>
          <div className="flex gap-2 mt-2 flex-wrap">
            <span className="px-3 py-1 bg-green-100 text-blue-800 rounded-md hover:bg-blue-200">Git</span>
            <span className="px-3 py-1 bg-green-100 text-blue-800 rounded-md hover:bg-blue-200">DSA</span>
            <span className="px-3 py-1 bg-green-100 text-blue-800 rounded-md hover:bg-blue-200">OOP</span>
            <span className="px-3 py-1 bg-green-100 text-blue-800 rounded-md hover:bg-blue-200">DBMS</span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Others</h2>
          <div className="flex gap-2 mt-2 flex-wrap">
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-md hover:bg-green-200">ML</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-md hover:bg-green-200">Wordpress</span>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Skills
