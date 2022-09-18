import React from 'react';
import { images} from '../../constants';
import { SubHeading } from '../../components';
const FindUs = () => (
  <div className="findUs app__bg app__wrapper flex justify-between items-center section__padding ">
    <div className="app__wrapper_info">
      <SubHeading title="Contact"/>
      <h1 className='headtext__cormorant mb-12'>Find Us</h1>
      <p className='text-[#AAAAAA]'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
      <div className="py-11">
        <h4 className='text-[#DCCA87] font-base italic text-2xl'>Opening Hours</h4>
        <p className='text-white my-3'>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className='text-white'>Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button className='custom__button'>Visit Us</button>
    </div>
    <div className="app__wrapper_img">
      <img className='' src={images.findus} alt="" />
    </div>    
  </div>
);

export default FindUs;
