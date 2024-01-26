import React from 'react'
import HeroSectionConstant from './Components/Home/herosection1'
import NablSection from './Components/Home/NABL'
import WhyUs from './Components/Home/Whyus'
import Landingpage from './Components/Home/HeroSection'



const page = () => {
  return (
    <div>
      <Landingpage/>
     <HeroSectionConstant/>
     <NablSection/>
     <WhyUs/>
    </div>
  )
}

export default page
