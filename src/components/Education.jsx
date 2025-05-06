import React from 'react'

const Education = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-0 mt-10">

      <h1 className="text-4xl font-bold mb-6">My <span className="text-blue-500">Education</span></h1>

      <div className="w-full max-w-2xl">

        <div className="mb-6 border-[2px] rounded-xl p-4 mt-8 bg-blue-100 hover:bg-blue-200 hover:text-black hover:scale-105">
          <h2 className="text-xl font-semibold text-black">Graduation</h2>
          <div className="flex gap-2 mt-2 flex-col text-blue-800">
            <div className='flex flex-wrap justify-between'>
              <p className='text-base'>Bachelor of Technology (Computer Science)</p>
              <p className='text-base'>Oct 2021 - Jun 2025</p> 
            </div>
            <p className='text-base'>Echelon Institute of Technology, Faridabad, Haryana</p>
            <p className='text-base'>CGPA: 8.096</p>
          </div>
        </div>

        <div className="mb-6 border-[2px] rounded-xl p-4 mt-8 bg-green-100 hover:bg-green-200 hover:text-black hover:scale-105">
          <h2 className="text-xl font-semibold text-black">Senior Secondary</h2>
          <div className="flex gap-2 mt-2 flex-col text-green-800">
            <div className='flex flex-wrap justify-between'>
              <p className='text-base'>12th</p>
              <p className='text-base'>Apr 2020 - Mar 2021</p> 
            </div>
            <p className='text-base'>Kendriya Vidyalaya, AFS Bawana, Delhi</p>
            <p className='text-base'>Percentage: 94.8%</p>
          </div>
        </div>

        <div className="mb-6 border-[2px] rounded-xl p-4 mt-8 bg-blue-100 hover:bg-blue-200 hover:text-black hover:scale-105">
          <h2 className="text-xl font-semibold text-black">Secondary</h2>
          <div className="flex gap-2 mt-2 flex-col text-blue-800">
            <div className='flex flex-wrap justify-between'>
              <p className='text-base'>10th</p>
              <p className='text-base'>Apr 2018 - Mar 2019</p> 
            </div>
            <p className='text-base'>Maharaja Agarsain Public School, Narela, Delhi</p>
            <p className='text-base'>Percentage: 91%</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Education
