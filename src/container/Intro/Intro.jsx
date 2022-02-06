import React, { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.css';


const Intro = () => {
  
  const [playVideo, setPlayVideo] = useState(false);  // Estado booleano de playvideo
  const vidRef = React.useRef();                      // Referencia al objeto video

  console.log(playVideo)

  const handleVideo = () => {                         
    setPlayVideo(!playVideo)      // setVideo cambia el estado al contrario
        
    if (playVideo) {              // Se evalua el estado de playVideo antes del click 
          vidRef.current.pause(); // Si el video esta corriendo y se clicko se activa la pausa
              
    } else {
          vidRef.current.play();  // Si el video estaba pausado y se clicko se activa el play
              
    }
  }

  return( 
              // h:100vh p:relative
    <div className="app__video">
    {/* w y h 100% cover */}
    <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      {/* p:absolute inset 0 bg:rgb */}
      <div className="app__video-overlay flex__center">

      {/* w y h 100px border-raidus 50% */}
        <div
          className="app__video-overlay_circle flex__center"
          onClick={ handleVideo }
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Intro;