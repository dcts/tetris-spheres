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
    this.y = 1;
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
    console.log(this.rotationState);
  }

  moveDown() {
    this.y++;
  }
  moveUp() {
    this.y--;
  }
  moveRight() {
    this.x++;
  }
  moveLeft() {
    this.x--;
  }

  toWall(gamefield) {

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

// function dirLookup() {
//   return {
//     "DOWN":  {x: 0,  y: 1},
//     "UP":    {x: 0,  y: -1},
//     "RIGHT": {x: 1,  y: 0},
//     "LEFT":  {x: -1, y: 0},
//   };
// }
