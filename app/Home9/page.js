import React from 'react'
import Image from 'next/image'
import sense from '../../public/image4.png'
const Home9 = () => {
  return (
    
      
<div className='flex flex-col'>
<div className='flex pt-12 w-6/12 h-full justify-center items-center'>
      <p className='new text-9xl font-bold text-gray-500'>Why us ?</p>
      </div>
      <div className='flex-col ml-24 justify-center'>
      <div className='flex absolute justify-center pt-12'>
        <Image className='w-[481px] h-[321px]'
        src={sense}  
        alt="Description of the image"/>
         <div className='flex items-end px-12 py-24'>
        <p className='text-4xl flex font-semibold'>Why you should choose us ?</p>
    </div>
    </div>
    <div className='flex mt-72 mb-20 justify-center'>
    <div className=' w-9/12 py-7 bg-white rounded-xl flex border-solid border-2 border-gray-300 shadow-xl p-1 justify-center items-center'>
         <div className='flex py-7 w-full justify-center'>
      <div className='w-80  px-4 h-2/5 flex-col justify-center  text-neutral-800 text-opacity-60 text-xl font-normal tracking-wide'>
         <p className='text-2xl text-purple-600 font-bold'>High quality courses</p>
      <p className='text-lg py-4 font-normal text-gray-500'>Our learning environment is extensive and dynamic, transcending the conventional boundaries of traditional education. Our platform integrates the latest technology, engaging content, and expertly crafted courses to provide you with a well-rounded education.</p>
      </div>
 
      <div className='w-80 h-2/5 px-4 flex-col justify-center text-neutral-800 text-opacity-60 text-xl font-normal tracking-wide'>
         <p className='text-2xl text-purple-600 flex text-center font-bold'>High quality courses</p>
      <p className='text-lg py-4 font-normal text-gray-500 '>Our learning environment is extensive and dynamic, transcending the conventional boundaries of traditional education. Our platform integrates the latest technology, engaging content, and expertly crafted courses to provide you with a well-rounded education.</p>
      </div>
      
      <div className='w-80 h-2/5 px-4 flex-col  text-neutral-800 text-opacity-60 text-xl font-normal tracking-wide'>
         <p className='text-2xl text-purple-600 font-bold'>High quality courses</p>
      <p className='text-lg font-normal py-4 text-gray-500'>Our learning environment is extensive and dynamic, transcending the conventional boundaries of traditional education. Our platform integrates the latest technology, engaging content, and expertly crafted courses to provide you with a well-rounded education.</p>
      </div>
      </div>
      </div> 
    </div>
    </div>
</div>


    
  )
}

export default Home9
