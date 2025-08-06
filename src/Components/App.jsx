import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Pages from "./Components/Pages";
import Blogs from "./Components/Blogs";
import Causes from "./Components/Causes";
import Contact from "./Components/Contact";
import Volunteer from "./Components/Volunteer";
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