import Link from 'next/link';
import Navbar from '../Navbar/page';
import React from 'react';
// import Assets from '../Assets/page';
import sense from '../Assets/image1.png';
import './Home2.css'
import Image from 'next/image'
import { Space_Mono } from 'next/font/google';

const Home2 = () => {
  return (
    <>

     <div className='second relative'>

    <div className='absolute'>
        <p className='texture ml-28 mt-20 text-4xl font-medium leading-9 text-4xl text-gray-500 leading-9 '>
        A <span className='text-purple-600 font-semibold'>Four-Day</span> training on ISO15189 : 2022 will</p>
        <p className='absolute text-4xl ml-28 leading-9 mt-6 text-gray-500 font-medium'>transform your career</p>
        <div className="absolute">
            <p className='color text-9xl font-bold ml-28 mt-24 text-color-#888'>Day-1</p>
        </div>
        <div className='ml-64'>
        <div class="absolute ml-96">
            <div className='new w-[372px] h-[490px] bg-white rounded-xl border border-solid border-2 border-gray-200 ml-96 mt-16 shadow-lg ring-2 ring-gray-100 bg-gray-100 p-1'>
        <Image className='w-[346px] h-[346px] ml-2 mt-3'
        src={sense}  // Path to your image
        alt="Description of the image"/>
        <p className='absolute text-2xl ml-4 leading-10 font-medium'>Basics of NABL</p>
        <p className='ml-4 mt-10 leading-none'>Get to know the basics</p>
        <p className='ml-4 mt-2 font-bold text-purple-700'>Read more</p>
        </div>    
        </div>
        </div>
        <div className='absolute'>
            <p className='texture ml-28 mt-72 text-3xl font-medium text-3xl text-gray-300 tracking-wider'>
            "<span className='text-purple-600'>Unlock</span> your career potential as a<br/> Quality Manager—architects of <br/> excellence. As a <span className='text-purple-600'>pivotal force</span> <br/> ensuring <span className='text-purple-600'>top-tier quality</span> standards, you'll spearhead continuous <span className='text-purple-600'>improvement</span>,<br/> shape organizational success,<br/> <span className='text-purple-600'>triple your impact.</span>"
            </p>
             
        </div>
</div>
        
</div>     
   
  
</>
  );
};

export default Home2;










