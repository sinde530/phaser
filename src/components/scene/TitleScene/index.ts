import Phaser from 'phaser';

import ImgHolder from '../../core/ImgHolder';

class TitleScene extends Phaser.Scene {
  images?: ImgHolder;

  constructor() {
    super({ key: 'titlescene' });
  }

  init(data: any) {
    this.images = data.images;
    console.log(data.images);
  }

  preload() {
    this.images!.loadTitle(this);
  }

  create() {
    this.add.image(400, 300, 'sky');
    this.add.image(400, 600, 'line');
    this.add.image(400, 300, 'title');

    const startButton = this.add.image(400, 500, 'start').setInteractive();
    // once
    startButton.once('pointerup', () => {
      this.scene.start('mainscene');
    });
  }
}

export default TitleScene;
