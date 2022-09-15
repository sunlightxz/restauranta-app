import React from 'react';

import './MenuItem.css';

const MenuItem = (props) => (
  <div className='app-menuitem'>
    <div className="app-menuitem-head">
      <div className="app-menuitem-name">
        <p className='p__cormorant text-[#DCCA87]'>{props.title}</p>
      </div>
      <div className="app-menuitem-dash"></div>
      <div className="">
        <p className='p__cormorant'>{props.price}</p>
      </div>
    </div>
  </div>
);

export default MenuItem;
