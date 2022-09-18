import React, {useRef, useState} from 'react';
import {BsPlayFill,BsPauseFill} from 'react-icons/bs'
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo,setPlayVideo] =useState(false);
  const videRef = useRef();
  const handleVideo = ()=> {
    setPlayVideo((element)=>!element);

    if(playVideo){
      videRef.current.pause();
    }
    else {
      videRef.current.play();
    }
  }
  return(
    <div className="app_vid">
      <video 
        src={meal}
        type= "video/mp4"
        ref={videRef}
        controls={false}
        loop
        muted
      />
      <div className="app-vid-overlay flex__center">
        <div className="app-vid-overlay-circle flex__center" onClick={handleVideo}>
          {playVideo ?  <BsPauseFill color='#fff' fontSize={30}/> : <BsPlayFill color='#fff' fontSize={30}/> }
        </div>
      </div>
    </div>
  )
}
export default Intro;
