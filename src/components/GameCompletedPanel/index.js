import React from 'react';
import './styles.css';
import DuckHunt from '../../assets/gifs/giphy.gif';
import Celebrate from '../../assets/gifs/celebrate.gif';

const GameCompletePanel = (props) => {
  return ( 
    <div>
    {props.wonGame &&
      <div className="gameCompletePanel wonGame">
        <div>You won the game!</div>
        <br /> 
        <img src={Celebrate} alt="Will Ferrell Celebrating" />
        <br />
        <button className="game-button" onClick={props.restartGame} >Keep Crushing It!</button>
      </div>
    }
    {props.lostGame &&
      <div className="gameCompletePanel lostGame"> 
        <div>Sorry you lost!</div>
        <br /> 
        <img src={DuckHunt} alt="DuckHunt Dog" />
        <br />
        <button className="game-button" onClick={props.restartGame} >Try Again</button>
      </div>
    }
    </div>
   );
}
 
export default GameCompletePanel;