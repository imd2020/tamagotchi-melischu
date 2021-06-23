import textOnScreen from "lib\\textOnScreen.js";
import Button from "lib\\button.js";
import BackgroundImg from "lib\\backgroundImg.js";
import plantStates from "lib\\states.js";

let startButton = new Button(300, 550, 200, 100, 1, 255, 100, 150);
let positivButton = new Button(500, 400, 100, 50, 1, 100, 255, 100);
let negativButton = new Button(200, 400, 100, 50, 1, 100, 255, 100);

//set background
let backgroundImg = new BackgroundImg(100, 100, 4);

let textonStartScreen = new textOnScreen(
  360,
  430,
  5,
  "Versuche mit Hilfe von verschiedenen Auswahlmöglichkeiten\n Betti Bloom zum Blühen zu bringen!"
);

let seedState = new plantStates("germ", "soil");
let germState = new plantStates("buds", "withered_germ");
let budsState = new plantStates("plant", "withered_buds");
let plantState = new plantStates("positiv_endscreen");
let soilState = new plantStates("seed");
let withered_germState = new plantStates("germ", "withered_plant");
let withered_budsState = new plantStates("buds", "withered_plant");
let withered_plantState = new plantStates("negativ_endscreen");
let positiv_endscreenState = new plantStates("start");
let negativ_endscreenState = new plantStates("start");
let startState = new plantStates("seed");

let state = "start";
let clicked = false;

function draw() {
  if (state === "start") {
    backgroundImg.displayScreen("start");
    textonStartScreen.display();
    //startscreen
    startButton.display("go!");
    startButton.onHover();
    if (startButton.onClick(clicked)) {
      state = startState.nextState("positiv");
    }
  }
  if (state === "positiv_endscreen") {
    backgroundImg.displayScreen("positiv_endscreen");
    textonStartScreen.display();
    //startscreen
    startButton.display("new Game");
    startButton.onHover();
    if (startButton.onClick(clicked)) {
      state = positiv_endscreenState.nextState("positiv");
    }
  }
  if (state === "negativ_endscreen") {
    backgroundImg.displayScreen("negativ_endscreen");
    textonStartScreen.display();
    //startscreen
    startButton.display("restart!");
    startButton.onHover();
    if (startButton.onClick(clicked)) {
      state = negativ_endscreenState.nextState("positiv");
    }
  }
  if (state === "soil") {
    backgroundImg.displayScreen("soil");
    positivButton.display("Samen pflanzen");

    if (positivButton.onClick(clicked)) {
      state = soilState.nextState("positiv");
    }
  }
  if (
    state !== "start" &&
    state !== "positiv_endscreen" &&
    state !== "negativ_endscreen" &&
    state !== "soil"
  ) {
    backgroundImg.displayScreen(state);

    stateChange = "notSet";
    negativButton.display("neg");
    positivButton.display("pos");

    if (negativButton.onClick(clicked)) {
      stateChange = "negativ";
    }

    if (positivButton.onClick(clicked)) {
      stateChange = "positiv";
    }
    if (stateChange !== "notSet") {
      if (state === "seed") {
        state = seedState.nextState(stateChange);
      } else if (state === "germ") {
        state = germState.nextState(stateChange);
      } else if (state === "buds") {
        state = budsState.nextState(stateChange);
      } else if (state === "plant") {
        state = plantState.nextState(stateChange);
      } else if (state === "soil") {
        state = soilState.nextState(stateChange);
      } else if (state === "withered_germ") {
        state = withered_germState.nextState(stateChange);
      } else if (state === "withered_buds") {
        state = withered_budsState.nextState(stateChange);
      } else if (state === "withered_plant") {
        state = withered_plantState.nextState(stateChange);
      } else {
        Console.log("StateError!");
      }
    }
  }
  if (clicked) {
    clicked = false;
  }
}

function mouseClicked() {
  clicked = true;
}
