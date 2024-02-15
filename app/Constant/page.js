import React from 'react'
import './Constant.css'
const page = () => {
  return (
    <>
    {/* <div>
    <div clsss="constant">
<div class="nomtext absolute">
<div class="text-center ml-3 mt-20">
<spam class="flex items-center justify-center text-center ml-1">
<p class="text-black font-bold text-xl ml-96 text-center">
    Elevate excellence — where precision meets potential, and success is standard.
  </p>
</spam>
</div>
</div>
<div class="click absoulte ml-32"> 
<div className='absolute ml-2 mt-9 text-2xl'>
<div className='enroll ml-64 mt-24'>
    <spam class="font-medium text-center text-gray-500 ml-96" >
    <p className='ml-96'>
     Enroll now <spam className='text-purple-700'>@5999/-</spam> only
    </p>
    </spam>
    </div>
</div>   
<button class="neon absolute mt-36
 bg-white border-2 border-purple-500 text-purple-500 h-16 w-60 rounded-full ml-96 text-2xl font-bold
 no-underline transition-all duration-400 ease-in-out">
  Get Started
</button>
</div>
</div>
    </div> */}

    <div className='flex flex-col text-center max-w-full justify-center items-center'>
      <div className='flex'>
      <p class="text-black font-bold text-xl text-center">
    Elevate excellence — where precision meets potential, and success is standard.
  </p> 
      </div>
      <div className='flex ustify-center items-center py-9'>
      <div className='px-6'>
    <p className='text-center text-gray-500 text-center text-gray-500 text-2xl'>
     Enroll now <spam className='text-purple-700'>@5999/-</spam> only
    </p>
    </div>
    <button class="px-3 hover:text-neon-hover hover:shadow-neon-hover bg-white border-2 border-purple-500 text-purple-500 h-16 w-60 rounded-full text-2xl font-bold
 no-underline transition-all duration-400 ease-in-out">
  Get Started
</button>
    </div>
    </div>
    </>
  )
}

export default page
