import React, {useEffect, useState, useRef, useCallback} from 'react';
import Key from '../Key';
import Instructions from '../Instructions';
import GameCompletePanel from '../GameCompletedPanel';
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

const gameStates = {
  NotStarted: 'notStarted',
  InProgress: 'inProgress',
  LostGame: 'lostGame',
  WonGame: 'wonGame'
}

// Return a given number of random numbers 
//that go up to 10 as the max value
function getRandomNumOfSounds(numOfSounds, maxNumberVal = keys.length -1) {
  let randSounds = [];
  for(let i = 0; i < numOfSounds; i++) {
    //Return X number of random numbers from 0 - maxNumberVal (8)
    const randNum = Math.ceil(Math.random() * maxNumberVal)
    randSounds.push(keys[randNum]); 
  }
  return randSounds;
}

const Game = () => {
  const numOfSoundsToGuess = 3;
  const [gameStatus, setGameStatus] = useState(gameStates.NotStarted);
  const [triesLeft, setTriesLeft] = useState(5);
  const [currentGuessIdx, setCurrentGuessIdx] = useState(0);
  const [randomSounds, setRandomSounds] = useState(getRandomNumOfSounds(numOfSoundsToGuess));
  const [keysState, setKeysState] = useState(defaultKeyStatus);

  const handleGameKeyPress = useCallback((e) => {
    console.log(`handleGameKeyPress: ${e.key}`);
    if(gameStatus === gameStates.InProgress) {
      const keyNumToGuess = randomSounds[currentGuessIdx].keyNum;
      if(keyNumToGuess === e.keyCode) {
        //Guessed correctly
        console.log(`GUESSED ${keyNumToGuess} Correctly!!`);
        if(currentGuessIdx + 1 >= randomSounds.length)
          setGameStatus(gameStates.WonGame);
        else
          setCurrentGuessIdx(prev => prev + 1);
      } else {
        if(triesLeft > 1)
          setTriesLeft(prev => prev - 1);
        else
          setGameStatus(gameStates.LostGame);
      }
    }
  }, [gameStatus, currentGuessIdx, randomSounds, triesLeft]);

  useEffect(() => {
    console.log(`2nd UseEffect -- Registering!!!!!! handleGameKeyPress`);
    //TODO : See if this is being registered many times
    window.addEventListener("keydown", handleGameKeyPress);
    return () => {
      window.removeEventListener("keydown", handleGameKeyPress);
    }
  }, [handleGameKeyPress]);

  useEffect(() => {
    console.log('use effect is running!!!');
    const onKeyPressed = e => {
      //update onPress Key CSS
      setKeysState(prevKeyState => {
        if(prevKeyState.hasOwnProperty(e.key)){
          prevKeyState[e.key] = !prevKeyState[e.key];
        }
        return {...prevKeyState};
      })
    }
    window.addEventListener("keydown", onKeyPressed);
    return () => {
      window.removeEventListener("keydown", onKeyPressed);
    }
  }, []);

  const playSounds = (currentIndex) => {
    if(currentIndex < randomSounds.length) {
      let audio = new Audio(randomSounds[currentIndex].sound);
      audio.load();
      audio.onended = (e) => {
        playSounds(currentIndex + 1);
      };
      audio.play();
    }
  }

  const handleStartGameClick = (e) => {
    setGameStatus(gameStates.InProgress);
  }

  const resetGame = () => {
    console.log(`RESETTING GAME!!!!`);
  }

  return (
    <div className="game" >
      <div>Game Title Holder</div>
      <Instructions />
      <div className="audioPlayer">
        <span>Click play to hear the sounds: <button onClick={handleStartGameClick} >Start game</button> </span>
        <audio onEnded={() => playSounds(1)} controls src={randomSounds[0].sound} />
      </div>
      <div className="game-keys">
        {keys.map(k =>
          <Key key={k.keyNum} letter={k.letter} keyNum={k.keyNum} soundName={k.soundName} sound={k.sound} playSound={keysState[k.letter]} />)}
      </div>
      <div className="game-triesLeft">
        Guess the sounds. Tries Left: {triesLeft}
      </div>
      <div className="game-keys">
        {randomSounds.map((k, idx) =>
          <Key key={idx} letter={currentGuessIdx > idx || gameStatus === gameStates.WonGame ? k.letter : '?'} keyNum={k.keyNum} soundName={''} playSound={false} />)}
      </div>
      <GameCompletePanel wonGame={gameStatus === gameStates.WonGame} lostGame={gameStatus === gameStates.LostGame} restartGame={resetGame} />
    </div>
   );
}
 
export default Game;