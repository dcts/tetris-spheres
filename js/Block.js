/*
 * BLOCK class
 * Tetrominos are called Blocks (for simplicity)
 */
class Block {

  constructor(type = "random") {
    if (type === "random") {
      this.type = randomType();
    } else {
      this.type = type;
    }
    this.x = 3;
    this.y = 0;
    this.rotationState = 0;
    this.matrix = BLOCKS[this.type];
  }

  rotate() {
    let newMatrix = [];
    let len = this.matrix.length;
    for (let col=0; col<len; col++) {
      let newRow = [];
      for (let row=len-1; row>=0; row--) {
        newRow.push(this.matrix[row][col]);
      }
      newMatrix.push(newRow);
    }
    this.matrix = newMatrix;
    this.rotationState = (this.rotationState + 1) % 4;
  }

  rotateIfNoCollision(gamefield) {
    let blockRotated = this.copy();
    blockRotated.rotate();
    if (!blockRotated.hasCollision(gamefield)) {
      this.rotate();
    }
  }

  move(direction) {
    this.x += DIR_LOOKUP[direction].x;
    this.y += DIR_LOOKUP[direction].y;
  }

  moveIfNoCollision(direction, gamefield) {
    let blockMoved = this.copy();
    blockMoved.move(direction);
    if (!blockMoved.hasCollision(gamefield)) {
      this.move(direction);
      return true;
    } else {
      return false;
    }
  }

  fallDown(gamefield) {
    let moved = this.moveIfNoCollision("DOWN", gamefield);
    while (moved) {
      moved = this.moveIfNoCollision("DOWN", gamefield);
    }
  }

  hasCollision(gamefield) {
    const xoffset = this.x;
    const yoffset = this.y;
    let hasCollision = false;
    this.matrix.forEach((row, rIndx) => {
      row.forEach((cell, cIndx) => {
        if (cell === "@") {
          try { // if gamefield out of bounds -> will cause error!
            // collision with gamefield
            if (gamefield.matrix[rIndx+yoffset][cIndx+xoffset] === "x") {
              hasCollision = true;
            }
            // left/right boundaries
            if (cIndx+xoffset < 0 || cIndx+xoffset > gamefield.blocksX - 1) {
              hasCollision = true;
            }
          } catch {
            hasCollision = true;
          }
        }
      })
    });
    return hasCollision;
  }

  toWall(gamefield) {
    const xoffset = this.x;
    const yoffset = this.y;
    this.matrix.forEach((row, rIndx) => {
      row.forEach((cell, cIndx) => {
        if (cell === "@") {
          gamefield.matrix[rIndx+yoffset][cIndx+xoffset] = "x";
        }
      })
    })
  }

  display() {
    let str = "";
    this.matrix.forEach(row => {
      row.forEach(cell => {
        str += cell;
      })
      str += "\n";
    })
    console.log(str);
  }

  copy() {
    let copiedBlock = new Block(this.type);
    copiedBlock.rotationState = this.rotationState;
    copiedBlock.matrix = this.matrix;
    copiedBlock.x = this.x;
    copiedBlock.y = this.y;
    return copiedBlock;
  }

  ghost(gamefield) {
    let ghost = this.copy();
    ghost.fallDown(gamefield);
    return ghost;
  }
}

const BLOCKS = {
  O: [['@','@'],
      ['@','@']],

  J: [['@','.','.'],
      ['@','@','@'],
      ['.','.','.']],

  L: [['.','.','@'],
      ['@','@','@'],
      ['.','.','.']],

  S: [['.','@','@'],
      ['@','@','.'],
      ['.','.','.']],

  Z: [['@','@','.'],
      ['.','@','@'],
      ['.','.','.']],

  T: [['.','.','.'],
      ['@','@','@'],
      ['.','@','.']],

  I: [['.','.','.','.'],
      ['@','@','@','@'],
      ['.','.','.','.'],
      ['.','.','.','.']]
}

function randomBlock() {
  return BLOCKS[Object.keys(BLOCKS)[Math.floor(Math.random()*Object.keys(BLOCKS).length)]];
};

function randomType() {
  return Object.keys(BLOCKS)[Math.floor(Math.random()*Object.keys(BLOCKS).length)];
};

const DIR_LOOKUP = {
  "DOWN":  {x: 0,  y: 1},
  "UP":    {x: 0,  y: -1},
  "RIGHT": {x: 1,  y: 0},
  "LEFT":  {x: -1, y: 0},
};
