import React from 'react'
import Image from 'next/image'
import './Home8.css'
import sense from '../Assets/image5.png';

const page = () => {
  return (
   <>
   <body className='pop'>
   <p className='text-3xl font-semibold mt-12 ml-32'>SPEAKERS</p>
<div className='flex-row'>
<div className='flex'>
<div class="tree w-[282px] h-[332px] bg-white rounded-xl ml-32 mt-20"></div>
<div class="tree w-[282px] ml-12 h-[332px] bg-white rounded-xl ml-32 mt-20"></div>
<div class="tree w-[282px] ml-12 h-[332px] bg-white rounded-xl ml-32 mt-20"></div>
<div class="tree w-[282px] ml-12 h-[332px] bg-white rounded-xl ml-32 mt-20">
<Image className='w-[282px] h-[266px] ml-16 mt-44 absolute'
        src={sense} 
        alt="Description of the image"
      
      />

</div>
</div>
<div className='flex'>
<div class="tree w-[282px] h-[332px] bg-white rounded-xl ml-32 mt-20"></div>
<div class="tree w-[282px] ml-12 h-[332px] bg-white rounded-xl ml-32 mt-20"></div>
<div class="tree w-[282px] ml-12 h-[332px] bg-white rounded-xl ml-32 mt-20"></div>
<div class="tree w-[282px] ml-12 h-[332px] bg-white rounded-xl ml-32 mt-20"></div>
</div>
</div>
</body>

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