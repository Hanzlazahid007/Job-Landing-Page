import React from 'react'
import Image from 'next/image'
import Jobcard from './Jobcard'
import Dream from './Dream'

const Latest = () => {
    const data = [
        {
            icon : "account.svg",
            title: "accounting",
            flag : true
        },
        {
            icon : "market.svg",
            title: "marketing",
            flag : false
        },
        {
            icon : "it.svg",
            title: "accounting",
            flag : false
        },
        {
            icon : "trans.svg",
            title: "accounting",
            flag : false
        },
        {
            icon : "graph.svg",
            title: "accounting",
            flag : false
        },
        
    ]
  return (
    <div className='bg-white'>
      <div className='flex flex-col items-center  '>
            <h1 className='text-[#05264E] font-bold text-[40px]'>Latest Job</h1>
        <h1 className='font-normal text-[#05264E] mt-4 '>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula Mauris ut cursus nunc.</h1>
        <h1 className='font-normal text-[#05264E] '> Morbi eleifend, ligula at consectetur vehicula</h1>
      </div>
      {/* ======================================================================== */}
      <div className='flex gap-3 mt-8 justify-center'>
      {data.map((item,index)=>{

        return    <div className='p-2 pl-10 pr-10 rounded-md  flex gap-2 border-[1px] border-[#3F6EEC]'>
        <div>
            <Image src={"/account.svg"} height={20} width={20} alt='asas' />
        </div>
        <div>

        <h1 className='font-normal text-[#3F6EEC] text-[16px]'> account</h1>
        </div>
      </div>
      })}

      </div>
      {/* ===================================== */}
      <div className='grid p-20 gap-8 grid-cols-3 justify-center'>

        <Jobcard />
        

      </div>
      <div className=' flex justify-center -mt-8 pb-20 '>
            <button className="bg-blue-500  text-white rounded px-4 py-2 ">
                  View All
                </button>
            </div>
          
    </div>
  )
}

export default Latest
