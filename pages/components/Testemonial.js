import React from 'react'

import Slider from './Slider'

const Testemonial = () => {
  return (
    <div className='bg-white'>
      <div className='flex flex-col items-center  '>
            <h1 className='text-[#3F6EEC] text-[24px] font-normal'>Client Testemonial</h1>
        <h1 className='text-[#05264E] font-bold text-[40px]'>What a job holder says about us</h1>
        <h1 className='text-[#777777] font-normal'>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula Mauris ut cursus nunc.</h1>
        <h1 className='text-[#777777] font-normal'> Morbi eleifend, ligula at consectetur vehicula</h1>
      </div>

      <div >

      <Slider />
      </div>
    </div>
  )
}

export default Testemonial
