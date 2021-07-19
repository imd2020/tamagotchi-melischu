//connect data with main project
import TextOnScreen from "./lib/textOnScreen.js";
import Button from "./lib/button.js";
import BackgroundImg from "./lib/backgroundImg.js";
import PlantStates from "./lib/states.js";
//import gsap from "./lib/gsap.min.js";

let stateChange;
//initialising buttons
let startButton = new Button(300, 550, 200, 100, 1, 255, 100, 150, gsap);
let RestartButton = new Button(300, 250, 200, 100, 1, 255, 100, 150, "default");
let positivButton = new Button(450, 50, 150, 50, 1, 200, 155, 100, "default");
let negativButton = new Button(150, 50, 150, 50, 1, 200, 155, 100, "default");

//set background
let backgroundImg = new BackgroundImg(100, 100, 4);

//initialising text on screen with parameters
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

//states and their next fllowing positiv and negativ states
let seedState = new PlantStates("germ", "soil");
let germState = new PlantStates("buds", "withered_germ");
let budsState = new PlantStates("plant", "withered_buds");
let plantState = new PlantStates("positiv_endscreen", "withered_plant");
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
let negButText = "";
let posButText = "";

function draw() {
  //startscreen
  if (state === "start") {
    backgroundImg.displayScreen("start");
    textonStartScreen.display();
    //show startbutton
    startButton.display("go!");
    startButton.onHover();
    //if starbutton is clicked, show next state
    if (startButton.onClick(clicked)) {
      state = startState.nextState("positiv");
      negButText = "Vogelangriff";
      posButText = "Bewässerung";
    }
  }
  //positiv endscreen
  if (state === "positiv_endscreen") {
    backgroundImg.displayScreen("positiv_endscreen");
    textOnPositivEndscreen.display();
    //show restart button on positiv endscreen
    RestartButton.display("new Game");
    startButton.onHover();
    //if restart button is clicked, show startscreen
    if (RestartButton.onClick(clicked)) {
      state = positiv_endscreenState.nextState("positiv");
    }
  }
  //negativ endscreen
  if (state === "negativ_endscreen") {
    backgroundImg.displayScreen("negativ_endscreen");
    textOnNegativEndscreen.display();
    //show restart button on negativ endscreen
    RestartButton.display("restart!");
    startButton.onHover();
    //if restart button is clicked, show startscreen
    if (RestartButton.onClick(clicked)) {
      state = negativ_endscreenState.nextState("positiv");
    }
  }
  //exception if state is soil
  if (state === "soil") {
    backgroundImg.displayScreen("soil");
    //show only one button with text
    positivButton.display(posButText);
    posButText = "Samen sähen";
    if (stateChange !== "notSet") {
      state = seedState.nextState(stateChange);
    }
    if (positivButton.onClick(clicked)) {
      state = soilState.nextState("positiv");
    }
    //to make sure that it only changes the state if this vurtain button was clicked
    if (clicked) {
      clicked = false;
    }
  }
  //in general all other screens and screen change
  if (
    state !== "start" &&
    state !== "positiv_endscreen" &&
    state !== "negativ_endscreen" &&
    state !== "soil"
  ) {
    backgroundImg.displayScreen(state);
    stateChange = "notSet";
    //positiv and negativ button
    negativButton.display(negButText);
    positivButton.display(posButText);
    //state change if mouse is clicked
    if (negativButton.onClick(clicked)) {
      stateChange = "negativ";
    }
    if (positivButton.onClick(clicked)) {
      stateChange = "positiv";
    }

    //state change definition
    //text for each button
    if (state === "seed") {
      negButText = "Vogelangriff";
      posButText = "Bewässerung";
      if (stateChange !== "notSet") {
        state = seedState.nextState(stateChange);
      }
    } else if (state === "germ") {
      if (stateChange !== "notSet") {
        state = germState.nextState(stateChange);
      }
      negButText = "Blumenerde";
      posButText = "Anzuchterde";
    } else if (state === "buds") {
      if (stateChange !== "notSet") {
        state = budsState.nextState(stateChange);
      }
      negButText = "Sprudelwasser";
      posButText = "Regenwasser";
    } else if (state === "plant") {
      if (stateChange !== "notSet") {
        state = plantState.nextState(stateChange);
      }
      negButText = "Abreißen";
      posButText = "Pflücken";
    } else if (state === "withered_germ") {
      if (stateChange !== "notSet") {
        state = withered_germState.nextState(stateChange);
      }
      negButText = "Trockenheit";
      posButText = "Bewässerung";
    } else if (state === "withered_buds") {
      if (stateChange !== "notSet") {
        state = withered_budsState.nextState(stateChange);
      }
      negButText = "Sturm";
      posButText = "Regen";
    } else if (state === "withered_plant") {
      if (stateChange !== "notSet") {
        state = withered_plantState.nextState(stateChange);
      }
      negButText = "abreißen";
      posButText = "ausbuddeln";
    } else {
      Console.log("StateError!");
    }
  }
  //to make sure that it only changes the state if this vurtain button was clicked
  if (clicked) {
    clicked = false;
  }
}

function mouseClicked() {
  clicked = true;
}

//html translation
window.draw = draw;
window.mouseClicked = mouseClicked;
