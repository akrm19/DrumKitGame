import React from 'react';
import './styles.css';

const steps = [
  `Get familiar with the sounds! Press the associated keyboard key or click on the key.`,
  `Press Start Game to hear the sounds to guess`,
  `Try to guess the correct sounds and order without exceeding the number of tries.`,
  `Celebrate your awesomeness or wallow in pity of your failure.`
]

const Instructions = () => {
  return ( 
    <div className="instructions">
      <div className="instructions-title">Instructions</div>
      <ul>
        {steps.map((s, idx) => 
            <li key={idx}>
              {`${idx+1}) `} {s}
            </li>  
          )}
      </ul>
    </div>
   );
}
 
export default Instructions;