class Timer {
  constructor() {
    this.startingTime = Date.now();
    this.timePassed = 0;
  }

  update() {
    this.timePassed = Date.now() - this.startingTime;
  }
  updateUi() {
    let seconds = this.timePassed / 1000;
    let minutes = Math.floor(seconds / 60);
    document.getElementById("inject-time").innerText = `${transformMinutes(minutes)}:${transformSeconds(seconds)}`;
  }
}

function transformSeconds(seconds) {
  let rounded = (seconds % 60).toFixed(2);
  if (rounded < 10) {
    return ("0" + rounded.toString());
  } else {
    return rounded.toString();
  }
}
function transformMinutes(minutes) {
  if (minutes < 10) {
    return ("0" + minutes.toString());
  } else {
    return minutes.toString();
  }
}
