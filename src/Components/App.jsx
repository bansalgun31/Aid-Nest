import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Pages from "./Components/Pages.jsx";
import Blogs from "./Components/Blogs.jsx";
import Causes from "./Components/Causes.jsx";
import Contact from "./Components/Contact.jsx";
import Volunteer from "./Components/Volunteer.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  createBrowserRouter ,
  RouterProvider
  
   } from "react-router-dom";
let router =createBrowserRouter(
  [
    {
      path:"/",
    element:<Home/>,
    },
    {
      path:"/about",
    element:<About/>,
    },
    {
      path:"/page",
    element:<Pages/>,
    },
    {
      path:"/blog",
    element:<Blogs/>,
    },
    {
      path:"/cause",
    element:<Causes/>,
    },
    {
      path:"/contact",
    element:<Contact/>,
    },
    {
      path:"/volunteer",
    element:<Volunteer/>,
    },
    

    
  ]

);






function App() {
  
  return (


    <>
    

    
    {/*<Header/> */}
    <RouterProvider router={router}/>
    
  
   </>   
  );
}

export default App
