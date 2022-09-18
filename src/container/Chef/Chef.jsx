import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg flex__center section__padding ">
    <div className="chef-content flex justify-between">
      <div className="left-side flex justify-center items-center ">
        <img className='w-full' src={images.chef} alt="" />
      </div>
      <div className="right-side flex flex-col justify-center ml-5 p-12">
        <SubHeading title="Chef’s Word" />
        <h1 className='chef-title text-[#DCCA87] text-6xl font-base font-light italic'>What we believe in</h1>
         <div className="text-[#aaaa] italic text-base -tracking-wider leading-6 my-10">
          <p className='flex'><span><img className='w-9' src={images.quote} alt="" /></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
          <p>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
         </div>
         <div className="chef-name font-base tracking-wider mb-10	text-3xl ">
            <h2 className='text-[#DCCA87]'>Kevin Luo</h2>
            <p className='text-base text-[#aaaa]'>Chef & Founder</p>
         </div>
         <img className='w-52 ' src={images.sign} alt="" />
      </div>
    </div>
  </div>
);

export default Chef;
