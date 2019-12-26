import React, { useEffect, useRef, useState, useCallback } from 'react';
import './styles.css';

const Key = (props) => {
  const audioRef = useRef(null);
  const firstRender = useRef(true);
  const [keyClassName, setKeyClassName] = useState(`key${props.playSound ? ' playing' : ''}`);

  const playSoundWithEffects = useCallback(() => {
    if(props.playSound) {
      audioRef.current.currentTime = 0; 
    }
    audioRef.current.play();
    setKeyClassName('key playing');
  }, [props.playSound])

  useEffect(() => {
    if(firstRender.current) {
      firstRender.current = false;
      return;
    }
    playSoundWithEffects();
  },[props.playSound, playSoundWithEffects])

  const transitionEnded = (e) => {
    if(e.propertyName !== 'transform') 
      return;
      
    setKeyClassName('key');
  }

  const keyClicked = () => {
    playSoundWithEffects();
    props.onKeyClicked(props.keyNum);
  }

  return ( 
    <div onClick={keyClicked} data-key={props.keyNum} className={keyClassName} onTransitionEnd={transitionEnded} >
      <div className="key-letter">{props.letter}</div>
      <span className="key-soundname">{props.soundName}</span>
      <audio ref={audioRef} data-key={props.keyNum} src={props.sound}></audio>
    </div>
   );
}
 
export default Key;