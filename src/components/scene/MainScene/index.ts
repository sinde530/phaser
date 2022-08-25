import Phaser from 'phaser';

import KeyProcessor from '../../core/KeyProcessor';
import ImgHolder from '../../core/ImgHolder';
import Bullet from '../../core/Bullet';

class MainScene extends Phaser.Scene {
  KeyPrc: KeyProcessor;
  images: ImgHolder;
  walls?: Phaser.Physics.Arcade.StaticGroup;
  chrGroup?: Phaser.Physics.Arcade.Group;
  bullets?: Phaser.Physics.Arcade.Group;
  senkan?: Phaser.Physics.Arcade.Image;

  constructor() {
    super({ key: 'mainscene' });
    this.KeyPrc = new KeyProcessor(this);
    this.images = new ImgHolder(this);
  }

  preload() {
    // this.load.setBaseURL('https://labs.phaser.io');
    this.images.load();
    this.walls = this.physics.add.staticGroup();
    this.chrGroup = this.physics.add.group();
    this.bullets = this.physics.add.group({ classType: Bullet, runChildUpdate: true });

    this.KeyPrc.attachEvent().addListner((keyCode: number, pressShift: boolean) => {
      this.chrGroup?.children.iterate((enemy) => {
        if (this.isTarget(enemy, keyCode, pressShift)) {
          const bullet = this.bullets?.get().setActive(true).setVisible(true);

          if (bullet) {
            bullet.fire(this.senkan, enemy);
          }
        }
      });
    });
  }

  create() {
    this.add.image(400, 300, 'sky');
    this.add.image(400, 600, 'line');
    this.senkan = this.physics.add.image(400, 550, 'senkan').setScale(0.7);

    this.walls!.create(-15, 300, 'wall');
    this.walls!.create(815, 300, 'wall');

    while (this.chrGroup!.countActive(true) < 4) {
      this.createEnemy();
    }
    this.physics.add.collider(this.chrGroup!, this.walls!);
  }

  createEnemy() {
    const code = this.KeyPrc.getRandomKeyCode();
    const enemy = this.chrGroup!.create(Phaser.Math.Between(0, 800), -18, code).setScale(0.3);

    enemy.setName(code);
    enemy.setBounce(1);
    enemy.setCollideWorldBounds(false, 1, 0);
    enemy.setVelocity(Phaser.Math.Between(-80, 80), 25);
    enemy.allowGravity = false;
  }

  isTarget(enemy: Phaser.GameObjects.GameObject, keyCode: number, pressShift: boolean) {
    return parseInt(enemy.name) === this.KeyPrc.downKeyCodeToAscii(keyCode, pressShift);
  }
}

export default MainScene;
