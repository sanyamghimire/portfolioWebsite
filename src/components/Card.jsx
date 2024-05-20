import React, { useEffect } from 'react';
import NTNU from '../Images/NTNU.jpg';
import Pulchowk from '../Images/Pulchowk.jpg'
import KU from '../Images/KU.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';



function Card() {

  useEffect(() => {
    AOS.init();
  }, []);
  return (

    <div className="max-w-4xl mx-auto ">
      {/* NTNU */}
      <div  data-aos='fade-down' data-aos-duration='800' data-aos-anchor-placement="center-bottom"   className="flex flex-col md:flex-row border border-blue-100 p-6 rounded-lg ">
        <div>
          <img src={NTNU} alt="pic of NTNU" className="h-32 w-52 rounded-lg " />
        </div>
        <div  className="ml-6 pt-1">
          <h4 className="font-bold text-xl">Master's in Hydropower Development</h4>
          <h4 className="text-xl mt-3">Norwegian University of Science and Technology</h4>
          <p className="text-blue-800 mt-3">2021-2023 | Graduated</p>
        </div>
      </div>

       {/* TU */}
       <div data-aos='fade-down' data-aos-duration='800' data-aos-anchor-placement="center-bottom"  className="flex flex-col md:flex-row border border-blue-100 p-6 rounded-lg mt-2.5">
        <div>
          <img src={Pulchowk} alt="pic of Pulchowk" className="h-32 w-52 rounded-lg " />
        </div>
        <div className="ml-6 pt-1">
          <h4 className="font-bold text-xl">Master's in Water Resources Engineering</h4>
          <h4 className="text-xl mt-3">Pulchowk Campus, Tribhuvan University</h4>
          <p className="text-blue-800 mt-3">2019-2021 | Graduated</p>
        </div>
      </div>

      {/* Kathmandu University */}
      <div data-aos='fade-down' data-aos-duration='800' data-aos-anchor-placement="center-bottom"  className="flex flex-col  md:flex-row border border-blue-100 p-6 rounded-lg shadow-xl mt-2.5">
        <div>
          <img src={KU} alt="Pic of KU" className="h-32 w-52 rounded-lg" />
        </div>
        <div className="ml-6 pt-1">
          <h4 className="font-bold text-xl">Bachelor's in Civil Engineering with Specialization in Hydropower</h4>
          <h4 className="text-xl mt-3">Kathmandu University</h4>
          <p className="text-blue-800 mt-3">2013-2017 | Graduated</p>
        </div>
      </div>

      {/* Anchor element */}
      <div id="anchor-element"></div>

    </div>
  );
}

export default Card;

