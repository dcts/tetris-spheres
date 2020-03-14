// GLOBAL VARIABLES
const blocksize = 30;
const blocksX = 10;
const blocksY = 22;
let gamefield;
let block;
let blockNext;
let assets;

function preload() {
  assets = {
    // square: loadImage('/img/assets/stroke_with_fill.svg'),
    // square: loadImage('/img/assets/only_stroke.svg'),
    square: loadImage('/img/assets/stroke_with_dot.svg'),
    el2: loadImage('/img/assets/element_2.svg'),
    el4: loadImage('/img/assets/element_4.svg'),
  }
}

function setup() {
  gamefield = new GameField(blocksX, blocksY, blocksize, assets);
  block = new Block();
  blockNext = new Block();
  pixelDensity(10);
  let myCanvas = createCanvas(blocksize*blocksX, blocksize*blocksY);
  myCanvas.parent("game-canvas"); // put scetch inside div with id "game-canvas"
}

function draw() {
  clear();
  background('rgba(0,0,0,0.5)');
  gamefield.drawField(block);
}


