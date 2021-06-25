export default class Button {
  //initialising constructor variables
  constructor(xPos, yPos, width, hight, scale, r, g, b, gsap) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.hight = hight;
    this.scale = scale;
    this.r = r;
    this.g = g;
    this.b = b;
    this.gsap = gsap;
    this.rect = {
      x: xPos,
      y: yPos,
    };
  }

  //draw button
  display(buttonText) {
    noStroke();

    fill(this.r, this.g, this.b);
    rect(
      this.scale * this.rect.x,
      this.scale * this.rect.y,
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
      this.scale * this.rect.x + (this.scale * this.width) / 2,
      this.scale * this.rect.y + (this.scale * this.hight) / 2 + this.scale * 2
    );
  }
  //hover animation function
  onHover() {
    if (
      mouseX >= this.scale * this.xPos &&
      mouseX <= this.scale * this.xPos + this.scale * this.width &&
      mouseY >= this.scale * this.yPos &&
      mouseY <= this.scale * this.yPos + this.scale * this.hight
    ) {
      if (this.gsap !== "default") {
        console.log("im doing");

        this.gsap.to(this.rect, {
          duration: 1,
          ease: "yoyoEase",
          x: 400,
          onComplete: () => {
            this.gsap.to(this.rect, {
              duration: 1,
              ease: "yoyoEase",
              x: this.xPos,
              onComplete: () => {
                console.log("ready");
              },
            });
          },
        });
      }
    }
  }

  //click function
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
