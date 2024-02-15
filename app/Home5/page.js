import React from 'react'
import Image from 'next/image'
import sense from '../../public/image4.png'
import './Home5.css'
const page = () => {
  return (
    <>
    <div className='h-full flex-col justify-center'>
    <div className='flex h-2/3 flex-col'>
      <div className='flex w-full h-52'>
      <div className='flex w-6/12 h-full justify-center items-center'>
      <p className='new text-9xl font-bold text-gray-500'>Why us ?</p>
      </div>
      </div>
      <div className='flex h-2/5  justify-center '>
        <div className='flex-col h-2/5 w-10/12'>
        <div className='flex absolute fixed'>
        <Image className='w-[481px] h-[321px]'
        src={sense}  
        alt="Description of the image"/>
         <div className='flex items-end px-12 py-24'>
        <p className='text-4xl flex font-semibold'>Why you should choose us ?</p>
    </div>
        </div>
        <div className='flex my-64 justify-center '>
         
         <div className=' w-10/12 py-7 bg-white rounded-xl flex border-solid border-2 border-gray-300 shadow-xl p-1 justify-center items-center'>
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
      
    </div> 
    
    </div>
  
  
    </>
  )
}

export default page

