import React from 'react' 
import Newscard from './Newscard'


const News = () => {
  return (
    <div className='bg-white'>
       <div className='flex flex-col items-center  '>
            <h1 className='text-[#05264E] font-bold text-[40px]'>Latest Job</h1>
        <h1 className='font-normal text-[#05264E] mt-4 '>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula Mauris ut cursus nunc.</h1>
        <h1 className='font-normal text-[#05264E] '> Morbi eleifend, ligula at consectetur vehicula</h1>
      </div>
      {/* ============================================================ */}
      <div className='grid p-20 gap-8 grid-cols-3 justify-center'>
        <Newscard />
      </div>
    </div>
  )
}

export default News
