import React from 'react';
import Game from './components/Game';
import Header from './components/Header';
import Footer from './components/Footer';
import './MyApp.css';

const MyApp = () => {
  return ( 
    <>
    <header>
      <Header></Header>
    </header>
    <body>
      <Game />
    </body>
    <footer>
      <Footer/>
    </footer>
    </>
  );
}
  
export default MyApp;