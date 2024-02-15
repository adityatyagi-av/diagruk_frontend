import React from 'react'
import Image from 'next/image'
import './Home7.css'
import sense from '../../public/image5.png';
import sense1 from '../../public/image6.jpg';
import sense2 from '../../public/image7.png';
import sense3 from '../../public/image8.jpg';
import sense4 from '../../public/image9.jpg';
import sense5 from '../../public/image10.png';
import sense6 from '../../public/image11.jpg';
import sense7 from '../../public/image12.jpg';
import sense8 from '../../public/image13.png';
import sense9 from '../../public/image14.jpg';
import sense10 from '../../public/image15.png';
import sense11 from '../../public/image16.jpg';
import sense12 from '../../public/image17.png';
import sense13 from '../../public/image18.png';
import sense14 from '../../public/image19.png';

const page = () => {
  return (
    <div>
      <div className='flex max-w-xl	mt-24 text-4xl font-extrabold h-36 items-center justify-end'>
        <p>OUR TRUSTED PARTNERS</p>
      </div>
     <div className=' grid grid-cols-3 justify-items-center h-[100vh]'>
     <div className='flex flex-col justify-center '>
      <div className='flex flex-col'>
      <Image className='attract w-[240px] h-[92px] shadow-lg' src={sense2} />
     <Image className='attract my-10 w-[240px] h-[92px] shadow-lg' src={sense3} />
     <Image className='attract my-10 w-[240px] h-[92px] shadow-lg' src={sense4} />
     <Image className='attract my-10 w-[240px] h-[92px] shadow-lg' src={sense5} />
     <Image className='attract my-10 w-[240px] h-[92px] shadow-lg' src={sense6} />
      </div>

     </div>
     <div className='flex flex-col items-stretch justify-center'>
      <div className='flex flex-col justify-center'>
      <Image className='attract w-[240px] h-[97px] py-[-16] shadow-lg' src={sense7} />
     <Image className='attract my-10 w-[92px] h-[94px] ml-16 shadow-lg' src={sense8} />
     <Image className='attract my-10 w-[240px] h-[86px] shadow-lg' src={sense9} />
     <Image className='attract my-10 w-[240px] h-[86px] shadow-lg' src={sense10} />
     <Image className='attract my-10 w-[204.6px] h-[94px] shadow-lg ml-5' src={sense11} />
      </div>

     </div>
     <div className='flex flex-col justify-center'>
      <div className='flex flex-col justify-center'>
      <Image className='attract w-[240px] h-[87px] shadow-xl' src={sense12}/>
     <Image className='attract my-10 w-[240px] h-[87px] py-4 shadow-xl' src={sense13}/>
     <Image className='attract my-10 w-[91px] h-[94px] ml-16 shadow-lg' src={sense14}/>
     <Image className='attract my-10 w-[240px] h-[92px] shadow-lg' src={sense}/>
     <Image className='attract my-10 w-[240.6px] h-[92px] shadow-lg' src={sense1}/>
      </div>

     </div>
     

     </div>








     </div>
     
     
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
     </div>
    <p className='type text-3xl font-semibold absolute font-Roboto ml-40 mt-24 '>
        OUR TRUSTED PARTNERS
        </p> */}