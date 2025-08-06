import React from "react";
import Header from "./Header";
//import "@fontsource/roboto/300.css";
import StarIcon from "@mui/icons-material/Star";
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons'
import { faSuitcaseMedical } from '@fortawesome/free-solid-svg-icons'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from "./Footer";
import About from "./About";
import Volunteer from "./Volunteer";
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */






function  Home ()  {
return (
  <>
    <Header />
    {/* Add your content here or include <Header /> if needed */}
    <div className="lg:h-[500px] sm:h-[250px] lg:w-full    bg-gray-200">
      <div className=" lg:pl-6 w-full px-2 flex flex-row lg:py-10 py-10 md:py-5 sm:py-7 items-center justify-evenly ">
        <span className="] flex flex-col justify-center text-wrap">
          <p className="text-orange-500 flex-1 font-bold items-center">
            <StarIcon />
            Change the World
          </p>
          <h1 className="sm:text-[35px] max-w-[700px] lg:text-[80px] md:text-[45px]  flex-1 text-[15px] font-bold ">
            Join Hands with AidNest to Uplift Lives
          </h1>
          <p className="text-[20px] flex-1">
            Together, we can create lasting change
          </p>
        </span>
        <img
          className="object-cover my-auto w-[20%] lg:w-[30%]  "
          src="/images/front.png"
          alt=""
        />
      </div>
    </div>
    <div className="text-center flex-1 px-4 mt-10">
  <h1 className="text-3xl font-bold mb-2">Our Main Causes</h1>
  <p className="text-lg text-gray-700 mb-10">
    We focus on three key areas to create meaningful impact in communities worldwide.
  </p>

  <div className="flex flex-wrap justify-center gap-8 px-4">
    {/* Card 1 - Clean Water */}
    <div className="bg-orange-500 flex-1 text-white rounded-xl shadow-lg w-full sm:w-[300px] p-6 flex-1 flex-col justify-between">
      <h2 className="text-2xl font-semibold mb-4">
        <FontAwesomeIcon icon={faDroplet} /> Clean Water
      </h2>
      <p className="flex-grow">
        Providing access to clean, safe drinking water for communities in need. Every drop counts towards a healthier future.
      </p>
      <button className="mt-6 px-4 py-2 bg-white text-black rounded-xl hover:bg-gray-100 transition">
        View Details
      </button>
    </div>

    {/* Card 2 - Healthy Food */}
    <div className="bg-teal-700 text-white rounded-xl shadow-lg w-full sm:w-[300px] p-6 flex-1 flex-col justify-between">
      <h2 className="text-2xl font-semibold mb-4">
        <FontAwesomeIcon icon={faAppleWhole} /> Healthy Food
      </h2>
      <p className="flex-grow">
        Fighting hunger and malnutrition by providing nutritious meals and sustainable food solutions to vulnerable populations.
      </p>
      <button className="mt-6 px-4 py-2 bg-white text-black rounded-xl hover:bg-gray-100 transition">
        View Details
      </button>
    </div>

    {/* Card 3 - Medical Help */}
    <div className="bg-yellow-500 text-white rounded-xl shadow-lg w-full sm:w-[300px] p-6 flex-1 flex-col justify-between">
      <h2 className="text-2xl font-semibold mb-4">
        <FontAwesomeIcon icon={faSuitcaseMedical} /> Medical Help
      </h2>
      <p className="flex-grow">
        Delivering essential healthcare services and medical supplies to underserved communities around the world.
      </p>
      <button className="mt-6 px-4 py-2 bg-white text-black rounded-xl hover:bg-gray-100 transition">
        View Details
      </button>
    </div>
  </div>
</div>

    
      
      <Footer/>
  </>
);
}

export default Home;
