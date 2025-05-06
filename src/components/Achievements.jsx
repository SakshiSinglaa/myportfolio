import React from 'react'

const Achievements = () => {
  return (
    <div className="flex flex-col items-center justify-center p-0 mt-10">

        <h1 className="text-4xl font-bold mb-6">My <span className="text-blue-500">Achievements</span></h1>

        <div className="w-full max-w-2xl">

            <div className="mb-6">
                <a href='https://leetcode.com/sakshisingla_/' target="_blank" rel="noopener noreferrer">
                    <div className="flex px-3 py-1 m-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">
                        <p>Solved 200+ leetcode problems</p>
                    </div>
                </a>
                <a href='https://www.hackerrank.com/profile/sakshisingla2803' target="_blank" rel="noopener noreferrer">
                    <div className="flex px-3 py-1 m-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">
                        <p>Golden Badge in SQL Basics</p>
                    </div>
                </a>
            </div>

            <div className="mb-6">
                <h2 className="text-2xl font-semibold">Certificates</h2>
          
                <a href="" target="_blank" rel="noopener noreferrer">
                    <div className="flex justify-between px-3 py-1 m-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">
                        <p>Introduction to MongoDB</p>
                        <p>Oct 2024</p>
                    </div>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <div className="flex justify-between px-3 py-1 m-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">
                        <p>Postman API Fundamentals Student Expert</p>
                        <p>Nov 2024</p>
                    </div>
                </a>
                <a href="https://www.hackerrank.com/certificates/4ae533a04420" target="_blank" rel="noopener noreferrer">
                    <div className="flex justify-between px-3 py-1 m-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">
                        <p>SQL (Basic) – Hacker Rank </p>
                        <p>Jan 2025</p>
                    </div>
                </a>
                <a href="https://www.hackerrank.com/certificates/89a4aeaa7adf" target="_blank" rel="noopener noreferrer">
                    <div className="flex justify-between px-3 py-1 m-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">
                        <p>Problem Solving (Basic) – Hacker Rank</p>
                        <p>Mar 2025</p>
                    </div>
                </a>
            </div>

            <div className="mb-16">
                <h2 className="text-2xl font-semibold">Certificates (Other)</h2>

                <a href='' target="_blank" rel="noopener noreferrer">
                    <div className="flex justify-between px-3 py-1 m-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">
                        <p>Air Pollution and Control</p>
                        <p>Apr 2023</p>
                    </div>
                </a>
                <a href='' target="_blank" rel="noopener noreferrer">
                    <div className="flex justify-between px-3 py-1 m-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">
                        <p>TCS iON Carrier Edge- Young Professional</p>
                        <p>Jul 2023</p>
                    </div>
                </a>
                <a href='' target="_blank" rel="noopener noreferrer">
                    <div className="flex justify-between px-3 py-1 m-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">
                        <p>Conservation Geography</p>
                        <p>Oct 2023</p>
                    </div>
                </a>
                <a href='' target="_blank" rel="noopener noreferrer">
                    <div className="flex justify-between px-3 py-1 m-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">
                        <p>Education for Sustainable Development</p>
                        <p>Apr 2024</p>
                    </div>
                </a>
            </div>

        </div>

    </div>
  )
}

export default Achievements;
