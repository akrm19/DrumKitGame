import React from 'react';
import './styles.css';

const GameCompletePanel = (props) => {
  return ( 
    <div>
    {props.wonGame &&
      <div className="gameCompletePanel wonGame">
        <div>You won the game!</div>
        <br /> <br />
        <button className="game-button" onClick={props.restartGame} >Keep Crushing It!</button>
      </div>
    }
    {props.lostGame &&
      <div className="gameCompletePanel lostGame"> 
        <div>Sorry you lost!</div>
        <br /> <br />
        <button className="game-button" onClick={props.restartGame} >Try Again</button>
      </div>
    }
    </div>
   );
}
 
export default GameCompletePanel;