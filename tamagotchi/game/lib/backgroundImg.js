export default class BackgroundImg {
  //initialising constructor variables
  constructor(x, y, s) {
    this.xPos = x;
    this.yPos = y;
    this.scale = s;
    //source path for each screen
    this.startscreen_Img = loadImage("lib\\screens\\startscreen.png");
    this.seed_Img = loadImage("lib\\screens\\seed.png");
    this.germ_Img = loadImage("lib\\screens\\germ.png");
    this.buds_Img = loadImage("lib\\screens\\buds.png");
    this.plant_Img = loadImage("lib\\screens\\plant.png");
    this.soil_Img = loadImage("lib\\screens\\soil.png");
    this.withered_germ_Img = loadImage("lib\\screens\\withered_germ.png");
    this.withered_buds_Img = loadImage("lib\\screens\\withered_buds.png");
    this.withered_plant_Img = loadImage("lib\\screens\\withered_plant.png");
    this.positiv_endscreen_Img = loadImage(
      "lib\\screens\\negativ_endscreen.png"
    );
    this.negativ_endscreen_Img = loadImage(
      "lib\\screens\\positiv_endscreen.png"
    );
  }

  //state and source definition for each screen
  displayScreen(state) {
    let pictureSource;
    if (state === "start") {
      pictureSource = this.startscreen_Img;
    } else if (state === "seed") {
      pictureSource = this.seed_Img;
    } else if (state === "germ") {
      pictureSource = this.germ_Img;
    } else if (state === "buds") {
      pictureSource = this.buds_Img;
    } else if (state === "plant") {
      pictureSource = this.plant_Img;
    } else if (state === "soil") {
      pictureSource = this.soil_Img;
    } else if (state === "withered_germ") {
      pictureSource = this.withered_germ_Img;
    } else if (state === "withered_buds") {
      pictureSource = this.withered_buds_Img;
    } else if (state === "withered_plant") {
      pictureSource = this.withered_plant_Img;
    } else if (state === "positiv_endscreen") {
      pictureSource = this.positiv_endscreen_Img;
    } else if (state === "negativ_endscreen") {
      pictureSource = this.negativ_endscreen_Img;
    } else {
      console.log("No state given!");
    }
    //define picture localisation
    image(pictureSource, 0, 0);
  }
}
