function keyPressed() {
  if (key=='ArrowLeft') {
    block.moveIfNoCollision("LEFT", gamefield);
  }

  if (key=='ArrowRight') {
    block.moveIfNoCollision("RIGHT", gamefield);
  }

  if (key=='ArrowDown') {
    block.moveIfNoCollision("DOWN", gamefield);
  }
  if (key=='ArrowUp') {
    block.rotateIfNoCollision(gamefield);
  }
  if (key==' ') {
    block.fallDown(gamefield);
    block.toWall(gamefield);
    block = blockNext;
    blockNext = new Block();
  }
  if (key=='Control') {
    console.log("save brick");
  }
  if (key=='Enter') {
    block.toWall(gamefield);
  }
}

