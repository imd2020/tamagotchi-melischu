export default class PlantStates {
  //initialising constructor variables
  constructor(nextPositivState = "false", nextNegativState = "false") {
    this.nextPositivState = nextPositivState;
    this.nextNegativState = nextNegativState;
  }
  //initialising positiv an negativ states for state change
  nextState(stateChange) {
    if (stateChange === "positiv") {
      return this.nextPositivState;
    } else if (stateChange === "negativ") {
      return this.nextNegativState;
    }
  }
}
