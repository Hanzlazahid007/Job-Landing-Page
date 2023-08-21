import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="flex justify-between  bg-[#E5EEFF] h-[100vh] p-28">
        <div className="">
          <div>
            <h1 className="font-bold text-[#05264E] text-[40px] ">
              The <span className="font-bold text-[#3F6EEC] text-[40px] ">Easiest Way</span>
            </h1>
            <h1 className="font-bold text-[#05264E] text-[40px]">
              {" "}
              to get Your New job
            </h1>
            <p className="w-[75%] text-[#777777]">
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day.
            </p>
          </div>
            <div className="flex mt-8 gap-4 items-center">
              <button className="bg-blue-500 text-white rounded px-4 py-2">
                Find a Job
              </button>
              <h1 className="text-[#05264E] font-normal">FInd a Candidate</h1>
            </div>
            {/* ===================================================== */}
          <div className="flex items-center gap-5 bg-white h-20  justify-center">
          <div className="flex border-2 border-[#05264E47] rounded-lg p-2 gap-2">
            <Image src={"/job-search 1.svg"} height={5} width={20} alt="asa" />
            <h1 className="text-[#777777] font-normal"> Graphic designer</h1>
          </div>
          <div className="">
           <select className=" outline-none w-40 text-[#777777] font-normal border-2 border-[#05264E47] rounded-lg p-2">
            <option>Category </option>
            <option>Category </option>
            <option>Category </option>
            <option>Category </option>

           </select>
          </div>
          <div>
          <button className="bg-blue-500 w-44 flex justify-center gap-3 items-center text-white rounded px-4 py-2 ml-2">
              <Image src={"/Vector.svg"} height={10} width={15} alt="aa" />
                  Search
                </button>
          </div>

          </div>
        </div>
        <div>
          <Image
            className="-mt-11 h-[35rem]"
            src={"/wq 1.svg"}
            height={500}
            width={950}
            alt="pic"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
