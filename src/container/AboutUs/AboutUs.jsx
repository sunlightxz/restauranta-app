import React from 'react';
import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__bg flex__center section__padding relative">

    <div className="absolute inset-0 flex__center">
      <img className='about-g z-0' src={images.G} alt="" />
    </div>
    
    <div className="aboutus-content flex__center z-10 w-full">
      <div className="aboutus-content-info flex-1 flex justify-end items-end flex-col text-right">
        <h1 className='font-base text-[#DCCA87] text-3xl'>About Us</h1>
        <img className='text-[#DCCA87]' src={images.spoon} alt="" />
        <p className="p__opensans my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button className='custom__button'>Know More</button>
      </div>

      <div className="mx-16 my-8 aboutus-knife">
        <img src={images.knife} alt="" />
      </div>

      <div className="aboutus-content-history flex-1 flex justify-start items-start flex-col text-left">
        <h1 className='font-base text-[#DCCA87] text-3xl'>Our History</h1>
        <img className='text-[#DCCA87]' src={images.spoon} alt="" />
        <p className="p__opensans my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button className='custom__button'>Know More</button>
      </div>
    </div>
    
  </div>
);

export default AboutUs;
