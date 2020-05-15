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
    bounceDown();
  }

  if (key=='Shift' || key=='Conrol') {
    if (blockSaved === null) {
      // save current block to saved
      let blockNextCopy = blockNext.copy();
      blockNextCopy.x = block.x;
      blockNextCopy.y = block.y;
      if (!blockNextCopy.hasCollision(gamefield)) {
        blockSaved = block.copy();
        block = blockNext.copy();
        block.x = blockSaved.x;
        block.y = blockSaved.y;
      }
    } else {
      // swap block with saved
      blockSaved.x = block.x;
      blockSaved.y = block.y;
      if (!blockSaved.hasCollision(gamefield)) {
        let blockCopy = block.copy();
        block = blockSaved.copy();
        blockSaved = blockCopy.copy();
      }
    }
  }

  if (key=='Enter') {
    block.toWall(gamefield);
  }
}

