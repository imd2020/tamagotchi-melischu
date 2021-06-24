import gsap from "/.gsap.min.js";

const imdRechteck = {
  x: 10,
  y: 0,
};

function draw() {
  clear();
  fill("pink");
  rect(imdRechteck.x, imdRechteck.y, 50, 50);
}

gsap.to(imdRechteck, {
  duration: 1,
  ease: "yoyoEase",
  x: 400,
  onComplete: () => {
    gsap.to(imdRechteck, {
      duration: 1,
      ease: "yoyoEase",
      x: 10,
      onComplete: () => {
        console.log("ready");
      },
    });
  },
});
