import React, { useEffect } from 'react';
import sanyam from '../Images/Sanyam.jpg'
import { FaUser } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id='about'>
      
      <h1 className="flex items-center justify-center text-center mt-5 mb-5 font-medium font-bold text-4xl">
        <FaUser className="mr-2" />
        About Me
      </h1>
  

      <div className="flex flex-col md:flex-row justify-center items-center md:mr-2 mb-2 md:mb-0">
        <div className=' transition duration-300 ease-in-out hover:scale-110'>
          <img src={sanyam} className='rounded-lg size-52 h-auto md:h-auto' alt="Norway Pic" />
        </div>

        <div data-aos='fade-down' data-aos-duration='800' data-aos-anchor-placement="center-bottom"  className='flex  flex-col ml-12 mt-6 text-left'>
          <p>I am a graduate master's student from Norwegian University of Science and Technology(NTNU).</p>
          <p>I am passionate about improving my coding skills and have skills in frontend development.</p>
          <p> Driven by a passion for web development, I specialize in crafting interactive and visually</p>
          <p>appealing WebApps and Websites using React. Continuously striving for skill enhancement,</p> 
          <p> I am enthusiastic about honing my abilities in this dynamic field.</p>

          <p className='mt-4'><span className='text-blue-800'>Email:</span> <a href="mailto:sanyam.ghimire@ntnu.no">sanyam.ghimire@ntnu.no</a></p>
          <p className='mt-4'><span className='text-blue-800'>Place:</span> Åsvangvegen 22B, Trondheim, Norway</p>

        </div>

      </div>
    
    </div>
  )
}

export default About
