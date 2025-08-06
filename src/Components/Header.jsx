import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (index) => {
    setSelectedMenu(index);
    setIsOpen(false); // Close menu on mobile after click
  };

  const menuClass = "text-black";
  const activeMenuClass = "text-blue-500 border-b-2 border-blue-600";

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Causes", path: "/cause" },
    { name: "Blog", path: "/blog" },
    { name: "Pages", path: "/page" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className='w-full bg-gray-300 px-4'>
      {/* Top bar */}
      <div className='flex justify-between items-center h-20'>
        {/* Logo */}
        <a className='flex items-center' href="#">
          <img className='w-10 h-10 object-cover mr-2' src="/images/logo2.png" alt="logo" />
          <span className='flex flex-col'>
            <h3 className='text-lg sm:text-base font-bold'>AidNest</h3>
            <p className='text-xs sm:text-[10px]'>Together for change</p>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className='hidden lg:flex gap-8 items-center font-medium text-sm'>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                className='no-underline'
                to={item.path}
                onClick={() => handleClick(index)}
              >
                <p className={selectedMenu === index ? activeMenuClass : menuClass}>
                  {item.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        {/* Volunteer Button (desktop) */}
        <div className='hidden lg:block'>
          <button
            onClick={() => navigate('/volunteer')}
            className='bg-orange-500 text-white px-4 py-2 rounded-2xl text-sm'
          >
            Become a Volunteer
          </button>
        </div>

        {/* Hamburger icon (mobile) */}
        <div className='lg:hidden'>
          <button onClick={toggleMenu}>
            <div className='space-y-1'>
              <span className='block w-6 h-0.5 bg-black'></span>
              <span className='block w-6 h-0.5 bg-black'></span>
              <span className='block w-6 h-0.5 bg-black'></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='lg:hidden flex flex-col gap-4 pb-4'>
          {navItems.map((item, index) => (
            <Link
              key={index}
              className='no-underline'
              to={item.path}
              onClick={() => handleClick(index)}
            >
              <p className={`px-2 ${selectedMenu === index ? activeMenuClass : menuClass}`}>
                {item.name}
              </p>
            </Link>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              navigate('/volunteer');
            }}
            className='bg-orange-500 text-white px-4 py-2 rounded-2xl text-sm mt-2 self-start'
          >
            Become a Volunteer
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
