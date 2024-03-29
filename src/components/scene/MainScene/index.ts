import Phaser from 'phaser';

import KeyProcessor from '../../core/KeyProcessor';
import ImgHolder from '../../core/ImgHolder';
import Bullet from '../../core/Bullet';

interface GameStatus {
  score: number;
  speed: number;
  maxEnemy: number;
  gameOver: boolean;
}

class MainScene extends Phaser.Scene {
  KeyPrc: KeyProcessor;
  images?: ImgHolder;
  walls?: Phaser.Physics.Arcade.StaticGroup;
  bullets?: Phaser.Physics.Arcade.Group;
  chrs?: Phaser.Physics.Arcade.Group;
  senkan?: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  line?: Phaser.Physics.Arcade.Image;
  st?: GameStatus;
  labelScore?: Phaser.GameObjects.Text;

  constructor() {
    super({ key: 'mainscene' });
    this.KeyPrc = new KeyProcessor(this);
  }

  initStatus(): GameStatus {
    return {
      score: 0,
      speed: 20,
      maxEnemy: 1,
      gameOver: false,
    };
  }

  init(data: any) {
    this.st = this.initStatus();
    this.images = data.images;
    this.st!.speed = data.speed;
  }

  preload() {
    // this.load.setBaseURL('https://labs.phaser.io');
    this.images!.loadMain(this);
    this.walls = this.physics.add.staticGroup();
    this.chrs = this.physics.add.group();
    this.bullets = this.physics.add.group({ classType: Bullet, runChildUpdate: true });

    this.KeyPrc.attachEvent().addListner((key: string, pressShift: boolean) => {
      this.chrs?.children.iterate((enemy) => {
        if (this.isTarget(enemy.name, key)) {
          const bullet = this.bullets?.get().setActive(true).setVisible(true);

          if (bullet) {
            bullet.fire(this.senkan, enemy);
            this.physics.add.overlap(enemy, bullet, (enemy: any, bullet: any) => {
              if (enemy.active === true && bullet.active === true) {
                enemy.destroy();
                this.st!.score += 10;
                this.st!.maxEnemy = Math.floor(this.st!.score / 100) + 1;
                this.labelScore!.setText(`Score: ${this.st!.score}`);
              }
            });
          }
        }
      });
    });
  }

  create() {
    this.add.image(400, 300, 'sky');
    this.line = this.physics.add.image(400, 600, 'line');
    this.senkan = this.physics.add.sprite(400, 550, 'senkan').setScale(0.7);

    this.walls!.create(-15, 300, 'wall');
    this.walls!.create(815, 300, 'wall');

    this.labelScore = this.add.text(16, 560, `Score: 0`, {
      fontSize: '15px',
      color: '#022',
      fontStyle: 'bold',
      fontFamily: 'Roboto',
    });

    this.physics.add.collider(this.chrs!, this.walls!);
    this.physics.add.overlap(this.chrs!, this.line!, () => {
      this.gameover();
    });
    this.anims.create({
      key: 'senkan_death',
      frames: this.anims.generateFrameNumbers('senkan', { start: 0, end: 6 }),
      frameRate: 15,
    });
  }

  gameover() {
    this.senkan?.anims.play('senkan_death');
    this.st!.gameOver = true;
    this.time.delayedCall(1000, () => {
      this.add.image(400, 300, 'gameover');
      this.add
        .text(385, 285, String(this.st!.score), {
          fontSize: '30px',
          fontStyle: 'bold',
          color: '#547EFF',
          fontFamily: 'Roboto',
        })
        .setOrigin(0);
      this.add
        .image(300, 400, 'button_retry')
        .setInteractive()
        .once('pointerup', () => {
          this.scene.restart();
        });
      this.add
        .image(520, 400, 'button_title')
        .setInteractive()
        .once('pointerup', () => {
          this.scene.start('titlescene');
        });
    });
    this.physics.pause();
  }

  createEnemy() {
    const key = this.KeyPrc.getRandomKey();
    const enemy = this.chrs!.create(
      Phaser.Math.Between(30, 770),
      -13,
      String(key.charCodeAt(0))
    ).setScale(0.3);

    enemy.allowGravity = false;
    enemy
      .setName(key)
      .setBounce(1)
      .setCollideWorldBounds(false, 1, 0)
      .setVelocity(Phaser.Math.Between(10, 80), this.st!.speed);
    enemy.setVisible(true).setActive(true);
  }

  isTarget(name: string, key: string) {
    if (name === '\\') {
      if (!window.navigator.userAgent.includes('Win')) {
        return '¥' === key;
      }
    }
    return name === key;
  }

  update() {
    if (this.st!.gameOver) {
      return;
    }
    while (this.chrs!.countActive(true) < this.st!.maxEnemy) {
      this.createEnemy();
    }
  }
}

export default MainScene;
