import React from 'react';
import { images } from '../../constants';

const SubHeading = (props) => (
  <div className="mb-4">
    <p className='text-white text-xl font-base italic mb-1'>{props.title}</p>
    <img className="spoon__img" src={images.spoon} alt="" />
  </div>
);

export default SubHeading;
