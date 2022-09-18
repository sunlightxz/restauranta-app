import React from 'react';
import { images ,data } from '../../constants';
import { SubHeading } from '../../components';
import './Laurels.css';

const Laurels = () => (
<div className="app_laurel app__bg flex justify-between items-center section__padding ">
  
  <div className="laurel-left-side w-full">
    <div className="">
      <img className='w-28' src={images.logo} alt="" />
    </div>
    <div className="laurel-content py-8 w-full">
      <SubHeading title="Awards & recognition"/>
      <h1 className='text-[#DCCA87] laurel-title text-6xl font-base italic'>Our Lourels</h1>
      <p className='award-map'>{data.awards.map((award,index)=>(
        <div className="app__award">
          <img src={award.imgUrl} alt="" />
          <div className="flex flex-col ml-8">
            <p className="text-[#DCCA87]" >{award.title}</p>
            <p className=" text-gray-400">{award.subtitle}</p>
          </div>
        </div>
  )
          )}
      </p>
    </div>
  </div>
  <div className="laurel-right-side h-full"> 
      <img className=''  src={images.laurels} alt="" />
  </div>
</div>
);

export default Laurels;
