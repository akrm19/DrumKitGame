import React from 'react';
import Key from '../Key';
import './styles.css';
import boom from '../../assets/audio/boom.wav';
import clap from '../../assets/audio/clap.wav';
import hihat from '../../assets/audio/hihat.wav';
import kick from '../../assets/audio/kick.wav';
import openhat from '../../assets/audio/openhat.wav';
import ride from '../../assets/audio/ride.wav';
import snare from '../../assets/audio/snare.wav';
import tink from '../../assets/audio/tink.wav';
import tom from '../../assets/audio/tom.wav';

const keys = [
  {
    letter: 'A',
    keyNum: 65,
    soundName: 'Clap',
    sound: clap
  },
  {
    letter: 'S',
    keyNum: 83,
    soundName: 'HiHat',
    sound: hihat
  }
];

const Game = () => {
  return ( 
    <div className="game">
      <div>Game Title Holder</div>
      <div className="keys">
        {keys.map(k =>
          <Key key={k.keyNum} letter={k.letter} keyNum={k.keyNum} soundName={k.soundName} soundFilePath={clap} />)}
      </div>
      <div>Score Holder</div>
    </div>
   );
}
 
export default Game;