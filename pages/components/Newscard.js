import React from 'react';
import Image from 'next/image';

const Newscard = () => {
    const data = [
        {
            img :"pers.svg",
            prof : "pp.svg"
        },
        {
            img :"r2.svg",
            prof : "e2.svg"
        },
        {
            img :"r3.svg",
            prof : "e3.svg"
        },
    ]
  return (<>
  {
    data.map((item,index)=>{

        return  <div className="max-w-md  p-4 rounded border-[1px] border-[#3F6EEC4F] overflow-hidden shadow-lg bg-white">
      <Image src={item.img} height={100} width={420}   alt="News" />
      <div className="px-6 py-4 -ml-6">
        <button className="bg-[#256CFC1F] text-[#3F6EEC] rounded-lg px-4 py-2  mb-2">News</button>
        <h1 className="font-medium  text-[22px] text-[#05264E] mb-2">21 Job Interview Tips: How To Make a Great Impression</h1>
        <p className="text-gray-700 text-base">Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
      </div>
      <div className='flex items-center justify-between'>
      <div className='flex items-center gap-4'>
      <div>

        <Image src={item.prof} height={10} width={50} alt='as' />
      </div>
      <div>
        <h1>Sarah Hardling</h1>
        <h1>6 july 2023</h1>
      </div>
 
      </div>
      <div>
        <h1>8 minutes ago</h1>
      </div>

      </div>
    </div>
    })
  }

    
  </>
  );
};

export default Newscard;
