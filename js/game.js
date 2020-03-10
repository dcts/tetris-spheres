// GLOBAL VARIABLES
const blocksize = 30;
const sizeWidth = 10;
const sizeHeight = 20;
const gamefield = new GameField(sizeWidth, sizeHeight);

let square;

function preload() {
  square = loadImage('../img/assets/stroke_with_fill.svg');
  square = loadImage('../img/assets/only_stroke.svg');
  square = loadImage('../img/assets/stroke_with_fill.svg');
  elI = loadImage('../img/assets/element_2.svg');
  el4 = loadImage('../img/assets/element_4.svg');
}

function setup() {
  pixelDensity(10);
  let myCanvas = createCanvas(blocksize*sizeWidth, blocksize*sizeHeight);
  myCanvas.parent("game-canvas"); // put scetch inside div with id "game-canvas"
}

function draw() {
  clear();
  background('rgba(0,0,0,0.5)');

  // CURRENT TETROMINO SIMULATION
  image(square, 90, 90, 30, 30);
  image(square, 120, 90, 30, 30);
  image(square, 150, 90, 30, 30);
  image(square, 90, 120, 30, 30);

  // WALL SIMULATION
  image(square, 0, 570, 30, 30);
  image(square, 0, 570, 30, 30);
  image(square, 0, 540, 30, 30);
  image(square, 30, 570, 30, 30);
  image(square, 60, 570, 30, 30);
  image(square, 120, 570, 30, 30);
  image(square, 150, 570, 30, 30);
  image(square, 180, 570, 30, 30);
  image(square, 210, 570, 30, 30);
  image(square, 240, 570, 30, 30);
  image(square, 270, 570, 30, 30);

  // GHOST SIMULATION
  image(el4, 90, 450+3*30, 90, 60);
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
