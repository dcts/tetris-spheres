// GLOBAL VARIABLES
const blocksize = 30;
const blocksX = 10;
const blocksY = 20;
const intervall = 1000; // in milliseconds

let gamestate;
let gamefield;
let block;
let blockNext;
let assets;
let timer;
let timecount;

function preload() {
  assets = {
    // SVG have to have width and height set to work in firefox!!!
    square: loadImage('/img/assets/stroke_with_dot.svg'),
    ghost: loadImage('/img/assets/only_stroke.svg'),
  }
}

function setup() {
  gamefield = new GameField(blocksX, blocksY, blocksize, assets);
  gamestate = new GameState();
  block = new Block();
  blockNext = new Block();
  pixelDensity(10);
  let myCanvas = createCanvas(blocksize*blocksX, blocksize*blocksY);
  myCanvas.parent("game-canvas"); // put scetch inside div with id "game-canvas"
  timer = new Timer();
  timecount = 0;
}

function draw() {
  clear();
  background('rgba(0,0,0,0.5)');
  gamestate.updateScore(gamefield);
  gamestate.updateScoreUi();
  gamefield.drawField(block);
  gamefield.clearLines();
  timer.update();
  timer.updateUi();
  if (timer.timePassed > timecount * intervall) {
    timecount++;
    hasNoCollision = block.moveIfNoCollision("DOWN", gamefield);
    if (!hasNoCollision) {
      block.toWall(gamefield);
      block = blockNext;
      blockNext = new Block();
    }
  }
}


