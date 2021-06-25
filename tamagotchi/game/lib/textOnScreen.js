export default class TextOnScreen {
  //initialising constructor variables
  constructor(x, y, s, text) {
    this.xPos = x;
    this.yPos = y;
    this.scale = s;
    this.text = text;
  }
  //text on screen information
  display() {
    fill(100, 20, 54);
    textAlign(CENTER);
    textSize(this.scale * 5);
    textStyle(ITALIC);
    text(this.text, this.xPos, this.yPos);
  }
}
