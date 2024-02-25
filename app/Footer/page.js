import React from 'react';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 md:py-16">
      <div className='container mx-auto flex flex-col md:flex-row items-center'>
        <div className="text-center md:w-9/12 md:mr-8">
          <h1 className="text-purple-600 my-6 font-bold text-4xl mb-4 md:text-5xl">Ready to Get Started?</h1>
          <h2 className='text-lg md:text-xl'>"Elevate excellence — where precision meets potential, and success is standard."</h2>
          <button className="bg-white my-8 h-10 w-40 text-purple-600 font-bold py-2 px-4 rounded md:w-auto md:py-3 md:px-6">Contact Us</button>
        </div>
        <div className='md:w-3/12 mt-8 md:mt-0'>
          <div className='flex flex-col text-center justify-center text-color-white'>
            <Link href="/" className='my-2 text-1xl'>Navigation
            </Link>
            <Link href="/" className='my-2 text-1xl'>NABL Consultancy
            </Link>
            <Link href="/" className='my-2 text-1xl'>Courses
            </Link>
            <Link href="/" className='my-2 text-1xl'>About Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
