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
<div className='flex font-extrabold max-h-screen justify-center py-20 text-4xl max-w-xl py-[-4] justify-center h-32 items-center'>
 OUR SPEAKERS
</div>
      <div className='gird grid-rows-2 max-h-screen'>
        <div className='flex w-screen-full justify-center items-center h-96'>
          <div className='grid grid-cols-4 gap-16' >

            <div class="border1 w-64 h-[332px] bg-white rounded-xl"></div>

            <div class="border1 w-64 h-[332px] bg-white rounded-xl">

            </div>

            <div class="border1 w-64 h-[332px] bg-white rounded-xl"></div>

            <div class="border1 w-64 h-[332px] bg-white rounded-xl">
            <Image src={sense} className='w-full h-4/5 rounded-t-lg' />
            <div className='flex font-medium max-w-full font-lg justify-center font-semibold items-end h-7'>
             <p className='text-purple-500'> Manoj Bharadwaj</p>
            </div>
            <div className='flex max-w-full items-center text-base justify-center h-7 font-light '>
               Quality Manager
            </div>

            </div>
            
          </div>
        </div>
        <div className='flex w-screen-full justify-center h-96 items-center '>
          <div className='grid grid-cols-4 gap-16' >

            <div class="border1 w-64 h-[332px] bg-white rounded-xl"></div>

            <div class="border1 w-64 h-[332px] bg-white rounded-xl"></div>

            <div class="border1 w-64 h-[332px] bg-white rounded-xl">
            <Image src={sense1} className='w-full h-4/5 rounded-t-lg' />
            <div className='flex font-medium max-w-full font-lg justify-center font-semibold items-end h-7'>
             <p className='text-purple-500'>Navin Kumar</p>
            </div>
            <div className='flex max-w-full items-center text-base justify-center h-7 font-light '>
              Quality Manager
            </div>
            </div>


            <div class="border1 w-64 h-[332px] bg-white rounded-xl">
            
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