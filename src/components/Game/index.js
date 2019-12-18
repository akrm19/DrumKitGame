import React from 'react';
import Key from '../Key';
import './styles.css';

const keys = [
  {
    key: 'A',
    keyNum: 65,
    soundName: 'Clap',
    soundFilePath: '../../public/audio/clap.wav'
  },
  {
    key: 'S',
    keyNum: 83,
    soundName: 'HiHat',
    soundFilePath: '../../public/audio/hihat.wav'
  }
];

const Game = () => {
  return ( 
    <div className="game">
      {keys.map(k =>
        <Key id={k.key} key={k.key} keyNum={k.keyNum} soundName={k.soundName} soundFilePath={k.soundFilePath} />)}
    </div>
   );
}
 
export default Game;