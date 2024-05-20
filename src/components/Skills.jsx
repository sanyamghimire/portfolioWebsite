import React, { useEffect } from 'react';
import skills from '../Images/Skills.png';
import Rocscience from '../Images/Rocscience.jpg'
import Udec from '../Images/Udec.jpg';
import Flac from '../Images/FLAC.jpg';
import Rihno from '../Images/Rihno.png';
import Qgis from '../Images/Qgis.png';
import Python from '../Images/Python.png';
import R from '../Images/R.png';
import AOS from 'aos';
import 'aos/dist/aos.css';



function Skills() {
  const cardStyle = {
    width: '200px',
    position: 'relative',
  };
  useEffect(() => {
    AOS.init();
  }, []);

  const skillNameStyle = {
    position: 'absolute', // Added position absolute for the skill name
    bottom: '10px', // Adjust this value to control the distance from the bottom
    left: '0',
    right: '0',
    textAlign: 'center',
  };
  return (
    <div id="skills">
      <div className='flex items-center justify-center mt-8'>
        <img src={skills} alt="pic of skills" />
        <h1 className=' font-bold font-medium text-4xl'>Skills</h1>
      </div>

      {/* Top Row */}
      <div data-aos='fade-down' data-aos-duration='800' data-aos-anchor-placement="center-bottom" className='flex flex-wrap mt-5 justify-center '>
        {/* Rocscience Card */}
        <div style={cardStyle} className='flex flex-col items-center border border-blue-500 p-6 rounded-lg shadow-xl mr-4 mb-4  transition duration-300 ease-in-out hover:scale-110'>
          <img src={Rocscience} alt="pic of Rocscience" />
          <h1 className='font-medium text-xl' style={skillNameStyle}>Rocscience</h1>
        </div>

        {/* Udec Card */}
        <div style={cardStyle} className='flex flex-col items-center border border-blue-500 p-6 rounded-lg shadow-xl mr-4 mb-4  transition duration-300 ease-in-out hover:scale-110'>
          <img src={Udec} alt="pic of Udec" />
          <h1 className='font-medium text-xl' style={skillNameStyle}>Udec</h1>
        </div>

          {/* Flac Card */}
        <div style={cardStyle} className='flex flex-col items-center border border-blue-500 p-6 rounded-lg shadow-xl mr-4 mb-4  transition duration-300 ease-in-out hover:scale-110'>
          <img src={Flac} alt="pic of Flac" />
          <h1 className='font-medium text-xl' style={skillNameStyle}>Flac</h1>
        </div>


         {/* Qgis Card */}
         <div style={cardStyle} className='flex flex-col items-center border border-blue-500 p-6 rounded-lg shadow-xl mr-4 mb-4  transition duration-300 ease-in-out hover:scale-110'>
          <img src={Qgis} alt="pic of Qgis" style={{ maxWidth: '120px' }} className='p-2'/>
          <h1 className='font-medium text-xl' style={skillNameStyle}>QGIS</h1>
        </div>
      </div>
      {/* Bottom Row */}
      <div data-aos='fade-down' data-aos-duration='800' data-aos-anchor-placement="center-bottom" className='flex flex-wrap mt-4 justify-center'>
    

         {/* R */}
         <div style={cardStyle} className='flex flex-col items-center border border-blue-500 p-6 rounded-lg shadow-xl mr-4 mb-4  transition duration-300 ease-in-out hover:scale-110'>
          <img src={R} alt="pic of R Programming" className='p-3' />
          <h1 className='font-medium text-xl' style={skillNameStyle}>R</h1>
        </div>


        {/* PythonCard */}
        <div style={cardStyle} className='flex flex-col items-center border border-blue-500 p-6 rounded-lg shadow-xl mr-4 mb-4  transition duration-300 ease-in-out hover:scale-110'>
          <img src={Python} alt="pic of Python" />
          <h1 className='font-medium text-xl' style={skillNameStyle}>Python</h1>
        </div>
        {/* Rihno #DCard */}
        <div style={cardStyle} className='flex flex-col items-center border border-blue-500 p-6 rounded-lg shadow-xl mr-4 mb-4  transition duration-300 ease-in-out hover:scale-110'>
          <img src={Rihno} alt="pic of Rihno" style={{ maxWidth: '120px' }} className='max-w-full p-2 sm:w-40 h-auto'/>
          <h1 className='font-medium text-xl' style={skillNameStyle}>Rihno3D</h1>
        </div>


      </div>
    </div>
  );
}

export default Skills;

