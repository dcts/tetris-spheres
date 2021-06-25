/*
* AUDIO PLAYER
*/

class AudioPlayer {
  constructor() {
    this.effect = new Audio('../audio/effect.mp3');
    this.tetrisEffect = new Audio('../audio/tetrisEffect.mp3');
    this.intro = new Audio('../audio/intro.mp3');
    this.loop = new Audio('../audio/loop.mp3');
    this.ready = 0;

    [this.effect, this.tetrisEffect, this.intro, this.loop].forEach(audio => {
      audio.addEventListener("canplay", () => {
        this.ready++;
      });
    })

    this.playLoop = function (event) {
      this.loop.pause();
      this.loop.currentTime = 0;
      this.loop.play();
    };
  }

  loading() {
    return !this.isReady();
  }

  isReady() {
    return this.ready === 4
  }

  playMusic() {
    console.log("inside playMusic() => this.ready");
    console.log(this.ready);
    this.playIntro();
    this.intro.addEventListener("ended", this.playLoop.bind(this), false); // Trick
    this.loop.addEventListener("ended", this.playLoop.bind(this), false); // Trick
  }

  playIntro() {
    this.intro.pause();
    this.intro.currentTime = 0;
    console.log("this.intro.play()");
    console.log(this.intro.play());
  }

  playEffect() {
    this.effect.pause();
    this.effect.currentTime = 0;
    this.effect.play();
  }

  playTetrisEffect() {
    this.tetrisEffect.pause();
    this.tetrisEffect.currentTime = 0;
    this.tetrisEffect.play();
  }
}
