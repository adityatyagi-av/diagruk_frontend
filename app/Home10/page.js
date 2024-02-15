import Link from 'next/link';
import Navbar from '../Navbar/page';
import Home2 from '../Home2/page';
import Home3 from '../Home3/page';
import Home4 from '../Home4/page';
import Home5 from '../Home5/page';
import Home6 from '../Home6/page';
import React from 'react';

import Image from 'next/image';
import sense from '../../public/Ellipse13.png';
import { useRouter } from 'next/navigation'
import Herofigure from '../Herofigure/page';


const Home10 = () => {
  return (
    <>
    <div className='flex flex-col h-[100vh]'>
        <Navbar/>
        <Herofigure className='absolute h-[100dvh] mt-36'/>
    </div>  
    </>
  );
};

export default Home10;











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
