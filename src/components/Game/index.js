import React, {useEffect, useState} from 'react';
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
    letter: 'a',
    keyNum: 65,
    soundName: 'Clap',
    sound: clap,
  },
  {
    letter: 's',
    keyNum: 83,
    soundName: 'HiHat',
    sound: hihat,
  },
  {
    letter: 'd',
    keyNum: 68,
    soundName: 'Kick',
    sound: kick,
  },
  {
    letter: 'f',
    keyNum: 70,
    soundName: 'OpenHat',
    sound: openhat,
  },
  {
    letter: 'g',
    keyNum: 71,
    soundName: 'Boom',
    sound: boom,
  },
  {
    letter: 'h',
    keyNum: 72,
    soundName: 'Ride',
    sound: ride,
  },
  {
    letter: 'j',
    keyNum: 74,
    soundName: 'Snare',
    sound: snare,
  },
  {
    letter: 'k',
    keyNum: 75,
    soundName: 'Tom',
    sound: tom,
  },
  {
    letter: 'l',
    keyNum: 76,
    soundName: 'HiHat',
    sound: tink,
  }
];

const defaultKeyStatus = {
  a: false,
  s: false,
  d: false,
  f: false,
  g: false,
  h: false,
  j: false,
  k: false,
  l: false
};

const Game = () => {
  const [keyStatus, setKeyStatus] = useState(defaultKeyStatus);

  useEffect(() => {
    console.log('use effect is running!!!');
    const onKeyPressed = e => {
      setKeyStatus(prev => {
        if(prev.hasOwnProperty(e.key)){
          prev[e.key] = !prev[e.key];
        }
        return {...prev};
      })
    }
    window.addEventListener("keydown", onKeyPressed);
    return () => {
      window.removeEventListener("keydown", onKeyPressed);
    }
  }, []);

  return ( 
    <div className="game">
      <div>Game Title Holder</div>
      <div className="keys">
        {keys.map(k =>
          <Key key={k.keyNum} letter={k.letter} keyNum={k.keyNum} soundName={k.soundName} sound={k.sound} playSound={keyStatus[k.letter]} />)}
      </div>
      <div>Score Holder</div>
    </div>
   );
}
 
export default Game;