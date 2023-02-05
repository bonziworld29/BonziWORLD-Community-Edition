import BonziData from "./BonziData.js";
// canvas would be better here but this is way easier
export default class BonziSprite {
  constructor({ bonzi, color, hue, saturation }) {
    this.frame = 0;
    this.bonzi = bonzi;
    this.color = color;
    this.$canvas = bonzi.$canvas;
    this.currentAnimation = "idle";
    this.isIdle = true;
    this.frame = 0;
    this.frameQueue = [];
    this.setColor(color, hue, saturation);
  }
  update() {
    if (this.isIdle)
      return;
    if (this.frameQueue.length === 0) {
      this.currentAnimation = "idle";
      this.idle();
      return;
    }
    let frame = this.frameQueue.shift();
    if (typeof frame === "string") {
      this.play(frame);
    }
    else {
      this.displayFrame(frame);
    }
  }
  setColor(color, hue, saturation) {
    this.$canvas.css("background-image", `url("/img/bonzi/${color}.gif")`);
    this.$canvas.css("filter", `hue-rotate(${hue}deg) saturate(${saturation}%)`);
  }
  play(animation) {
    this.isIdle = false;
    this.frameQueue = [...BonziData.sprite.animations[animation]];
    this.currentAnimation = animation;
  }
  idle() {
    if (this.currentAnimation in BonziData.toIdle) {
      let toPlay = BonziData.toIdle[this.currentAnimation];
      this.play(toPlay);
    }
    else {
      this.isIdle = true;
      this.displayFrame(0);
      this.frameQueue = [];
    }
  }
  displayFrame(frame = 0) {
    this.frame = frame;
    let { width, height } = BonziData.sprite.frames;
    this.$canvas.css("background-position-x", `-${Math.floor(frame % 17) * width}px`);
    this.$canvas.css("background-position-y", `-${Math.floor(frame / 17) * height}px`);
  }
}
//# sourceMappingURL=BonziSprite.js.map