import Phaser from 'phaser';

import KeyProcessor from '../../core/KeyProcessor';
import ImgHolder from '../../core/ImgHolder';

class MainScene extends Phaser.Scene {
  KeyPrc: KeyProcessor;
  images: ImgHolder;

  constructor() {
    super({ key: 'mainscene' });
    this.KeyPrc = new KeyProcessor(this);
    this.images = new ImgHolder(this);
  }

  preload() {
    // this.load.setBaseURL('https://labs.phaser.io');
    this.images.load();

    this.KeyPrc.attachEvent().addListner((keyCode: number, pressShift: boolean) => {
      const asciiCode = this.KeyPrc.downKeyCodeToAscii(keyCode, pressShift);
      console.log(`${keyCode}: ${String.fromCharCode(asciiCode)}`);
    });
  }

  create() {
    this.add.image(400, 300, 'sky');
    this.add.image(400, 600, 'line');
    this.add.image(400, 550, 'senkan').setScale(0.7);

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
