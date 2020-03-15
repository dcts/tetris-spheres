class GameState {
  constructor() {
    this.score = 0;
    this.level = 0; // @TODO
    this.gamespeed = null; // @TODO
  }

  updateScore(gamefield) {
    let counter = 0;
    let scoreToAdd = 0;
    gamefield.matrix.map(row => row.every(cell => cell === "x")).forEach(lineIsCleared => {
      if (lineIsCleared) {
        counter += 1;
      } else if (!lineIsCleared && counter > 0) {
        scoreToAdd += this.getMultiplier()[counter.toString()]
        counter = 0;
      }
    })
    scoreToAdd += this.getMultiplier()[counter.toString()]
    this.score += scoreToAdd;
  }

  updateScoreUi() {
    document.getElementById("inject-score").innerText = numberWithCommas(this.score);
  }

  increaseLevel() {
    this.level += 1;
  }

  getMultiplier() {
    return {
      "0": 0,
      "1": (this.level + 1) * 40,
      "2": (this.level + 1) * 100,
      "3": (this.level + 1) * 300,
      "4": (this.level + 1) * 1200,
    }
  }
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
