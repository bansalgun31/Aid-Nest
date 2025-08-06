import React from 'react'

const Footer = () => {
  return (
    
        <div className=' flex text-white h-[500px] mt-[25px] bg-gray-900  pt-20 sm:gap-2    lg:gap-5 gap-2 justify-evenly'>
            <div className='flex-1'>
                <div className='flex'>
                <img className='w-[7%]  h-[7%]' src="/images/logo2.png" alt="" />
                <span><h1 className='lg:text-[20px] text-[5px] mb-8'>AidNest</h1>
                <p className='mb-6'>Together for Change</p>
                <p className='mb-6'>Making a difference in communities worldwide through compassionate action and sustainable solutions.</p>
                </span>
                
                
            </div>
            </div>
            <div className='flex-1'>
                <h1 className='lg:text-[20px] text-[5px] mb-8'>Quick Links</h1>
                <ul className='flex-col justify-between'>
                    <li className='mb-6'><a href="#">Home</a></li>
                    <li className='mb-6'><a href="#">About Us</a></li>
                    <li className='mb-6'><a href="#">Our Causes</a></li>
                    <li className='mb-6'><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div className='flex-1'>
                <h1 className='mb-8 lg:text-[20px] text-[5px]'>Our Causes</h1>
                <ul className='flex-col  justify-between'>
                    <li className='mb-6'><a href="#">Clean Water</a></li>
                    <li className='mb-6'><a href="#">Healthy Food</a></li>
                    <li className='mb-6'><a href="#">Medical Help</a></li>
                    <li className='mb-6'><a href="#">Education</a></li>
                </ul>
            </div>
            <div className='flex-1'>
                <h1 className='mb-8 lg:text-[20px] text-[5px]'>Contact Info
</h1>
                <ul className='flex-col  justify-between'>
                    <li className='mb-6'>+1 (234) 567-890</li>
                    <li className='mb-6'>info@aidnest.org</li>
                    <li className='mb-6'>123 Charity Street
New York, NY 10001</li>
                    
                </ul>
            </div>
        </div>

  );
}

export default Footer