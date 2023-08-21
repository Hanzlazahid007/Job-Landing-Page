import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#E5EEFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between p-8 h-0">
            <div className="flex">
              {/* Logo */}

              <div className="flex-shrink-0 flex items-center">
                <Image src={"/Logo.svg"} height={50} width={50} alt="logo" />
              </div>
            </div>
            <div className="flex items-center">
              {/* Navigation Links */}
              <div className="hidden items-center md:flex space-x-12">
                <a
                  href="#"
                  className="bg-blue-500 text-white rounded  px-4 py-2"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="t font-normal text-[#000000] hover:text-blue-500"
                >
                  About
                </a>
                <a
                  href="#"
                  className=" font-normal text-[#000000] hover:text-blue-500"
                >
                  Browse Jobs
                </a>
                <a
                  href="#"
                  className=" font-normal text-[#000000] hover:text-blue-500"
                >
                  Category
                </a>
                <a
                  href="#"
                  className=" font-normal text-[#000000] hover:text-blue-500"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className=" font-normal text-[#000000] hover:text-blue-500"
                >
                  Contact Us
                </a>
              </div>
              {/* Register Buttons */}
              <div className="ml-4">
                <button className="bg-blue-500 text-white rounded px-4 py-2">
                  Register
                </button>
                <button className=" text-[#3F6EEC] border-[1px] border-[#3F6EEC] rounded px-4 py-2 ml-2">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
