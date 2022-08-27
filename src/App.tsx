import { useEffect } from 'react';

import Phaser from 'phaser';

import MainScene from './components/scene/MainScene';

import './App.css';
import TitleScene from './components/scene/TitleScene';
import ImgHolder from './components/core/ImgHolder';

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
      scene: [TitleScene, MainScene],
    };
    const game = new Phaser.Game(config);
    game.scene.start('titlescene', { images: new ImgHolder() });
    // console.log(images);
    console.log(game);
  }, [0]);
  return <div id="phaser-game" />;
}

export default App;
