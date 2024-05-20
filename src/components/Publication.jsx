import React, { useEffect } from 'react';
import { MdOutlineMenuBook } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Publication() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="publication">
      <div>
        <h1 className="flex items-center justify-center text-center mt-10 mb-5 font-medium font-bold text-4xl">
          <MdOutlineMenuBook />
          Publications
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
                    <a href="https://www.mdpi.com/2073-4441/16/7/1063" target="_blank" rel="noopener noreferrer">
                      <div data-aos='fade-right' data-aos-duration='1200' className='bg-white border p-3 rounded-lg shadow group hover:bg-orange-500 cursor-pointer ease-in duration-150'>
                        <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                          Suspended Sediment Source and Transport Mechanisms in a Himalayan River.
                        </p>
                        
                      </div>
                    </a>
                  </div>
                </div>
                <div className='rounded-full bg-orange-400 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                  <MdOutlineMenuBook />
                </div>
              </div>
            </div>

            {/* right card */}
            <div className='mt-6 sm:mt-0 sm:mb-12'>
              <div className='flex items-center flex-col sm:flex-row'>
                <div className='flex justify-end w-full mx-auto items-center'>
                  <div className='w-full sm:w-1/2 sm:pl-8'>
                    <a href="https://www.mdpi.com/2073-4441/15/22/3894" target="_blank" rel="noopener noreferrer">
                      <div data-aos='fade-left' data-aos-delay='50' data-aos-duration='1300' className='bg-white border p-3 rounded-lg shadow group hover:bg-orange-500 cursor-pointer ease-in duration-150'>
                        <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                          Hydraulic Transient Impact on Surrounding Rock Mass of Unlined Pressure Tunnels.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className='rounded-full bg-orange-400 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                  <MdOutlineMenuBook />
                </div>
              </div>
            </div>

            {/* left card */}
            <div className='mt-6 sm:mt-0 sm:mb-12'>
              <div className='flex items-center flex-col sm:flex-row'>
                <div className='flex justify-start w-full mx-auto items-center'>
                  <div className='w-full sm:w-1/2 sm:pr-8'>
                    <a href="https://www.researchgate.net/publication/358987339_Generation_of_a_Suspended_Sediment_Rating_Curve_of_a_Himalayan_River_based_on_a_Long-term_Data_A_case_study_of_Kabeli_River" target="_blank" rel="noopener noreferrer">
                      <div data-aos='fade-right' data-aos-delay='100' data-aos-duration='1400' className='bg-white border p-3  rounded-lg shadow group hover:bg-orange-500 cursor-pointer ease-in duration-150'>
                        <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                          Generation of a Suspended Sediment Rating Curve of a Himalayan River based on a Long-term Data: A case study of Kabeli River.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className='rounded-full bg-orange-400 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                  <MdOutlineMenuBook />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Publication;


