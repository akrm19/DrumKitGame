import React from 'react';
import './styles.css';

const GameCompletePanel = (props) => {
  return ( 
    <>
    {props.wonGame &&
      <div className="gameCompletePanel wonGame">
        You won the game!! 
      </div>
    }
    {props.lostGame &&
      <div className="gameCompletePanel lostGame"> 
        Sorry you lost!!!
      </div>
    }
    </>
   );
}
 
export default GameCompletePanel;