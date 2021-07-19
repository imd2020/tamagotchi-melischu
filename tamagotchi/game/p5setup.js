function setup() {
  createCanvas(745, 745);
  frameRate(30);
}

window.addEventListener("resize", function () {
  resizeCanvas(windowWidth, windowHeight);
  clear();
});

new p5();
var width = windowWidth;
var height = windowHeight;
