import react, { useState } from 'react';

import Layout from './components/Layout';
import Room from './components/Room';
import  { GameProvider } from './utils/GlobalState';
import GlobalStyles from './styles/GlobalStyles';

import Entity from './lib/Entity';

function App() {

  const [movingLeft, setMovingLeft] = useState(false);
  const [movingRight, setMovingRight] = useState(false);


  const handleKeyDown = (e) => {
    console.log(e.keyCode);
    let k = e.keyCode;

    switch(k) {
      case 68:
        setMovingRight(true);
        setMovingLeft(false);
        break;
      case 65:
        setMovingLeft(true);
        setMovingRight(false);
        break;
      default:
        break;
    }
  }

  const handleKeyUp = (e) => {
    console.log(e.keyCode);
    let k = e.keyCode;

    switch(k) {
      case 68:
        setMovingRight(false);
        break;
      case 65:
        setMovingLeft(false);
        break;
      default:
        break;
    }
  }

  return (
    <>
    <GameProvider>
      <GlobalStyles />
      <Room />
    </GameProvider>
    </>
  );
}

export default App;
