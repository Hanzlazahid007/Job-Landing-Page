import React from 'react'; 
import Image from 'next/image';

const Jobcard = () => {
    const data = [
        {
            pic : "rec.svg",
            title : "UI/UX Designer",
            bt1 : "Adobe XD",
            btn2 : "Figma Photoshop",
        },
        {
            pic : "rec.svg",
            title : "UI/UX Designer",
            bt1 : "Adobe XD",
            btn2 : "Figma Photoshop",
        } ,
        {
            pic : "rec.svg",
            title : "UI/UX Designer",
            bt1 : "Adobe XD",
            btn2 : "Figma Photoshop",
        },
         {
            pic : "rec.svg",
            title : "UI/UX Designer",
            bt1 : "Adobe XD",
            btn2 : "Figma Photoshop",
        },
         {
            pic : "rec.svg",
            title : "UI/UX Designer",
            bt1 : "Adobe XD",
            btn2 : "Figma Photoshop",
        },
         {
            pic : "rec.svg",
            title : "UI/UX Designer",
            bt1 : "Adobe XD",
            btn2 : "Figma Photoshop",
        }
    ]
  return (
    <>
        {data.map((item,index)=>{

            return <div className="card border border-[#3F6EEC] p-6 rounded-lg">
      <div className="flex items-center mb-4">
        <div className=" rounded-full mr-3">
            <Image src={"/rec.svg"} height={20} width={40} alt='qwq' />
        </div>
        <div>
          <h2 className="font-medium">LinkedIn</h2>
          <p className="text-white">Mumbai, India</p>
        </div>
      </div>
      <h1 className="text-xl font-semibold mb-2">UI/UX Designer</h1>
      <div className='flex items-center gap-4'>
      <Image src={"/part.svg"} height={20} width={20} alt='asa'/>
      <h2 className="text-sm text-[#777777] mb-2">Full time</h2>
      <Image src={"/time.svg"} height={20} width={20} alt='asa'/>

      </div>
      <p className=" mb-4 font-normal text-[#5A5656] ">ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
              <div className="flex">
          <button className="bg-[#256CFC1F] text-white px-2 py-1 rounded-md mr-2">Adobe XD</button>
          <button className="bg-[#256CFC1F] text-white px-2 py-1 rounded-md mr-2">Adobe XD</button>
          <button className="bg-[#256CFC1F] text-white px-2 py-1 rounded-md">Adobe XD</button>
        </div>

        <div className="flex justify-between mt-6">
          <button><span className='text-[#3F6EEC] font-normal text-[22px]'>$600 /</span> <span className='text-[#77777777] font-normal'> Hour</span></button>
            <button className="bg-[#256CFC1F] text-[#3F6EEC] px-4 py-2 rounded-md">Apply Now</button>
        </div>
        

      
    </div>
        })}
    
    
    </>
  );
};

export default Jobcard;
