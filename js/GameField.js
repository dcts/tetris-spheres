function GameField (sizeWidth, sizeHeight, blocksize, assets) {
  /*
   * Matrix represents game state
   * . = empty
   * @ = block (can be moved by player)
   * # = wall (manifestated block)
   */
  this.sizeWidth = sizeWidth;
  this.sizeHeight = sizeHeight;
  this.blocksize = blocksize;
  this.matrix = constructMatrix(sizeWidth, sizeHeight);
  this.matrix = demoMatrix();
  this.assets = assets;

  this.displayStr = function() {
    console.log(this.matrixToString());
  }
  this.matrixToString = function() {
    let str = "";
    this.matrix.forEach(row => {
      row.forEach(cell => {
        str += cell;
      });
      str += "\n";
    });
    return str;
  }

  this.drawField = function () {
    // HARDCODED DEMO
    // simulate current block
    image(this.assets.square, 180, 90, 30, 30);
    image(this.assets.square, 210, 90, 30, 30);
    image(this.assets.square, 240, 90, 30, 30);
    image(this.assets.square, 180, 120, 30, 30);
    // simulate ghost
    image(this.assets.el4, 180, 540, 90, 60);


    // WALL SIMULATION
    this.matrix.forEach((row, rIndx) => {
      row.forEach((cell, cIndx) => {
        if (cell === "x") {
          image(this.assets.square, cIndx*this.blocksize, rIndx*this.blocksize, 30, 30);
        }
      });
    })
  }
}

function constructMatrix(sizeWidth, sizeHeight) {
  return new Array(sizeHeight).fill(new Array(sizeWidth).fill("."));
}

/*
 * FOR DEMO PURPOSE ONLY
 */
function demoMatrix() {
  const matrix = [];
  matrix.push("..........".split(""));
  matrix.push("..........".split(""));
  matrix.push("..........".split(""));
  matrix.push("..........".split(""));
  matrix.push("..........".split(""));
  matrix.push("..........".split(""));
  matrix.push("..........".split(""));
  matrix.push("..........".split(""));
  matrix.push("..........".split(""));
  matrix.push("..........".split(""));
  matrix.push("..........".split(""));
  matrix.push("..........".split(""));
  matrix.push("..........".split(""));
  matrix.push("..........".split(""));
  matrix.push("..........".split(""));
  matrix.push("..........".split(""));
  matrix.push("..........".split(""));
  matrix.push("..........".split(""));
  matrix.push("....x.....".split(""));
  matrix.push("xxx.x..xxx".split(""));
  matrix.push("xxxxx.xxxx".split(""));
  matrix.push(".xxxxxxxxx".split(""));
  return matrix;
}
