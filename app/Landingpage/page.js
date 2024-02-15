import Link from 'next/link';
import Navbar from '../Navbar/page';
import Home2 from '../Home2/page';
import Home3 from '../Home3/page';
import Home4 from '../Home4/page';
import Home5 from '../Home5/page';
import Home6 from '../Home6/page';
import React from 'react';
import './Landingpage.css'
import Image from 'next/image';
import sense from '../../public/Ellipse13.png';
import { useRouter } from 'next/navigation'


const LandingPage = () => {
  return (
    <>
    
      <div className='relative'>
        <div className="circle">
          <div className="semiellipse border-gradient border-gradient-purple"></div>
        </div>
        <Navbar />

        <div className="ellipse rounded-full blur-[37px]"></div>

        <div className="constant mt-12 z-[-10]">
          <div className="relative text-center mt-9 z-[20]">
            <h1 className="content text-7xl font-bold leading-none overflow-none bg-clip-text mt-1 ml-4 z-[20]">
              <span className="mt-1 ml-12 z-[20]">Become a quality manager and <br /> triple your earning potential</span>
            </h1>
          </div>
        </div>

        <div className="nomtext absolute opacity-100 mt-6">
          <div className="text-center ml-5 mt-24">
            <span className="flex items-center justify-center text-center mt-24 ml-1">
              <p className="text-black font-bold text-xl ml-96 text-center">
                Elevate excellence — where precision meets potential, and success is standard.
              </p>
            </span>
          </div>
        </div>

        <div className="click ml-32">
          <div className='absolute ml-4 mt-20 text-2xl'>
            <div className='enroll ml-64 mt-24'>
              <span className="font-medium text-center text-gray-500 ml-96">
                <p className='ml-96'>
                  Enroll now <span className='text-purple-700'>@5999/-</span> only
                </p>
              </span>
            </div>
          </div>
          <button className="neon absolute mt-48 bg-white border-2 border-purple-500 text-purple-500 h-16 w-60 rounded-full ml-96 text-2xl font-bold no-underline transition-all duration-400 ease-in-out">
            Get Started
          </button>
        </div>

        <div className='absolute z-[-50] mt-56 ml-40'>
          <svg id='svg2' xmlns="http://www.w3.org/2000/svg" width="1242" height="399" viewBox="0 3 1220 378" fill="none">
            <g filter="url(#filter0_f_89_293)">
              <path d="M26 26C26 108.415 69.4701 202.708 183.353 260.985C297.236 319.261 451.694 352 612.749 352C773.804 352 928.262 319.261 1042.15 260.985C1156.03 202.708 1203 108.415 1203 26L612.749 41.254L26 26Z" fill="url(#paint0_linear_89_293)" />
            </g>
            <defs>
              <filter id="filter0_f_89_293" x="0" y="0" width="1229" height="378" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="13" result="effect1_foregroundBlur_89_293" />
              </filter>
              <linearGradient id="paint0_linear_89_293" x1="592.241" y1="-29.3502" x2="592.241" y2="352" gradientUnits="userSpaceOnUse">
                <stop stop-color="#03001E" />
                <stop offset="0.333333" stop-color="#7303C0" />
                <stop offset="0.666667" stop-color="#EC38BC" />
                <stop offset="1" stop-color="#FDEFF9" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className='semicircle mx-48 my-56'>
          {[].map((index) => (
            <div key={index} className={`relate${index} z-[-30] absolute`}>
              <div className={`h-[250px] w-[165px] border-4 overflow-hidden absolute z-[-30]`}>
                <div className="nop absolute inset-0 opacity-80 absolute z-negative-40"></div>
              </div>
            </div>
          ))}

          <div className="box">
            <div className="absolute newbox z-[-20] mb-20">
              
             
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default LandingPage;











// <svg 
//  width="1177" height="374" viewBox="0 0 1177 374" fill="none" xmlns="http://www.w3.org/2000/svg" box-shadow="0 0 50px 15px rgba(0, 0, 0, 0.3)">
// <path  d="M0.5 0C0.5 94.5497 43.9515 202.727 157.786 269.584C271.621 336.44 426.014 374 587 374C747.986 374 902.379 336.44 1016.21 269.584C1190.05 202.727 1177 94.5497 1177 0L587 17.5L0.5 0Z" fill="url(#paint0_linear_89_294)"/>
// <defs>
// <div className="bg-c w-[165px] h-[403px] bg-gradient-to-b from-purple-900 to-zinc-900 border-4 border-black border-opacity-70" />
// <linearGradient id="paint0_linear_89_294" x1="573.5" y1="32.5" x2="566.5" y2="374" gradientUnits="userSpaceOnUse">
// <stop  stop-color="#04001E"/>
// <stop  offset="0.333333" stop-color="#7903C0"/>
// <stop offset="0.666667" stop-color="#EC38BC"/>
// <stop offset="1" stop-color="#FDEFF9"/>
// </linearGradient>
// </defs>
// </svg> 
// </div> 
// border-gradient-to-b from-back-900
// border-4 border-solid
// border-opacity-47
// via-transparent
// bg-gradient-to-b from-black-550 to-white-900
{/* <div class="h-[383px] w-[165px] flex-shrink-0 bg-gradient-to-b from-purple-900 to-white-900 relative">
</div> */}
// bg-gradient-to-r from-purple-900 to-blue-900 text-transparent bg-clip-text
