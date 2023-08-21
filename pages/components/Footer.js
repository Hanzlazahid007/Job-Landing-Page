import React, { useState } from 'react';
import Dream from './Dream';

const Footer = () => {
    const [email,setEmail] = useState('');
  return (
    <>
   
    <footer className=" text-white relative pt-16 mt-20 bg-[#E5EEFF54]">
   {/* ============================================= */}
   <div>
       <div className='flex absolute  -top-[4rem] left-20 justify-center'>
    <div className='h-32  bg-[#3F6EEC] rounded-lg w-[90%] flex justify-between items-center p-10' >
    <h1 className='font-bold text-[#FFFFFF] text-[40px] w-[70%]'>Lets Get Connected And Start Finding Your Dream Job  </h1>
    <button className='p-2 pl-4 pr-4 bg-white rounded-md text-[#05264E]'>Click me</button>

    </div>
    </div>
    </div>
    {/* ====================================================== */}
      <div className=" flex justify-between p-16">
        <div className="w-[33%]">
          <h2 > <span className='text-[#05264E] font-bold text-[40px]'>Hire </span><span className='text-[#3F6EEC] font-bold text-[40px]'> ON</span></h2>
          <p className="text-gray-400">Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
        </div>
        <div className="col-span-1 ">
          <h3 className="text-[#05264E] font-medium text-[18px] mb-2">Useful Links</h3>
          <ul className="space-y-1">
            <li><a href="#" className="text-[#777777] text-[18px] font-normal">Find a Job</a></li>
            <li><a href="#" className="text-[#777777] font-normal text-[18px]">companies</a></li>
            <li><a href="#" className="text-[#777777] font-normal text-[18px]">About us</a></li>
            <li><a href="#" className="text-[#777777] font-normal text-[18px]">Post a Job</a></li>
            <li><a href="#" className="text-[#777777] font-normal text-[18px]">Web Developer</a></li>
            <li><a href="#" className="text-[#777777] font-normal text-[18px]">Testomonilas</a></li>


          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-[#05264E] font-medium text-[18px] mb-2">Category</h3>
          <ul className="space-y-1">
          <li><a href="#" className="text-[#777777] text-[18px] font-normal">UI Designer</a></li>
            <li><a href="#" className="text-[#777777] font-normal text-[18px]">Graphic Designer</a></li>
            <li><a href="#" className="text-[#777777] font-normal text-[18px]">SOftware Engineer</a></li>
            <li><a href="#" className="text-[#777777] font-normal text-[18px]">Web Developer</a></li>
            <li><a href="#" className="text-[#777777] font-normal text-[18px]">Morle</a></li>

            
          </ul>
        </div>
        <div className="col-span-1">
        <h3 className="text-[#05264E] font-medium text-[18px] mb-2">Follow US</h3>

          <ul className="space-y-1">
          <li><a href="#" className="text-[#777777] font-normal text-[18px]">Linkedin</a></li>
            <li><a href="#" className="text-[#777777] font-normal text-[18px]">Facebook</a></li>
            <li><a href="#" className="text-[#777777] font-normal text-[18px]">Instagram</a></li>
            <li><a href="#" className="text-[#777777] font-normal text-[18px]">Dribble</a></li>
            <li><a href="#" className="text-[#777777] font-normal text-[18px]">Behance</a></li>

          </ul>
        </div>
        <div className="w-[25%]">
        <h3 className="text-[#05264E] font-medium text-[18px] mb-2">Newsletter</h3>
          
          <p className=" font-normal text-[#777777]">Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula.</p>
          {/* <div className="mt-4">
            <input className="w-full py-2 px-4 border border-gray-400 rounded focus:outline-none focus:border-blue-500" type="email" placeholder="Enter your email" />
            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-full">Send</button>
          </div> */}
          {/* <div className="mt-4 relative">
  <input
    className="w-full py-2 px-4 border border-gray-400 rounded-l focus:outline-none focus:border-blue-500"
    type="email"
    placeholder="Enter your email"
  />
  <button className="py-2 top-0 right-0 px-4 bg-blue-500 text-white rounded-r">Send</button>
</div> */}


{/* <div className="mt-4 relative">
  <input
    className="w-full py-2 px-4 border border-gray-400 outline-none rounded-l  focus:border-blue-500 pr-12"
    type="email"
    placeholder="Enter your email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
  />
  <button className="absolute top-0 right-0 h-full py-1  px-4 bg-blue-500 text-white rounded-r">Send</button>
</div> */}



{/* <div className="mt-4 relative">
  <input
    className="w-full py-2 px-4 border border-gray-400 rounded-l focus:outline-none focus:border-blue-500 pr-12"
    type="email"
    placeholder="Enter your email"
  />
  <button className="absolute top-0 right-0 h-full py-2 px-4 bg-blue-500 text-white rounded-r">Send</button>
</div> */}


<div className="mt-4 relative flex">
  <input
    className="w-full py-2 px-4 border border-gray-400 rounded-l focus:outline-none focus:border-blue-500"
    type="email"
    placeholder="Enter your email"
  />
  <button className="py-2 px-4 bg-blue-500 text-white rounded-r" style={{ minWidth: '50px' }}>Send</button>
</div>








        </div>
      </div>
    </footer>
    {/* <footer className=" text-white bg-[#E5EEFF54]  ">
        <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Column 1</h2>
            <ul>
              <li><a href="#">L</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Column 2</h2>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Column 3</h2>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Column 4</h2>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Column 5</h2>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer> */}
    </>
  );
};

export default Footer;
