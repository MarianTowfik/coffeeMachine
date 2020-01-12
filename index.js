// a class that defines how a coffee machine shall work
class CoffeeMachine {
  constructor() {
    //egenskaper(substantiv)
    this.pluggedIn = false;
    this.connectedToWater = false;
    this.amountOfCoffee = 0;
    this.numberOfCups = 0;
    this.dispenseACup = false;
    this.rightAmountOfBlackCoffee = 0;
    this.dispenseTheWater = 0;
    


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






  dispenseBlackCoffee(amount) {
    this.rightAmountOfBlackCoffee = amount;
  }

  dispenseWater(amount) {
    this.dispenseTheWater = amount;
  }



}

//export the coffeemachine class
module.exports = CoffeeMachine;
