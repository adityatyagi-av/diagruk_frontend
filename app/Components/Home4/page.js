import React from 'react'
import './Home4.css'
import Image from 'next/image'
import sense from '../Assets/image3.png';

const page = () => {
  return (
   <>
   <body className='relative'>
    <div className='absolute'>
        <p className='texture ml-28 mt-20 text-4xl font-medium leading-9 text-4xl text-gray-500 leading-9 '>
        A <span className='text-purple-600 font-semibold'>Four-Day</span> training on ISO15189 : 2022 will</p>
        <p className='absolute text-4xl ml-28 leading-9 mt-6 text-gray-500 font-medium'>transform your career</p>
        <div className="absolute">
            <p className='new text-9xl font-bold text-gray-400 ml-28 mt-24'>Day-4</p>
        </div>
        <div className='ml-64'>
        <div class="absolute ml-96 mt-20">
            <div className='new w-[372px] h-[490px] bg-white rounded-xl border border-solid border-2 border-gray-200 ml-96 mt-10 shadow-lg ring-2 ring-gray-100 bg-gray-100 p-1'>
        <Image className='w-[346px] h-[346px] ml-2 mt-3'
        src={sense}  // Path to your image
        alt="Description of the image"
      />
        <p className='absolute text-3xl ml-4 leading-10 font-medium'>Details of ISO: 15189</p>
        <p className='ml-4 mt-10 leading-none'>Clause wise description of ISO: 15189</p>
        <p className='ml-4 mt-2 font-bold text-purple-700'>Read more</p>
        </div>    
        </div>
        </div>
        <div className='absolute'>
            <p className='texture ml-28 mt-72 text-3xl font-medium text-3xl text-gray-300 tracking-wider'>
            <span className='text-purple-600'>Day</span> 3 of the Quality Manager Course focuses on assessing <span className='text-purple-600'>participants'</span> practical application of <span className='text-purple-600'>ISO</span> <span className='text-purple-600'>15189:2012</span> concepts. The day is designed to <span className='text-purple-600'>evaluate</span> their ability to <span className='text-purple-600'>implement</span> a quality management system within a medical laboratory <span className='text-purple-600'>setting.</span>
            </p>
             
        </div>
</div>
        </body>
   </>
  )
}

export default page