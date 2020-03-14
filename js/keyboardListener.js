function keyPressed() {
  if (key=='ArrowLeft') {
    console.log("MOVE LEFT");
    block.moveLeft();
  }
  if (key=='ArrowRight') {
    console.log("MOVE RIGHT");
    block.moveRight();
  }
  if (key=='ArrowDown') {
    console.log("rotate DOWN");
    block.moveDown();
  }
  if (key=='ArrowUp') {
    console.log("rotate UP");
    block.rotate();
  }
  if (key==' ') {
    console.log("brick down");
    console.log("to WALL");
    block.toWall(gamefield);
    block = blockNext;
    blockNext = new Block();
  }
  if (key=='Control') {
    console.log("save brick");
  }
}
