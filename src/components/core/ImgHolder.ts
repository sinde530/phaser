import MainScene from '../scene/MainScene';

import imgSky from '../../../../assets/sky.png';
import imgLine from '../../../../assets/line.png';
import imgLogo from '../../../../assets/phaser-logo.png';
import imgRed from '../../../../assets/red.png';
import imgSenkan from '../../../../assets/war_senkan_man.png';

import chr33 from '../../../../assets/char/33.png';
import chr34 from '../../../../assets/char/34.png';
import chr35 from '../../../../assets/char/35.png';
import chr36 from '../../../../assets/char/36.png';
import chr37 from '../../../../assets/char/37.png';
import chr38 from '../../../../assets/char/38.png';
import chr39 from '../../../../assets/char/39.png';
import chr40 from '../../../../assets/char/40.png';
import chr41 from '../../../../assets/char/41.png';
import chr42 from '../../../../assets/char/42.png';
import chr43 from '../../../../assets/char/43.png';
import chr44 from '../../../../assets/char/44.png';
import chr45 from '../../../../assets/char/45.png';
import chr46 from '../../../../assets/char/46.png';
import chr47 from '../../../../assets/char/47.png';
import chr48 from '../../../../assets/char/48.png';
import chr49 from '../../../../assets/char/49.png';
import chr50 from '../../../../assets/char/50.png';
import chr51 from '../../../../assets/char/51.png';
import chr52 from '../../../../assets/char/52.png';
import chr53 from '../../../../assets/char/53.png';
import chr54 from '../../../../assets/char/54.png';
import chr55 from '../../../../assets/char/55.png';
import chr56 from '../../../../assets/char/56.png';
import chr57 from '../../../../assets/char/57.png';
import chr58 from '../../../../assets/char/58.png';
import chr59 from '../../../../assets/char/59.png';
import chr60 from '../../../../assets/char/60.png';
import chr61 from '../../../../assets/char/61.png';
import chr62 from '../../../../assets/char/62.png';
import chr63 from '../../../../assets/char/63.png';
import chr64 from '../../../../assets/char/64.png';
import chr65 from '../../../../assets/char/65.png';
import chr66 from '../../../../assets/char/66.png';
import chr67 from '../../../../assets/char/67.png';
import chr68 from '../../../../assets/char/68.png';
import chr69 from '../../../../assets/char/69.png';
import chr70 from '../../../../assets/char/70.png';
import chr71 from '../../../../assets/char/71.png';
import chr72 from '../../../../assets/char/72.png';
import chr73 from '../../../../assets/char/73.png';
import chr74 from '../../../../assets/char/74.png';
import chr75 from '../../../../assets/char/75.png';
import chr76 from '../../../../assets/char/76.png';
import chr77 from '../../../../assets/char/77.png';
import chr78 from '../../../../assets/char/78.png';
import chr79 from '../../../../assets/char/79.png';
import chr80 from '../../../../assets/char/80.png';
import chr81 from '../../../../assets/char/81.png';
import chr82 from '../../../../assets/char/82.png';
import chr83 from '../../../../assets/char/83.png';
import chr84 from '../../../../assets/char/84.png';
import chr85 from '../../../../assets/char/85.png';
import chr86 from '../../../../assets/char/86.png';
import chr87 from '../../../../assets/char/87.png';
import chr88 from '../../../../assets/char/88.png';
import chr89 from '../../../../assets/char/89.png';
import chr90 from '../../../../assets/char/90.png';
import chr91 from '../../../../assets/char/91.png';
import chr92 from '../../../../assets/char/92.png';
import chr93 from '../../../../assets/char/93.png';
import chr94 from '../../../../assets/char/94.png';
import chr95 from '../../../../assets/char/95.png';
import chr96 from '../../../../assets/char/96.png';
import chr97 from '../../../../assets/char/97.png';
import chr98 from '../../../../assets/char/98.png';
import chr99 from '../../../../assets/char/99.png';

import chr100 from '../../../../assets/char/100.png';
import chr101 from '../../../../assets/char/101.png';
import chr102 from '../../../../assets/char/102.png';
import chr103 from '../../../../assets/char/103.png';
import chr104 from '../../../../assets/char/104.png';
import chr105 from '../../../../assets/char/105.png';
import chr106 from '../../../../assets/char/106.png';
import chr107 from '../../../../assets/char/107.png';
import chr108 from '../../../../assets/char/108.png';
import chr109 from '../../../../assets/char/109.png';
import chr110 from '../../../../assets/char/110.png';
import chr111 from '../../../../assets/char/111.png';
import chr112 from '../../../../assets/char/112.png';
import chr113 from '../../../../assets/char/113.png';
import chr114 from '../../../../assets/char/114.png';
import chr115 from '../../../../assets/char/115.png';
import chr116 from '../../../../assets/char/116.png';
import chr117 from '../../../../assets/char/117.png';
import chr118 from '../../../../assets/char/118.png';
import chr119 from '../../../../assets/char/119.png';
import chr120 from '../../../../assets/char/120.png';
import chr121 from '../../../../assets/char/121.png';
import chr122 from '../../../../assets/char/122.png';
import chr123 from '../../../../assets/char/123.png';
import chr124 from '../../../../assets/char/124.png';
import chr125 from '../../../../assets/char/125.png';
import chr126 from '../../../../assets/char/126.png';

// 126까지있음...

class ImgHolder {
  images: { [key: string]: string };

  constructor(private scene: MainScene) {
    this.images = {
      sky: imgSky,
      logo: imgLogo,
      red: imgRed,
      line: imgLine,
      senkan: imgSenkan,
    };
  }
}
