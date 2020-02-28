// GLOBAL VARIABLES
const blocksize = 30;
const sizeWidth = 10;
const sizeHeight = 20;
const gamefield = new GameField(sizeWidth, sizeHeight);

function setup() {
  let myCanvas = createCanvas(blocksize*sizeWidth, blocksize*sizeHeight);
  myCanvas.parent("game-canvas"); // put scetch inside div with id "game-canvas"
}

function draw() {
  background(0);
  // background(Math.random()*255,Math.random()*255,0);
  // console.log(Math.random()*255);
  // check for collisions
}

function keyPressed() {
  if (key=='ArrowLeft') {
    console.log("MOVE LEFT");
  }
  if (key=='ArrowRight') {
    console.log("MOVE RIGHT");
  }
  if (key=='ArrowDown') {
    console.log("rotate DOWN");
  }
  if (key=='ArrowUp') {
    console.log("rotate UP");
  }
  if (key==' ') {
    console.log("brick down");
  }
  if (key=='Control') {
    console.log("save brick");
  }
}

// function keyReleased() {
//   if (key=='a') {
//     move = 0;
//   }
//   if (key=='d') {
//     move = 0;
//   }
// }
