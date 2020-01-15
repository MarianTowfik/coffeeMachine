// a class that defines how a coffee machine shall work
class CoffeeMachine {
  constructor() {
    //egenskaper(substantiv)
    this.pluggedIn = false;
    this.connectedToWater = false;
    this.amountOfCoffee = 0;
    this.numberOfCups = 0;
    this.dispenseACup = false;
    this.brewTheCoffee = false;
    this.rightAmountOfBlackCoffee = 0;
    this.dispenseTheWater = 0;
    this.dispensedCoffee = 0;
    this.heatedWater = false;
    this.steamedMilk = false;
    this.addTheSteamedMilk = false;

    


  }
  //metoder(verb)
  plugIn() {
    this.pluggedIn = true;
  }
  connectToWater() {
    this.connectedToWater = true;
  }
  fillWithCoffee(amount) {
    // 1000g
    //amount in gram
    this.amountOfCoffee = + amount;
  }
  fillWithCups(amount) {
    //amount (number of cups)
    this.numberOfCups += amount;
  }
  dispenseCup() {
      this.dispenseACup = true;

  }

  brewCoffee() {
    this.brewTheCoffee = true;
  }


  dispenseBlackCoffee(amount) {
    this.rightAmountOfBlackCoffee = amount;
  }

  dispenseWater(amount) {
    this.dispenseTheWater = amount;
  }

  dispenseCoffee(amount) {
    this.dispensedCoffee = amount;
  }
  heatWater() {
    this.heatedWater = true;
  }


  steamMilk() {
    this.steamedMilk = true;
  }

  addSteamedMilk() {
    this.addTheSteamedMilk = true;
  }




}

//export the coffeemachine class
module.exports = CoffeeMachine;
