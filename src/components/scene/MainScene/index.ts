import Phaser from 'phaser';

import KeyProcessor from '../../core/KeyProcessor';

class MainScene extends Phaser.Scene {
  KeyPrc: KeyProcessor;

  constructor() {
    super({ key: 'myscene' });
    this.KeyPrc = new KeyProcessor(this);
  }

  preload() {
    this.load.setBaseURL('https://labs.phaser.io');

    this.load.image('sky', 'assets/space3.png');
    this.load.image('logo', 'assets/phaser-logo.png');
    this.load.image('red', 'assets/red.png');

    this.KeyPrc.attachEvent().addListner((keyCode: number, pressShift: boolean) => {
      console.log(`${keyCode} shift=${pressShift}`);
    });
  }

  create() {
    this.add.image(400, 300, 'sky');

    const particles = this.add.particles('red');

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD',
    });

    const logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
  }
}

export default MainScene;
