import Link from 'next/link';
import Navbar from '../Navbar/page';
import React from 'react';
import sense from '../../public/image1.png';
import './Home2.css';
import Image from 'next/image';
import { Space_Mono } from 'next/font/google';
const CardContent = () => {
  return (
    <>
      <p className='absolute text-2xl ml-4 leading-10 font-medium'>Basics of NABL</p>
      <p className='ml-4 mt-10 leading-none'>Get to know the basics</p>
      <p className='ml-4 mt-2 font-bold text-purple-700'>Read more</p>
    </>
  );
};

const CardImage = ({ imagePath, imageAlt }) => {
  return (
    <Image className='w-[346px] h-[346px] ml-3 mt-3' src={sense} alt={imageAlt} />
  );
};

const Card = ({ imagePath, imageAlt }) => {
  return (
    <div className='new w-[373px] h-[490px] bg-white rounded-xl border border-solid border-2 border-gray-200 shadow-lg'>
      <CardImage imagePath={imagePath} imageAlt={imageAlt} />
      <CardContent />
    </div>
  );
};





const Home2 = () => {
  return (
    <>
    <div className='flex mt-48 justify-center'>
     
  <div className='flex px-24 items-center flex-col items-center max-h-full md:max-h-screen justify-center h-[100vh] '>
    
    <div className='text-4xl font-medium leading-1 text-gray-500'>
      <p className='leading-1'>
        A <span className='text-purple-600 font-semibold'>Four-Day</span> training on ISO15189 : 2022 will
        <br/>transform your career
      </p>
      <div>
      <div className="mt-24">
        <p className='color text-9xl font-bold text-color-#888'>Day-1</p>
      </div>
      <div className='mt-16 bg-red'>
        <p className='font-medium text-3xl text-gray-300 tracking-wider'>
          "<span className='text-purple-600'>Unlock</span> your career potential as a<br/> Quality Manager—architects of <br/> excellence. As a <span className='text-purple-600'>pivotal force</span> <br/> ensuring <span className='text-purple-600'>top-tier quality</span> standards,<br/>you'll spearhead continuous <span className='text-purple-600'>improvement</span>,<br/> shape organizational success,<br/> <span className='text-purple-600'>triple your impact.</span>"
        </p>
        </div>
      </div>  
    </div>
    </div>

  
  <div className='flex max-h-full md:max-h-screen justify-center h-full justify-center items-end'>
  <div className='new px-24 flex-col max-h-full w-full h-3/4 '> 
    <div className='flex justify-center mt-44 mt-auto'>
      
      <Card></Card>
    
    </div>
  </div>
</div>
</div>



    </>
  );
};

export default Home2









