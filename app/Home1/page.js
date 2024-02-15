import React from 'react'
import './Home1.css'
import Navbar from '../../Navbar/page';
import Constant from '../Constant/page';
const page = () => {
  return (
    <>
     <Navbar/>
     <body className="w-[1523.50px] h-[917.30px] relative bg-white">
        <div className='back w-[1523.50px] h-[917.30px] opacity-50 absolute'>
        <Constant/>
        </div>
        </body>

     

    </>
  )
}

export default page
