import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
<div className="app-footer section__padding">
  <FooterOverlay/>
  <Newsletter/>
  <div className="app-footer-content flex justify-between items-center my-16">
    <div className=" flex flex-col justify-center items-center text-[#F5EFDB]">
      <h3 className='text-3xl text-[#DDCA87] font-base mb-4'>Contact Us</h3>
      <p className='mb-2 text-[#aaaa]'>9 W 53rd St, NY 10019, Ma</p>
      <div className="phone-number">
        <p className='text-[#aaaa]'>+999 999 999 999</p>
        <p className='text-[#aaaa]'>+999 999 999 999</p>
      </div>
    </div>
    <div className="app-footer-content-info flex justify-center items-center flex-col">
      <h1 className=' text-6xl font-base text-[#DDCA87] mb-6'>GERICHT</h1>
      <p className="p__opensans w-2/3 text-center mb-1">"The best way to find yourself is to lose yourself in the service of others.”</p>
      <img className='my-2' src={images.spoon} alt="" />
      <div className="links-icons flex">
        <FiFacebook/>
        <FiInstagram/>
        <FiTwitter/>  
      </div>
    </div>
    <div className="flex justify-center items-center flex-col">
      <h3 className='text-3xl text-[#DDCA87] font-base mb-4'>Working Hours</h3>
      <p className="text-[#aaaa]">Monday-Friday:</p>
      <p className="mb-2 text-[#aaaa]">08:00 am - 12:00 am</p>
      <p className="text-[#aaaa]">Saturday-Sunday:</p>
      <p className="text-[#aaaa]">07:00 am - 11:00 pm</p>       
    </div>
  </div>
  <p className='text-[#aaaa]'>2021 Gerícht. All Rights reserved.</p>
  </div>
);

export default Footer;
