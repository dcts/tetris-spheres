console.log("hi");
let gameCanvas;

document.addEventListener("DOMContentLoaded", () => {
  // check if canvas element exists and add bounce effect on it
  let existCondition = setInterval(() => {
    if (document.querySelector('#defaultCanvas0')) {
      console.log("Exists!");
      clearInterval(existCondition);
      addBouncingEffect();
    }
  }, 100); // check every 100ms

  // INTRO TRANSITIONS
  // fade in heading
  setTimeout(() => {
    document.querySelector(".header-section").classList.add("transition-opacity")
  }, 1000);
  // move header from middle to top
  setTimeout(() => {
    document.querySelector(".header-section").classList.add("transition-position")
  }, 2000);
  // make play button visible
  setTimeout(() => {
    document.querySelector("#play-button").classList.remove("invisible")
  }, 3500); // 3500

  // START GAME LOGIC
  document.querySelector("#play-button > .inner").addEventListener("click", () => {
    console.log("clicked");
    audioPlayer.playMusic();
    // remove play button
    const playButtonEl = document.querySelector("#play-button");
    playButtonEl.parentNode.removeChild(playButtonEl);
    // play particles background
    document.querySelector(".container").classList.remove("black-background");
    const videoEl = document.querySelector("#myVideo");
    videoEl.classList.remove("visibility-hidden");
    videoEl.play();
    // show and start game
    document.querySelector(".game-section").classList.remove("visibility-hidden");
    startGame();
  })
});

function addBouncingEffect() {
  gameCanvas = document.getElementById("defaultCanvas0");
  const bounceDown = () => {
    gameCanvas.classList.remove("bounce-down");
    void gameCanvas.offsetWidth;
    gameCanvas.classList.add("bounce-down");
  }
  window.bounceDown = bounceDown;
}
