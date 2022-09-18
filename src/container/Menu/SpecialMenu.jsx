import React from 'react';
import { SubHeading } from '../../components';
import { images ,data } from '../../constants';
import {MenuItem} from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='specialMenu bg-[#0C0B08] flex__center flex-col section__padding relative'>
    <div className="flex__center flex-col mb-12">
      <SubHeading title="Menu that fits you palatte" />
      <h2 className='text-6xl font-base italic text-[#DCCA87]'>Today’s Special</h2>
    </div>
    <div className="specialMenu-content flex__center ">
      <div className="left-content flex justify-start items-start flex-1 flex-col">
        <div className="w-full">
          <h1 className='text-white text-4xl font-base text-center mb-5 font-medium'>Wine & drink</h1>
        </div>
        <p>{data.wines.map((wine,index)=>(
        <MenuItem key={wine.title + index}  title={wine.title} price={wine.price} tags={wine.tags}/>
        )
        )}</p>
      </div>
      <div className="center-content">
        <img src={images.menu} alt="" />
      </div>
      <div className="right-content flex justify-start items-start flex-1 flex-col">
      <div className="w-full">
          <h1 className='text-white text-4xl font-base text-center mb-5 font-medium'>cocktails</h1>
        </div>        <p>{data.cocktails.map((cocktail,index)=>(
        <MenuItem key={cocktail.title + index}  title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>

        ))}</p>
      </div>
    </div>
    <div className="mt-8">
      <button className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
