import React from 'react';
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiHackerrank } from "react-icons/si";


const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
  
    formData.append("access_key", "7a816a91-3e24-4bce-9d51-04ee0aeb6612");
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
  
    if (res.success) {
      alert("Your message has been sent successfully! ✅");
      event.target.reset(); // Clear the form after submission
    } else {
      alert("Oops! Something went wrong. Please try again. ❌");
    }
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-0 mt-10">

      <h1 className="text-4xl font-bold mb-6">Contact<span className="text-blue-500"> Me</span></h1>

      <div className="w-full flex flex-row justify-between">

        <div className='flex flex-col my-8 p-5 ml-20'>

          <p className='text-xl mb-15 text-center mt-20'>
            Have a question, an idea, or just want to connect? 
            <br />
            Feel free to drop a message — I&apos;d love to hear from you!
          </p>

          <p className='text-xl flex flex-row justify-center gap-4'><IoMail className='text-2xl' />sakshisingla2803@gmail.com</p>
          <p className='text-xl flex flex-row justify-center gap-4 mt-2'><FaPhoneAlt className='text-2xl' />+91 9899543745</p>

          <div className='flex flex-row gap-5 justify-center mt-6 cursor-pointer'>
            <a className='hover:scale-110' href='https://www.linkedin.com/in/sakshisingla28/' alt='#' target="_blank" rel="noopener noreferrer"><FaLinkedin className='text-3xl' /></a>
            <a className='hover:scale-110' href='https://github.com/SakshiSinglaa' alt='#' target="_blank" rel="noopener noreferrer"><FaGithub className='text-3xl' /></a>
            <a className='hover:scale-110' href='https://leetcode.com/u/sakshisingla_/' alt='#' target="_blank" rel="noopener noreferrer"><SiLeetcode className='text-3xl' /></a>
            <a className='hover:scale-110' href='https://www.hackerrank.com/profile/sakshisingla2803' alt='#' target="_blank" rel="noopener noreferrer"><SiHackerrank className='text-3xl' /></a>
          </div>

        </div>


        <form className='bg-blue-100 hover:bg-blue-200 rounded-lg p-5 my-5 mr-30' onSubmit={onSubmit}>
          <h1 className='text-black text-3xl text-center font-bold mb-5'>Contact Form</h1>

          <label className='text-black text-xl font-semibold p-2' htmlFor="name">Your name</label>
          <br />
          <input className='bg-black text-white p-2 w-lg ml-2 mb-4 rounded-md' name='name' type='text' placeholder='Enter your name' required />
          <br />

          <label className='text-black text-xl font-semibold p-2' htmlFor="email">Your email</label>
          <br />
          <input className='bg-black text-white p-2 w-lg ml-2 mb-4 rounded-md' name='email' type='email' placeholder='Enter your email' required />
          <br />

          <label className='text-black text-xl font-semibold p-2' htmlFor="message">Your message</label>
          <br />
          <textarea className='bg-black text-white p-2 w-lg ml-2 mb-4 rounded-md' name='message' rows='4' placeholder='Enter your message' required />
          <br />

          <button className='bg-red-500 text-lg px-6 py-2 my-2 rounded-md ml-52 hover:bg-red-600 hover:scale-105 cursor-pointer' type='submit'>
            Submit
          </button>
        </form>

      </div>

    </div>  
  )
}

export default Contact
