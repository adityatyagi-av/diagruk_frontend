import React from 'react'
import Image from 'next/image'
import sense from '../../public/image4.png'
import './Home5.css'
const page = () => {
  return (
    <>
    <div className='lg:h-full flex-col mt-16 justify-center'>
    <div className='flex lg:h-2/3 flex-col'>
      <div className='flex w-full lg:h-52'>
      <div className='flex lg:w-6/12 lg:h-full justify-center items-center'>
      <p className='new text-4xl font-bold lg:text-9xl lg:font-bold ml-5 text-gray-500'>Why us ?</p>
      </div>
      </div>
      <div className='flex lg:h-2/5 w-full justify-center '>
        <div className='flex-col lg:h-2/5 mt-8 lg:mt-12 w-full lg:w-10/12'>
        <div className='flex w-full absolute lg:absolute'>
        <Image className='lg:w-[481px] mx-16 w-full h-[220px] lg:h-[321px]'
        src={sense}  
        alt="Description of the image"/>
         <div className='hidden lg:flex lg:items-end lg:px-12 lg:py-24'>
        <p className='lg:text-4xl flex lg:font-semibold'>Why you should choose us ?</p>
    </div>
        </div>
        <div className='flex lg:mt-64 mt-48 justify-center mb-4'>
         
         <div className=' lg:w-10/12 lg:py-7 bg-white rounded-xl flex border-solid border-2 border-purple-600  lg:border-gray-300 shadow-xl p-1 justify-center items-center'>
         <div className='lg:flex lg:py-7 w-full justify-center'>
      <div className='w-80  px-4 lg:h-2/5 flex-col justify-center text-neutral-800 text-opacity-60 lg:text-xl lg:font-normal tracking-wide'>
         <p className='lg:text-2xl text-center lg:text-start text-purple-600 lg:font-bold mt-6'>High quality courses</p>
      <p className='lg:text-lg py-4 lg:font-normal text-gray-500'>Our learning environment is extensive and dynamic, transcending the conventional boundaries of traditional education. Our platform integrates the latest technology, engaging content, and expertly crafted courses to provide you with a well-rounded education.</p>
      </div>
 
      <div className='w-80 lg:h-2/5 px-4 flex-col  text-neutral-800 text-opacity-60 lg:text-xl lg:font-normal tracking-wide'>
         <p className='lg:text-2xl text-purple-600 text-center lg:text-start lg:font-bold'>High quality courses</p>
      <p className='lg:text-lg lg:font-normal py-4 text-gray-500'>Our learning environment is extensive and dynamic, transcending the conventional boundaries of traditional education. Our platform integrates the latest technology, engaging content, and expertly crafted courses to provide you with a well-rounded education.</p>
      </div>
      
      <div className='w-80 lg:h-2/5 px-4 flex-col  text-neutral-800 text-opacity-60 lg:text-xl lg:font-normal tracking-wide'>
         <p className='lg:text-2xl text-purple-600 text-center lg:text-start lg:font-bold'>High quality courses</p>
      <p className='lg:text-lg lg:font-normal py-4 text-gray-500'>Our learning environment is extensive and dynamic, transcending the conventional boundaries of traditional education. Our platform integrates the latest technology, engaging content, and expertly crafted courses to provide you with a well-rounded education.</p>
      </div>
      </div>
      </div>
      
      </div>


        </div>
      </div>
      
    </div> 
    
    </div>
  
  
    </>
  )
}

export default page

