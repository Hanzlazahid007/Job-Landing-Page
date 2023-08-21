import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar'; 
// import "swiper/css/effect-cards"
import 'swiper/css/grid';
// import "swiper/css/bundle";

const Slider = () => {
  const data = [
    {
        icon : "aa.svg",
        title : "Accountancy",
        position : "12 Open Positions",
        flag: true
    },
    {
        icon : "bb.svg",
        title : "UI UX Designer",
        position : "12 Open Positions",
        
    },
    {
        icon : "cc.svg",
        title : "Graphic Designer",
        position : "12 Open Positions"
    },
    {
      icon : "cc.svg",
      title : "Graphic Designer",
      position : "12 Open Positions"
  },
  {
    icon : "cc.svg",
    title : "Graphic Designer",
    position : "12 Open Positions"
},

    

    

]
  return (
    <div className='flex justify-center'>
       <Swiper 
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       grid={10}
       
      spaceBetween={0}
      
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
     
    >
    
    

     {
                data.map((item,index)=>{

                    return  <SwiperSlide className='ml-[1px]'>

                    <div className=   ' h-56 mt-10 w-[23rem] ml-10 mr-10    rounded-lg relative  border bg-[#3F6EEC21] '>
                    <img className='absolute top-6 left-8' src='/vec.svg' />
                    <img className='absolute top-6 left-14' src='/vec.svg' />
           
           <div className={"absolute -top-6 left-[10rem] h-12 w-12 flex items-center justify-center rounded-full bg-[#3F6EEC21]" } >
           {/* <Image  src={item.icon} height={5} width={25} /> */}
           <img className='h-100 w-100' src={item.icon} alt='as' />
           </div>
           <div className='flex items-center justify-center flex-col mt-10 '>
           <h1 className='font-medium text-[24px] text-[#05264E]' >Andrew Smith</h1>
           <h1 className='font-normal text-[#3F6EEC] text-[16px]'>One Year with US</h1>
           <p  className='font-normal mt-3 text-[#777777]   w-[90%]' >Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
           </div>
            </div>
                    </SwiperSlide>    
                })
            }
    
  
      ...
    </Swiper>
    </div>
  )
}

export default Slider
