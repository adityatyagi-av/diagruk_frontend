import Navbar from '../Navbar/page';
import React from 'react';
import sense from '../../public/image1.png';
import Image from 'next/image';

const CardContent = () => {
  return (
    <>
      <p className='absolute text-semibold lg:text-lg lg:text-2xl ml-2 lg:ml-4 leading-4 lg:leading-10 font-medium'>Basics of NABL</p>
      <p className='ml-2 mt-4 lg:ml-4 lg:mt-6 lg:mt-10 text-semibold lg:text-lg leading-none'>Get to know the basics</p>
      <p className='mt:ml-4 ml-2 lg:mt-2 font-light lg:font-semibold lg:bold text-purple-700'>Read more</p>
    </>
  );
};

const CardImage = ({ imagePath, imageAlt }) => {
  return (
    <Image className='w-full lg:w-[346px] h-[195px] lg:h-[346px] ml-px lg:ml-3 mt-px lg:mt-3' src={sense} alt={imageAlt} />
  );
};

const Card = ({ imagePath, imageAlt }) => {
  return (
    <div className='new w-full lg:w-[373px] h-[280px] lg:h-[490px] bg-white rounded-xl border border-solid border-2 border-gray-200 shadow-lg'>
      <CardImage imagePath={imagePath} imageAlt={imageAlt}/>
      <CardContent />
    </div>
  );
};

const Home2 = () => {
  return (
    <>
    <div className='flex border-dashed border-2 border-purple-600 ... justify-center mt-32'>
      <div className='flex flex-col lg:mt-16 px-4 lg:px-24'>
        <p className='text-base lg:text-4xl lg:font-medium leading-8 lg:leading-1 text-gray-500'>
          A <span className='text-purple-600 font-light lg:font-semibold'>Four-Day</span> training on ISO15189 : 2022 will transform your career
        </p>
        <div className='mt-8 lg:mt-24'>
          <p className='color text-3xl lg:text-9xl lg:font-bold text-gray-400'>Day-1</p>
        </div>
        <div className='mt-8 lg:mt-16 bg-red'>
          <p className='text-sm lg:text-3xl text-gray-300 lg:leading-normal tracking-wider'>
            "<span className='text-purple-600'>Unlock</span> your career potential as a<br/> Quality Manager—architects of <br/> excellence. As a <span className='text-purple-600'>pivotal force</span> <br/> ensuring <span className='text-purple-600'>top-tier quality</span> standards,<br/>you'll spearhead continuous <span className='text-purple-600'>improvement</span>,<br/> shape organizational success,<br/> <span className='text-purple-600'>triple your impact.</span>"
          </p>
        </div>
      </div>
      <div class='flex-col lg:flex-col lg:mt-28 mr-8 lg:max-h-full h-32 lg:max-h-screen justify-center items-end'>
        <div class='new mt-8 lg:mt-0 lg:px-4 lg:px-24 flex-col lg:max-h-full lg:w-full lg:h-auto'>
          <div class='lg:flex justify-center mt-8 lg:mt-20 lg:mt-auto'>
            <Card />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home2;



