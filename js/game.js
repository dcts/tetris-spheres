// GLOBAL VARIABLES
const blocksize = 30;
const sizeWidth = 10;
const sizeHeight = 22;
let gamefield;
let assets;

function preload() {
  assets = {
    square: loadImage('/img/assets/stroke_with_fill.svg'),
    el2: loadImage('/img/assets/element_2.svg'),
    el4: loadImage('/img/assets/element_4.svg'),
  }
}

function setup() {
  gamefield = new GameField(sizeWidth, sizeHeight, blocksize, assets);
  pixelDensity(10);
  let myCanvas = createCanvas(blocksize*sizeWidth, blocksize*sizeHeight);
  myCanvas.parent("game-canvas"); // put scetch inside div with id "game-canvas"
}

function draw() {
  clear();
  background('rgba(0,0,0,0.5)');
  gamefield.drawField();
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

