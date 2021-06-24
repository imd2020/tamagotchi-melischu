export default class PlantStates {
  constructor(nextPositivState = "false", nextNegativState = "false") {
    this.nextPositivState = nextPositivState;
    this.nextNegativState = nextNegativState;
  }

  nextState(stateChange) {
    if (stateChange === "positiv") {
      return this.nextPositivState;
    } else if (stateChange === "negativ") {
      return this.nextNegativState;
    }
  }
}
