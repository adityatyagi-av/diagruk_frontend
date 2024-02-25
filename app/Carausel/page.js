'use client'
import React from 'react';
import Image from 'next/image'; 
import sense from '../../public/image1.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const informationArray = [
  {
    name: "Basics of NABL",
    get: "Get to know the basics",
    image: sense, 
    readMore: "Read more",
  },
  {
    name: "Basics of NABL",
    get: "Get to know the basics",
    image: sense, 
    readMore: "Read more",
  },
  {
    name: "Basics of NABL",
    get: "Get to know the basics",
    image: sense, 
    readMore: "Read more",
  },
  // Add more objects as needed
];

const Carausel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <>
      <div className='w-full lg:grid lg:grid-rows-1'>
        <div className='mt-20'>
        <Slider {...settings}>
          <div className='flex flex-cols'>
            {informationArray.map((item, index) => (
              <div key={index}>
                <Image src={item.image} alt={item.name} width={100} height={100} />
                <h2>{item.name}</h2>
                <a href={item.readMore}>{item.readMore}</a> 
              </div>
            ))}
          </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Carausel;