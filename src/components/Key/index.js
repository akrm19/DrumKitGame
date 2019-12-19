import React, { useEffect, useRef } from 'react';
import './styles.css';

const Key = (props) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if(props.playSound) {
      audioRef.current.currentTime = 0; 
    }
    audioRef.current.play();
  },[props.playSound])

  return ( 
    <div data-key={props.keyNum} className="key">
      <div className="kbd">{props.letter}</div>
      <span className="sound">{props.soundName}</span>
      <audio ref={audioRef} data-key={props.keyNum} src={props.sound}></audio>
    </div>
   );
}
 
export default Key;