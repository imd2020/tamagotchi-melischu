export default class Button {
  constructor(xPos, yPos, width, hight, scale, r, g, b) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.hight = hight;
    this.scale = scale;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  //draw button
  display(buttonText) {
    noStroke();

    fill(this.r, this.g, this.b);
    rect(
      this.scale * this.xPos,
      this.scale * this.yPos,
      this.scale * this.width,
      this.scale * this.hight
    );
    //text on button
    fill(255);
    textAlign(CENTER);
    textSize(this.scale * 20);
    textStyle(ITALIC);
    text(
      buttonText,
      this.scale * this.xPos + (this.scale * this.width) / 2,
      this.scale * this.yPos + (this.scale * this.hight) / 2 + this.scale * 2
    );
  }

  onHover() {
    if (
      mouseX >= this.scale * this.xPos &&
      mouseX <= this.scale * this.xPos + this.scale * this.width &&
      mouseY >= this.sclae * this.yPos &&
      mouseY <= this.sclae * this.yPos + this.scale * this.hight
    ) {
      console.log("im doing");

      this.strokeWeight(100);
    }
  }

  onClick(clicked) {
    if (
      clicked &&
      mouseX >= this.scale * this.xPos &&
      mouseX <= this.scale * this.xPos + this.scale * this.width &&
      mouseY >= this.scale * this.yPos &&
      mouseY <= this.scale * this.yPos + this.scale * this.hight
    ) {
      return true;
    } else {
      return false;
    }
  }
}
