import React, { useEffect, useRef, useState } from 'react';
import './styles.css';

const Key = (props) => {
  const audioRef = useRef(null);
  const firstRender = useRef(true);
  const [keyClassName, setKeyClassName] = useState(`key${props.playSound ? ' playing' : ''}`);

  useEffect(() => {
    if(firstRender.current) {
      firstRender.current = false;
      return;
    }

    if(props.playSound) {
      audioRef.current.currentTime = 0; 
    }
    audioRef.current.play();
    setKeyClassName('key playing');
  },[props.playSound])

  const transitionEnded = (e) => {
    if(e.propertyName !== 'transform') return;
    console.log(`Transition ended!`);
    console.log(e);

    setKeyClassName('key');
  }

  return ( 
    <div data-key={props.keyNum} className={keyClassName} onTransitionEnd={transitionEnded} >
      <div className="kbd">{props.letter}</div>
      <span className="sound">{props.soundName}</span>
      <audio ref={audioRef} data-key={props.keyNum} src={props.sound}></audio>
    </div>
   );
}
 
export default Key;