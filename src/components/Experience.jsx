import React, { useEffect } from 'react';
import { FaBriefcase } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="experience">
      <div>
        <h1 className="flex items-center justify-center text-center mt-10 mb-5 font-medium font-bold text-4xl">
          <FaBriefcase />
          Experience
        </h1>
      </div>

      <div className='flex flex-col justify-center sm:py-12'>
        <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
          <div className='relative text-gray-700 antialiased text-sm font-semibold'>

            {/* vertical line running through the middle */}
            <div className='hidden absolute w-1 sm:block bg-orange-400 h-full left-1/2 transform -translate-x-1/2'></div>

            {/* left card */}
            <div className='mt-6 sm:mt-0 sm:mb-12'>
              <div className='flex items-center flex-col sm:flex-row'>
                <div className='flex justify-start w-full mx-auto items-center'>
                  <div className='w-full sm:w-1/2 sm:pr-8'>
                    <div data-aos='fade-right' data-aos-duration='1200' className='bg-white border p-4 rounded shadow group hover:bg-orange-500 cursor-pointer ease-in duration-150'>
                      <h3 className='text-orange-400 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>Department of Geoscience and Petroleum, NTNU</h3>
                      <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>PhD candidate<br></br>Dec 2022 - Ongoing</p>
                    </div>
                  </div>
                </div>
                <div className='rounded-full bg-orange-400 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                  <FaBriefcase />
                </div>
              </div>
            </div>

            {/* right card */}
            <div className='mt-6 sm:mt-0 sm:mb-12'>
              <div className='flex items-center flex-col sm:flex-row'>
                <div className='flex justify-end w-full mx-auto items-center'>
                  <div className='w-full sm:w-1/2 sm:pl-8'>
                    <div data-aos='fade-left' data-aos-delay='50' data-aos-duration='1300' className='bg-white border p-4 rounded shadow group hover:bg-orange-500 cursor-pointer ease-in duration-150'>
                      <h3 className='text-orange-400 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>Department of Geoscience and Petroleum, NTNU</h3>
                      <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>Researcher, Fulltime<br></br>June 2022 - Nov 2022</p>
                    </div>
                  </div>
                </div>
                <div className='rounded-full bg-orange-400 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                  <FaBriefcase />
                </div>
              </div>
            </div>

            {/* left card */}
            <div className='mt-6 sm:mt-0 sm:mb-12'>
              <div className='flex items-center flex-col sm:flex-row'>
                <div className='flex justify-start w-full mx-auto items-center'>
                  <div className='w-full sm:w-1/2 sm:pr-8'>
                    <div data-aos='fade-right' data-aos-delay='100' data-aos-duration='1400' className='bg-white border p-4 rounded shadow group hover:bg-orange-500 cursor-pointer ease-in duration-150'>
                      <h3 className='text-orange-400 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>Department of Geoscience and Petroleum, NTNU</h3>
                      <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>Teaching Assistant, Parttime<br></br>Aug 2022 - April 2023</p>
                    </div>
                  </div>
                </div>
                <div className='rounded-full bg-orange-400 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                  <FaBriefcase />
                </div>
              </div>
            </div>

            {/* right card */}
            <div className='mt-6 sm:mt-0 sm:mb-12'>
              <div className='flex items-center flex-col sm:flex-row'>
                <div className='flex justify-end w-full mx-auto items-center'>
                  <div className='w-full sm:w-1/2 sm:pl-8'>
                    <div data-aos='fade-left' data-aos-delay='50' data-aos-duration='1500' className='bg-white border p-4 rounded shadow group hover:bg-orange-500 cursor-pointer ease-in duration-150'>
                      <h3 className='text-orange-400 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>Department of Geoscience and Petroleum, NTNU</h3>
                      <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>Technical Assistant, Summer Intern, Fulltime<br></br>July 2022 - Aug 2022</p>
                    </div>
                  </div>
                </div>
                <div className='rounded-full bg-orange-400 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                  <FaBriefcase />
                </div>
              </div>
            </div>

            {/* left card */}
            <div className='mt-6 sm:mt-0 sm:mb-12'>
              <div className='flex items-center flex-col sm:flex-row'>
                <div className='flex justify-start w-full mx-auto items-center'>
                  <div className='w-full sm:w-1/2 sm:pr-8'>
                    <div data-aos='fade-right' data-aos-duration='1200' className='bg-white border p-4 rounded shadow group hover:bg-orange-500 cursor-pointer ease-in duration-150'>
                      <h3 className='text-orange-400 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>Hydrotunnelling and Research Pvt. Ltd.</h3>
                      <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>Hydropower Engineer, Fulltime<br></br>Dec 2017 - July 2021</p>
                    </div>
                  </div>
                </div>
                <div className='rounded-full bg-orange-400 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                  <FaBriefcase />
                </div>
              </div>
            </div>

            {/* right card */}
            <div className='mt-6 sm:mt-0 sm:mb-12'>
              <div className='flex items-center flex-col sm:flex-row'>
                <div className='flex justify-end w-full mx-auto items-center'>
                  <div className='w-full sm:w-1/2 sm:pl-8'>
                    <div data-aos='fade-left' data-aos-delay='50' data-aos-duration='1500' className='bg-white border p-4 rounded shadow group hover:bg-orange-500 cursor-pointer ease-in duration-150'>
                      <h3 className='text-orange-400 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>API Power Company Limited</h3>
                      <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>Engineering Intern, Fulltime<br></br>May 2017 - Jun 2017</p>
                    </div>
                  </div>
                </div>
                <div className='rounded-full bg-orange-400 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                  <FaBriefcase />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
