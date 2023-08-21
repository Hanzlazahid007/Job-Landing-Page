import React from 'react'
import Image from 'next/image'
import Dream from './Dream'

const Mostview = () => {
    const data = [
        {
            icon : "a.svg",
            title : "post a job"
        },
        {
            icon : "b.svg",
            title : "Choose FreeLauncer"
        },
        {
            icon : "c.svg",
            title : "Pay Safely"
        },
        {
            icon : "d.svg",
            title : "We,re here to help"
        },
    ]
  return (
    <div className='flex justify-between p-20 bg-white'>
      <div className='w-[47%]'>
        <h1 className='text-[#05264E] font-bold text-[40px]'>Most Viewed and all-time top-selling service</h1>
            <h1 className='font-normal text-[#777777] mt-4'>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</h1>
    {/* ================================================== */}
          {data.map((item,index)=>{
            
            return <div className='flex mt-4 gap-4 items-center'>

                       
{/* ============================= */}
<div className='h-12 w-12 flex justify-center items-center rounded-full bg-[#3F6EEC]'>
<Image src={item.icon} height={10} width={30} alt='asa' />
</div>

<div>
<h1 className='text-[#05264E] font-semibold text-[25px]'>{item.title}</h1>
<h1 className='font-normal text-[#777777]'>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula </h1>
</div>
{/* =========================================== */}


</div>
          })}


                <div className='flex mt-4 gap-4 items-center'>

                       
                        {/* ============================= */}
                        <div className='h-12 w-12 flex justify-center items-center rounded-full bg-[#3F6EEC]'>
                        <Image src={"/a.svg"} height={10} width={30} alt='asa' />
                    </div>

                    <div>
                        <h1 className='text-[#05264E] font-semibold text-[25px]'>Post a Job</h1>
                        <h1 className='font-normal text-[#777777]'>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula </h1>
                    </div>
                    {/* =========================================== */}
                       

                </div>

      </div>
      {/* ============================================================= */}
      <div>
        <Image className='-mt-24' src={"/prof.svg"} height={100} width={600} alt='asa' />
      </div>
    </div>
  )
}

export default Mostview
