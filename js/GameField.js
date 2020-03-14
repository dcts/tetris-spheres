class GameField {
  /*
   * Matrix represents game state
   * . = empty
   * @ = block (can be moved by player)
   * # = wall (manifestated block)
   */

  constructor(blocksX, blocksY, blocksize, assets) {
    this.blocksX = blocksX;
    this.blocksY = blocksY;
    this.blocksize = blocksize;
    this.matrix = constructMatrix(blocksX, blocksY);
    this.matrix = DEMO_MATRIX;
    this.assets = assets;
  }

  displayStr() {
    console.log(this.matrixToString());
  }

  matrixToString() {
    let str = "";
    this.matrix.forEach(row => {
      row.forEach(cell => {
        str += cell;
      });
      str += "\n";
    });
    return str;
  }

  drawField(currentBlock) {
    this.drawWall();
    this.drawBlock(currentBlock);
    // HARDCODED DEMO (simulate ghost)
    image(this.assets.el4, 180, 540, 90, 60);
  }

  drawWall() {
    this.matrix.forEach((row, rIndx) => {
      row.forEach((cell, cIndx) => {
        if (cell === "x") {
          image(this.assets.square, cIndx*this.blocksize, rIndx*this.blocksize, blocksize, blocksize);
        }
      });
    })
  }

  drawBlock(block) {
    const xoffset = block.x;
    const yoffset = block.y;
    block.matrix.forEach((row, rIndx) => {
      row.forEach((cell, cIndx) => {
        if (cell === "@") {
          image(this.assets.square, (cIndx+xoffset)*this.blocksize, (rIndx+yoffset)*this.blocksize, blocksize, blocksize);
        }
      });
    })
  }
}

function constructMatrix(blocksX, blocksY) {
  return new Array(blocksY).fill(new Array(blocksX).fill("."));
}

/*
 * FOR DEMO PURPOSE ONLY
 */
const DEMO_MATRIX = [];
DEMO_MATRIX.push('..........'.split(''));
DEMO_MATRIX.push('..........'.split(''));
DEMO_MATRIX.push('..........'.split(''));
DEMO_MATRIX.push('..........'.split(''));
DEMO_MATRIX.push('..........'.split(''));
DEMO_MATRIX.push('..........'.split(''));
DEMO_MATRIX.push('..........'.split(''));
DEMO_MATRIX.push('..........'.split(''));
DEMO_MATRIX.push('..........'.split(''));
DEMO_MATRIX.push('..........'.split(''));
DEMO_MATRIX.push('..........'.split(''));
DEMO_MATRIX.push('..........'.split(''));
DEMO_MATRIX.push('..........'.split(''));
DEMO_MATRIX.push('..........'.split(''));
DEMO_MATRIX.push('..........'.split(''));
DEMO_MATRIX.push('..........'.split(''));
DEMO_MATRIX.push('.xx.......'.split(''));
DEMO_MATRIX.push('..x.......'.split(''));
DEMO_MATRIX.push('..x.x.....'.split(''));
DEMO_MATRIX.push('xxx.x..xxx'.split(''));
DEMO_MATRIX.push('xxxxx.xxxx'.split(''));
DEMO_MATRIX.push('.xxxxxxxxx'.split(''));
