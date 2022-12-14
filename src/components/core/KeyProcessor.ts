import Phaser from 'phaser';
import MainScene from '../scene/MainScene';

const KEY_SHIFT = 16;
const WITH_SHIFT_KEYS = [
  '!',
  '"',
  '#',
  '$',
  '%',
  '&',
  "'",
  '(',
  ')',
  '=',
  '~',
  '|',
  '`',
  '{',
  '+',
  '*',
  '}',
  '<',
  '>',
  '?',
  '_',
];
const NON_SHIFT_KEYS = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '-',
  '^',
  '\\',
  '@',
  '[',
  ';',
  ':',
  ']',
  ',',
  '.',
  '/',
];

// const specialKeyToAsciiMap: { [code: string]: number[] } = {
//   '49': [33, 49], // !、1
//   '50': [34, 50], // “、2
//   '51': [35, 51], // #、3
//   '52': [36, 52], // $、4
//   '53': [37, 53], // %、5
//   '54': [38, 54], // &、6
//   '55': [39, 55], // '、7
//   '56': [40, 56], // (、8
//   '57': [41, 57], // )、9
//   '186': [42, 58], // *、:
//   '187': [43, 59], // +、;
//   '188': [60, 44], // <、,
//   '189': [61, 45], // =、-
//   '190': [62, 46], // >、.
//   '191': [63, 47], // ?、/
//   '192': [96, 64], // `、@
//   '219': [123, 91], // {、[
//   '220': [124, 92], // |、\
//   '221': [125, 93], // }、]
//   '222': [126, 94], // ~、^
//   '226': [95, 92], // _、\
// };

export type KeyListner = (key: string, pressShift: boolean) => void;

class KeyProcessor {
  private shiftPress: boolean = false;
  private listeners: KeyListner[] = [];

  constructor(private scene: MainScene) {}

  addListner(fn: KeyListner) {
    this.listeners.push(fn);
  }

  attachEvent() {
    this.scene.input.keyboard.on('keydown', (e: any) => {
      if (e.keyCode === KEY_SHIFT) {
        this.shiftPress = true;
      }

      this.listeners.forEach((lsn) => {
        if (e.keyCode !== KEY_SHIFT) lsn(e.key, this.shiftPress);
      });
    });

    this.scene.input.keyboard.on('keyup', (e: any) => {
      if (e.keyCode === KEY_SHIFT) {
        this.shiftPress = false;
      }
    });
    return this;
  }

  // downKeyCodeToAscii(downKeyCode: number, pressShift: boolean): number {
  //   let ret = downKeyCode;
  //   const asciiCodes = specialKeyToAsciiMap[downKeyCode];

  //   if (asciiCodes) {
  //     ret = pressShift ? asciiCodes[0] : asciiCodes[1];
  //   }
  //   return ret;
  // }

  getRandomKey() {
    // RND 가 무엇?.. interferInRange?..
    const keys = Phaser.Math.RND.pick([1, 2]) == 1 ? WITH_SHIFT_KEYS : NON_SHIFT_KEYS;

    return keys[Phaser.Math.RND.integerInRange(0, keys.length - 1)];
  }

  // getRandomKeyCode(): string {
  //   return String(this.getRandomKey().charCodeAt(0));
  // }
}

export default KeyProcessor;
