import React from 'react';
import './styles.css';

const Instructions = () => {
  return ( 
    <div className="instructions">
      <div className="instructions-title">Instructions</div>
      <ul>
        <li>
          Get familiar with the sounds! Press the associated key or click on the key 
        </li>
        <li>
          Press play to hear the sounds.
        </li>
        <li>
          Try to guess the correct sounds and order wihtout exceeding the number of tries.
        </li>
        <li>
          Celebrate your awesomeness or gallow in pity of your failure.
        </li>
      </ul>
    </div>
   );
}
 
export default Instructions;