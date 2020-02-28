function GameField (sizeWidth, sizeHeight) {
  /*
   * Matrix represents game state
   * . = empty
   * @ = block (can be moved by player)
   * # = wall (manifestated block)
   */
  this.matrix = constructMatrix(sizeWidth, sizeHeight);

  this.displayStr = function() {

    console.log(matrixToString());
  }
  this.matrixToString = function(matrix) {
    let str = "";
    matrix.forEach(row => {
      row.forEach(cell => {
        str += cell;
      });
      str += "\n";
    });
    return str;
  }
}

function constructMatrix(sizeWidth, sizeHeight) {
  return new Array(sizeHeight).fill(new Array(sizeWidth).fill("."));
}
