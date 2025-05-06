import React from "react";
// import logo from '../../src/assets/Logo.png'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {

  
  const [lightMode, setlightMode] = useState(() => {
    return localStorage.getItem("lightMode") === "enabled";
  });

  useEffect(() => {
    if (lightMode) {
      document.body.classList.add("light-mode");
      localStorage.setItem("lightMode", "enabled");
    } else {
      document.body.classList.remove("light-mode");
      localStorage.setItem("lightMode", "disabled");
    }
  }, [lightMode]);


  return (

    <div className="flex flex-row mt-10 ml-20 mr-20">

      <div className="mx-12">
        <img className="" src="" alt='logo' />
      </div>

      <div className="flex flex-row mt-4 mx-4">
        <p className="mx-6 text-xl text-blue-600 font-[500] hover:text-slate-500 hover:underline hover:underline-offset-6 hover:scale-110"><Link to="/">Home</Link></p>
        <p className="mx-6 text-xl text-blue-600 font-[500] hover:text-slate-500 hover:underline hover:underline-offset-6 hover:scale-110"><Link to="/skills">Skills</Link></p>
        <p className="mx-6 text-xl text-blue-600 font-[500] hover:text-slate-500 hover:underline hover:underline-offset-6 hover:scale-110"><Link to="/projects">Projects</Link></p>
        <p className="mx-6 text-xl text-blue-600 font-[500] hover:text-slate-500 hover:underline hover:underline-offset-6 hover:scale-110"><Link to="/education">Education</Link></p>
        <p className="mx-6 text-xl text-blue-600 font-[500] hover:text-slate-500 hover:underline hover:underline-offset-6 hover:scale-110"><Link to="/experience">Experience</Link></p>
        <p className="mx-6 text-xl text-blue-600 font-[500] hover:text-slate-500 hover:underline hover:underline-offset-6 hover:scale-110"><Link to="/achievements">Achievements</Link></p>
        <p className="mx-6 text-xl text-blue-600 font-[500] hover:text-slate-500 hover:underline hover:underline-offset-6 hover:scale-110"><Link to="/contact">Contact</Link></p>
      </div>

      <div className="mx-12">
        <button 
          className="text-xl p-2 mt-2 border rounded-xl bg-blue-300"
          onClick={() => setlightMode(!lightMode)} 
        >
          {lightMode ? "🌙" : "🌞"}
        </button>
      </div>

    </div>
  );
};

export default Navbar;
