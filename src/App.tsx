import { useEffect } from 'react';

import Phaser from 'phaser';

import MainScene from './components/scene/MainScene';

import './App.css';

function App() {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      parent: 'phaser-game',
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: { gravity: { y: 0 } },
      },
      scene: MainScene,
    };
    console.log(config);
    new Phaser.Game(config);
  }, [0]);
  return <div id="phaser-game" />;
}

export default App;
