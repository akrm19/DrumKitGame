import React from 'react';
import Game from './components/Game';
import Header from './components/Header';
import Footer from './components/Footer';
import './MyApp.css';

const MyApp = () => {
  return ( 
    <div className="app">
      <header>
        <Header />
      </header>
      <div className="content" >
        <Game />
      </div>
      <footer>
        <Footer/>
      </footer> 
    </div>
  );
}
  
export default MyApp;