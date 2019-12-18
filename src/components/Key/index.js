import React from 'react';
import './styles.css';

const Key = (props) => {
  return ( 
    <div data-key={props.keyNum} className="key">
      <div className="kbd">Test{props.key}TEST</div>
      <span className="sound">{props.soundName}</span>
      <audio data-key={props.keyNum} src={props.soundFilePath}></audio>
    </div>
    // <div data-key="65" class="key">
    //   <kbd>A</kbd>
    //   <span class="sound">clap</span>
    // </div>
    //<audio data-key="76" src="sounds/tink.wav"></audio>
   );
}
 
export default Key;