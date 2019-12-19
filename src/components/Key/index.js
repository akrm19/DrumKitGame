import React, { useEffect, useState, useRef } from 'react';
import './styles.css';

const Key = (props) => {
  const [keyPressed, setKeyPressed] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    console.log('use effect is running');
    window.addEventListener("keydown", onKeyPressed);
    return () => {
      window.removeEventListener("keydown", onKeyPressed);
    }
  }, [props.letter])

  const onKeyPressed = e => {
    console.log(props.sound);
    console.log(e);
    playSound();
  }

  const playSound = e => {
    audioRef.current.play();
  }

  return ( 
    <div data-key={props.keyNum} className="key">
      <div className="kbd">{props.letter}</div>
      <span className="sound">{props.soundName}</span>
      <audio ref={audioRef} data-key={props.keyNum} src={props.sound}></audio>
    </div>
   );
}
 
export default Key;