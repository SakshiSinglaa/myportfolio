import React from 'react'

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center p-0 mt-10">

      <h1 className="text-4xl font-bold mb-6">My <span className="text-blue-500">Experience</span></h1>

      <div className="w-full max-w-2xl">

        <div className="mb-6 border-[2px] rounded-xl p-4 mt-8 bg-blue-100 hover:bg-blue-200 hover:text-black hover:scale-105">
          <h2 className="text-2xl font-semibold text-black">Freelancer</h2>
          <div className="flex gap-2 mt-2 flex-col text-blue-800">
            <div className='flex flex-wrap justify-between text-black'>
              <p className='text-lg'>WordPress Developer</p>
              <p className='text-lg'>Apr 2024 - May 2024</p> 
            </div>
            <p className='text-base'>
            • Developed and launched the official company website, <span className=' text-green-800 font-bold'> skillsfy.in</span>, using WordPress. 
            <br />
            • Customized themes and plugins to meet the specific needs of the company, ensuring a user-friendly interface and 
optimized performance.  
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Experience
