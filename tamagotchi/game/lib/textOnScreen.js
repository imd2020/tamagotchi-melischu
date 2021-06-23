export default class textOnScreen {
  constructor(x, y, s, text) {
    this.xPos = x;
    this.yPos = y;
    this.scale = s;
    this.text = text;
  }

  display() {
    fill(100, 20, 54);
    textAlign(CENTER);
    textSize(this.scale * 5);
    textStyle(ITALIC);
    text(this.text, this.xPos, this.yPos);
  }
}
