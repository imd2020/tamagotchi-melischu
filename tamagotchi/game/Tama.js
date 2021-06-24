import TextOnScreen from "./lib/textOnScreen.js";
import Button from "./lib/button.js";
import BackgroundImg from "./lib/backgroundImg.js";
import PlantStates from "./lib/states.js";

let startButton = new Button(300, 550, 200, 100, 1, 255, 100, 150);
let RestartButton = new Button(300, 250, 200, 100, 1, 255, 100, 150);
let positivButton = new Button(500, 50, 100, 50, 1, 200, 155, 100);
let negativButton = new Button(200, 50, 100, 50, 1, 200, 155, 100);
let stateChange;
//set background
let backgroundImg = new BackgroundImg(100, 100, 4);

let textonStartScreen = new TextOnScreen(
  360,
  430,
  5,
  "Versuche mit Hilfe von verschiedenen Auswahlmöglichkeiten\n Betti Bloom zum Blühen zu bringen!"
);

let textOnPositivEndscreen = new TextOnScreen(
  360,
  200,
  5,
  "Betti Bloom blüht in voller Schönheit!"
);

let textOnNegativEndscreen = new TextOnScreen(
  360,
  200,
  5,
  "Oh nein Betti Bloom ist vertrocknet!"
);

let seedState = new PlantStates("germ", "soil");
let germState = new PlantStates("buds", "withered_germ");
let budsState = new PlantStates("plant", "withered_buds");
let plantState = new PlantStates("positiv_endscreen");
let soilState = new PlantStates("seed");
let withered_germState = new PlantStates("germ", "withered_plant");
let withered_budsState = new PlantStates("buds", "withered_plant");
let withered_plantState = new PlantStates(
  "negativ_endscreen",
  "negativ_endscreen"
);
let positiv_endscreenState = new PlantStates("start");
let negativ_endscreenState = new PlantStates("start");
let startState = new PlantStates("seed");

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
    textOnPositivEndscreen.display();
    //startscreen
    RestartButton.display("new Game");
    startButton.onHover();
    if (RestartButton.onClick(clicked)) {
      state = positiv_endscreenState.nextState("positiv");
    }
  }
  if (state === "negativ_endscreen") {
    backgroundImg.displayScreen("negativ_endscreen");
    textOnNegativEndscreen.display();
    //startscreen
    RestartButton.display("restart!");
    startButton.onHover();
    if (RestartButton.onClick(clicked)) {
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

    //positiv and negativ button
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
window.draw = draw;
window.mouseClicked = mouseClicked;
