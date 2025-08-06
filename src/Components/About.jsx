import React from "react";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import CrisisAlertOutlinedIcon from "@mui/icons-material/CrisisAlertOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import StarIcon from "@mui/icons-material/Star";
import Header from "./Header";
import Footer from "./Footer";
//import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const About = () => {
  return (
    <div>
      <Header/>
    <div >
      <h1 className="mb-5 px-6 text-5xl font-bold">About Us</h1>
      <h2 className=" mb-3 px-6 text-3xl font-bold !text-orange-500">Who we are?</h2>
      <p className="px-6 text-[18px]">
        AidNest is a non-profit organization dedicated to creating a world where
        everyone has access to the most basic needs — clean water, nutritious
        food, and essential medical care. Founded on the belief that small hands
        can make a big change, we work tirelessly in vulnerable communities to
        drive long-term, sustainable impact.
        <br />
        With the support of volunteers, donors, and partners, AidNest has grown
        into a global movement of compassion and action.
      </p>
      
      

      <div className="flex justify-evenly gap-6 pt-4 px-6">
        <div className="flex-1">
          <img className="w-[90%]" src="/images/img2.jpg" alt="" />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-5">We Are In A Mission To Help The Helpless</h1>
          <p className="mb-7">
            Founded in 2015, AidNest has been at the forefront of humanitarian
            efforts, bringing hope and essential resources to communities in
            need. Our dedicated team works tirelessly to address the most
            pressing challenges facing our world today.
          </p>
          <div className="flex justify-evenly text-center mb-5 gap-2 py-3">
            <div className="flex-1 bg-gray-100 py-2  text-orange-500">
              <PeopleAltOutlinedIcon />
              <h3 className="text-black pt-4 text-2xl text-center">2.5M+</h3>
              <p className="text-black ">People Helped</p>
            </div>
            <div className="flex-1 bg-gray-100 py-2 text-teal-500">
              <CrisisAlertOutlinedIcon />
              <h3 className="text-black text-2xl pt-4">50+</h3>
              <p className="text-black">Countries Reached</p>
            </div>
            <div className="flex-1 bg-gray-100 py-2 text-yellow-500">
              <EmojiEventsOutlinedIcon />
              <h3 className="text-black text-2xl pt-4">100+</h3>
              <p className="text-black">Projects Completed</p>
            </div>
          </div>

          <ul className="flex-col mt-2  ">
            <li className="flex-1">
              <h5 className="font-bold text-2xl ">Our Core Values</h5>
            </li>
            <li className="flex-1 list-disc flex-row text-black">
              <h6 className="text-black font-bold">Compassion:</h6>We approach every
              situation with empathy and understanding.
            </li>
            <li className="flex-1 list-disc flex-row text-black">
              <h6 className="text-black font-bold">Integrity:</h6>We maintain the highest
              standards of honesty and transparency.
            </li>
            <li className="flex-1 list-disc flex-row text-black">
              <h6 className="text-black font-bold">Impact: </h6>We focus on sustainable
              solutions that create lasting change.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default About;
