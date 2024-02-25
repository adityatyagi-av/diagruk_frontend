import React from 'react'
import Image from 'next/image'
import './Home8.css'
import sense from '../../public/image20.jpg';
import sense1 from '../../public/image21.jpg';

const page = () => {
  return (
    <>
      {/* <body className='pop'>
   <p className='text-3xl font-semibold mt-12 ml-32'>SPEAKERS</p>
<div className='flex-row'>
<div className='flex'>
<div class="border1 w-w-72 h-[332px] bg-white rounded-xl"></div>
<div class="border1 w-w-72 ml-12 h-[332px] bg-white rounded-xl"></div>
<div class="border1 w-w-72 ml-12 h-[332px] bg-white rounded-xl"></div>
<div class="border1 w-w-72 ml-12 h-[332px] bg-white rounded-xl">


</div>
</div>
<div className='flex'>
<div class="border1 w-w-72 h-[332px] bg-white rounded-xl"></div>
<div class="border1 w-w-72 ml-12 h-[332px] bg-white rounded-xl"></div>
<div class="border1 w-w-72 ml-12 h-[332px] bg-white rounded-xl"></div>
<div class="border1 w-w-72 ml-12 h-[332px] bg-white rounded-xl"></div>
</div>
</div>
</body> */}
<div className='flex font-extrabold max-h-screen justify-center py-20 text-4xl max-w-xl py-[-4] justify-center h-16 items-center'>
 OUR SPEAKERS
</div>
      <div className='grid grid-rows-2 lg:grid lg:grid-rows-1 mb-5 w-full gap-2'>
        <div className='mx-3 flex justify-center gap-2 items-center mt-12 lg:mt-32 h-96 '>
          <div className='grid grid-rows-2 grid-cols-2 lg:grid lg:grid-cols-4 gap-8 ' >

            <div class="border1 w-full lg:w-64 lg:h-[332px] bg-white rounded-xl"></div>

            <div class="border1 w-full lg:w-64  lg:h-[332px] bg-white rounded-xl">

            </div>

            <div class="border1 w-full lg:w-64  lg:h-[332px] bg-white rounded-xl"></div>

            <div class="border1 w-full lg:w-64 lg:h-[332px] bg-white rounded-xl">
            <Image src={sense} className='w-full lg:h-4/5 rounded-t-lg' />
            <div className='flex font-medium w-full font-lg justify-center font-semibold items-end lg:h-7'>
             <p className='text-purple-500'> Manoj Bharadwaj</p>
            </div>
            <div className='flex w-full items-center text-base justify-center lg:h-7 font-light '>
               Quality Manager
            </div>

            </div>
            
          </div>
        </div>

        <div className='flex w-full justify-center lg:mt-12 lg:h-52 items-center '>
          <div className='mx-3 grid grid-rows-2 grid-cols-2 lg:grid lg:grid-cols-4 gap-8 ' >

            <div class="border1 w-full lg:w-64 lg:h-[332px] bg-white rounded-xl"></div>

            <div class="border1 w-full lg:w-64 lg:h-[332px] bg-white rounded-xl"></div>

            <div class="border1 w-full lg:w-64 lg:h-[332px] bg-white rounded-xl">
            <Image src={sense1} className='w-full lg:h-4/5 rounded-t-lg' />
            <div className='flex font-medium w-full font-lg justify-center font-semibold items-end h-7'>
             <p className='text-purple-500'>Navin Kumar</p>
            </div>
            <div className='flex w-full items-center text-base justify-center h-7 font-light '>
              Quality Manager
            </div>
            </div>


            <div class="border1 w-full lg:w-64  lg:h-[332px] bg-white rounded-xl">
            
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default page;
{/* <Image className='picture' 
src={sense}
alt="Description of the image"
/> */}
{/* <div className='ml-48'>
     <div className='flex-col ml-96 items-center'>
     <Image className='' src={sense9} />
     <Image className='my-9' src={sense8} />
     <Image className='my-9' src={sense9} />
     <Image className='my-9' src={sense10} />
     <Image className='my-9' src={sense11} />
     </div>
     </div>
     <div className='ml-96'>
     <div className='flex-col ml-96 items-center'>
     <Image className='' src={sense12} />
     <Image className='my-9' src={sense13} />
     <Image className='my-9' src={sense14} />
     <Image className='my-9' src={sense} />
     <Image className='my-9' src={sense1} />
     </div>
     </div>
     </div> */}