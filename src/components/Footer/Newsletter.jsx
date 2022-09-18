import React from 'react';
import { SubHeading } from '../../components';
import './Newsletter.css';

const Newsletter = () => (
  <div className='newsLetter bg-black flex flex-col  border border-[#DCCA87] px-16 py-8'>
 <div className="newletter-header flex__center flex-col items-center">
  <SubHeading title = 'Newsletter' />
  <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
  <p className='text-gray-300 mb-2  mt-4'>And never miss latest Updates!</p>
 </div>
  <div className="Newsletter-input flex__center flex-row mt-11 mb-4">
    <input type="email" className='font-base' id="" placeholder='Email Adress' />
    <button className='custom__button w-max'>Subscribe</button>
  </div>
</div>
);

export default Newsletter;
