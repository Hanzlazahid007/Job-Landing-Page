import React from 'react'
import Image from 'next/image'
const Topcategories = () => {

    const data = [
        {
            icon : "1.svg",
            title : "Accountancy",
            position : "12 Open Positions"
        },
        {
            icon : "2.svg",
            title : "UI UX Designer",
            position : "12 Open Positions",
            flag :true
        },
        {
            icon : "3.svg",
            title : "Graphic Designer",
            position : "12 Open Positions"
        },
        {
            icon : "4.svg",
            title : "IT contractor",
            position : "12 Open Positions"
        },
        {
            icon : "5.svg",
            title : "Translation",
            position : "12 Open Positions"
        },
        {
            icon : "6.svg",
            title : "Finance",
            position : "12 Open Positions"
        },
        {
            icon : "7.svg",
            title : "Marketing",
            position : "12 Open Positions"
        },
        {
            icon : "8.svg",
            title : "FreelaunceMarketing",
            position : "12 Open Positions"
        },

        

    ]
  return (
    <div className='bg-white h-[100vh] -mt-16  '>
      <div className='pt-12'>
            <h1 className='text-[#3F6EEC] flex justify-center font-normal text-[24px] '>Featured Tour Packages</h1>
            <h1 className='font-bold flex justify-center text-[#05264E] text-[40px]'>Brows Top Categories</h1>
      </div>
      {/* ======================================================================================= */}
      <div className='grid grid-cols-4 gap-10 pl-28 pr-28 pt-20'>
            {
                data.map((item,index)=>{

                    return     <div className='h-28 rounded-lg relative w-60 border-2  border-[#3F6EEC21] '>
           
           <div className={item.flag ? "absolute -top-6 left-[6rem] h-12 w-12 flex items-center justify-center rounded-full bg-[absolute -top-6 left-[6rem] h-12 w-12 flex items-center justify-center rounded-full bg-[#3F6EEC] " :"absolute -top-6 left-[6rem] h-12 w-12 flex items-center justify-center rounded-full bg-[#3F6EEC21]" } >
           <Image src={item.icon} height={5} width={25} />
           </div>
           <div className='flex flex-col items-center  mt-7 '>
           <h1 className='font-medium text-[#05264E]' >{item.title}</h1>
           <h1 className='font-normal text-[#777777]'>12 Open position</h1>
           </div>
            </div>
                })
            }
          
      </div>
      <div className=' flex justify-center mt-10  '>
            <button className="bg-blue-500  text-white rounded px-4 py-2 ">
                  Explore More
                </button>
            </div>
    </div>
  )
}

export default Topcategories
