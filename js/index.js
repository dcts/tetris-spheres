console.log("hi");
let gameCanvas;

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    gameCanvas = document.getElementById("defaultCanvas0");
    console.log(gameCanvas);
    const bounceDown = () => {
      gameCanvas.classList.remove("bounce-down");
      void gameCanvas.offsetWidth;
      gameCanvas.classList.add("bounce-down");
    }
    window.bounceDown = bounceDown;
  }, 2000);
});

