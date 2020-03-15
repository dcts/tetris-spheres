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
    this.matrix = EMPTY_MATRIX;
    this.assets = assets;
  }

  display() {
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
    this.drawGhost(currentBlock.ghost(gamefield));
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
    this.drawBlockGeneral(block, this.assets.square);
  }

  drawGhost(block) {
    this.drawBlockGeneral(block, this.assets.ghost);
  }

  drawBlockGeneral(block, asset) {
    const xoffset = block.x;
    const yoffset = block.y;
    block.matrix.forEach((row, rIndx) => {
      row.forEach((cell, cIndx) => {
        if (cell === "@") {
          image(asset, (cIndx+xoffset)*this.blocksize, (rIndx+yoffset)*this.blocksize, blocksize, blocksize);
        }
      });
    })
  }

  clearLines() {
    let cleared = 0;
    let newMatrix = [];
    this.matrix.forEach(row => {
      if (!row.every(cell => cell === "x")) {
        newMatrix.push(row);
      } else {
        cleared++;
      }
    });
    for (let i=0; i<cleared; i++) {
      newMatrix.unshift('..........'.split('')); // @TODO: adapt for variable blocksX !!!
    }
    this.matrix = newMatrix;
  }
}

/*
 * FOR DEMO PURPOSE ONLY
 */
const EMPTY_MATRIX = [];
EMPTY_MATRIX.push('..........'.split(''));
EMPTY_MATRIX.push('..........'.split(''));
EMPTY_MATRIX.push('..........'.split(''));
EMPTY_MATRIX.push('..........'.split(''));
EMPTY_MATRIX.push('..........'.split(''));
EMPTY_MATRIX.push('..........'.split(''));
EMPTY_MATRIX.push('..........'.split(''));
EMPTY_MATRIX.push('..........'.split(''));
EMPTY_MATRIX.push('..........'.split(''));
EMPTY_MATRIX.push('..........'.split(''));
EMPTY_MATRIX.push('..........'.split(''));
EMPTY_MATRIX.push('..........'.split(''));
EMPTY_MATRIX.push('..........'.split(''));
EMPTY_MATRIX.push('..........'.split(''));
EMPTY_MATRIX.push('..........'.split(''));
EMPTY_MATRIX.push('..........'.split(''));
EMPTY_MATRIX.push('..........'.split(''));
EMPTY_MATRIX.push('..........'.split(''));
EMPTY_MATRIX.push('..........'.split(''));
EMPTY_MATRIX.push('..........'.split(''));

