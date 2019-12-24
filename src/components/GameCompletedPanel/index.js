import React from 'react';
import './styles.css';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import RefreshIcon from '@material-ui/icons/Refresh';

// const useStyles = makeStyles(theme => ({
//   button: {
//     margin: theme.spacing(1)
//   }
// }) );

const GameCompletePanel = (props) => {
  //const classes =  useStyles();
  return ( 
    <div>
    {props.wonGame &&
      <div className="gameCompletePanel wonGame">
        <div>You won the game!! </div>
        <Button variant="contained" startIcon={<RefreshIcon />} onClick={props.restartGame} >
          Restart Game
        </Button>
      </div>
    }
    {props.lostGame &&
      <div className="gameCompletePanel lostGame"> 
        <div>Sorry you lost!!! </div>
        <Button variant="contained" startIcon={<RefreshIcon />} onClick={props.restartGame} >
          Restart Game
        </Button>
      </div>
    }
    </div>
   );
}
 
export default GameCompletePanel;